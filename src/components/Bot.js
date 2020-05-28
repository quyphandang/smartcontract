import React, { Component } from 'react'
import './App.css'

class Tokencreate extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      symbol: '',
      supply: '',
      decimals: '',
      check: '',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      loading: true,
      button: 1,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStop = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
    this.handleSupply = this.handleSupply.bind(this);
    this.handleDecimals = this.handleDecimals.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({check: event.target.value});
  }
  handleSubmit(event) {
      if (this.state.button === 1) {
        alert('Start : Token Name: '+ this.state.name + ' Check ' + this.state.check + ' Token Symbol: '+ this.state.symbol + ' Total Supply: '+ this.state.supply + ' Decimals: '+ this.state.decimals);
      }
      if (this.state.button === 2) {
        alert('Stop : Token Name: '+ this.state.name + ' Check ' + this.state.check + ' Token Symbol: '+ this.state.symbol + ' Total Supply: '+ this.state.supply + ' Decimals: '+ this.state.decimals);
      }
    event.preventDefault(); 
  }

  

  render() {
    return ( 
      <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">

              <form className="mb-3" onSubmit={this.handleSubmit}>
                <div className="input-group mb-4">
                <label className="float-left label-t"><b>A</b></label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Input A"
                    value={this.state.name}
                    onChange={this.handleName}
                    required />
                </div>
                <div className="input-group mb-4">
                <label className="float-left label-t"><b>B</b></label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Input B"
                    value={this.state.symbol}
                    onChange={this.handleSymbol}
                    required />
                </div>
                <div className="input-group mb-4">
                <label className="float-left label-t"><b>C</b></label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Input C"
                    value={this.state.supply}
                    onChange={this.handleSupply}
                    required />
                </div>
                <div className="input-group mb-4">
                <label className="float-left label-t"><b>D</b></label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Input D"
                    value={this.state.decimals}
                    onChange={this.handleDecimals}
                    required />
                </div>

                <select className="input-group mb-4 select-class" value={this.state.check} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                  </select>
                 
                  <div className="mb-5">
                    <button type="submit" className="button-click float-left" onClick={() => (this.state.button = 1)}>Start</button>
                    <button  className="button-click float-right" onClick={() => (this.state.button = 2)}>Stop</button>
                </div>
               </form>
               
              </div>
            </main>
          </div>
        </div>
    ); 
  }
}

export default Tokencreate;
