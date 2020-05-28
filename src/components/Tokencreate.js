import React, { Component } from 'react'
import Web3 from 'web3'
import CreateToken from '../abis/CreateToken.json'
// import HDWalletProvider from '@truffle/hdwallet-provider'
// const HDWalletProvider = require('truffle-hdwallet-provider');
// import BuyForm from './BuyForm'
import './App.css'

class Tokencreate extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    // const address = '0xd2d729fCD2a28Ac8B4bE6612ce36054a247CA803';
    // const privateKey = "gesture burst glad vendor silly faculty nerve mimic teach disease buzz soft"
    const web3 = window.web3 
    // const provider = new HDWalletProvider(
    //   privateKey,
    //   'https://ropsten.infura.io/v3/b290a50e9362493e8882b002b9e44eb3'
    // )
  //  const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ ethBalance })

    // Load Token
    const networkId =  await web3.eth.net.getId()
    const tokenData = CreateToken.networks[networkId]
    if(tokenData) {
      const token = new web3.eth.Contract(CreateToken.abi, tokenData.address)
      this.setState({ token })
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({ tokenBalance: tokenBalance.toString() })
    } else {
      window.alert('Token contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      symbol: '',
      supply: '',
      decimals: '',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
    this.handleSupply = this.handleSupply.bind(this);
    this.handleDecimals = this.handleDecimals.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }
  handleSymbol(event) {
    this.setState({symbol: event.target.value});
  }
  handleSupply(event) {
    this.setState({supply: event.target.value});
  }
  handleDecimals(event) {
    this.setState({decimals: event.target.value});
  }
  handleSubmit(event) {
    //alert('Token Name: '+ this.state.name + ' Token Symbol: '+ this.state.symbol + ' Total Supply: '+ this.state.supply + ' Decimals: '+ this.state.decimals);
    this.state.token.methods.create(this.state.name,this.state.symbol,this.state.supply,this.state.decimals ).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
    event.preventDefault(); 
  }

  render() {
    return ( 
      <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">

              <form className="mb-3" onSubmit={this.handleSubmit}>
                <div>
                  <label className="float-left"><b>Token Name</b></label>
                  <span className="float-right text-muted">
                    Balance: {window.web3.utils.fromWei(this.state.ethBalance, 'Ether')}
                  </span>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Token Name"
                    value={this.state.name}
                    onChange={this.handleName}
                    required />
                </div>

                <div>
                  <label className="float-left"><b>Token Symbol</b></label>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Token Symbol"
                    value={this.state.symbol}
                    onChange={this.handleSymbol}
                    required />
                </div>

                <div>
                  <label className="float-left"><b>Total Supply</b></label>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Total Supply"
                    value={this.state.supply}
                    onChange={this.handleSupply}
                    required />
                </div>

                <div>
                  <label className="float-left"><b>Decimals</b></label>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Decimals"
                    value={this.state.decimals}
                    onChange={this.handleDecimals}
                    required />
                </div>

                  
                
          
          <div className="mb-5">
            <span className="float-left text-muted">Fee</span>
            <span className="float-right text-muted">Fee transaction in Ethereum Blockchain</span>
          </div>
          <button type="submit" className="btn btn-primary btn-block btn-lg">CREATE TOKEN</button>
        </form>
               

              </div>
            </main>
          </div>
        </div>
    ); 
  }
}

export default Tokencreate;
