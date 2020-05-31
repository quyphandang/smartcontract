// const Token = artifacts.require("Token");
// const EthSwap = artifacts.require("EthSwap");
const CreateToken =  artifacts.require("CreateToken");
module.exports = async function(deployer) {
  //Deploy Token
  // await deployer.deploy(Token);
  // const token = await Token.deployed()
  //Deploy EthSwap
  // await deployer.deploy(EthSwap, token.address);
  // const ethSwap = await EthSwap.deployed()

//Transfer all tokens to EthSwap (1 million)   
  // await token.transfer('0x833B170cebaA2F610012bDf92ABF7ED053a4DC2C', '1000000000000000000000000')
  // await token.transfer(ethSwap.address, '800000000000000000000000')

  //Deploy CreateToken
  await deployer.deploy(CreateToken);
  const createToken = await CreateToken.deployed()
  // await createToken.transfer(createToken.address, '1000000000000000000000000')
};
