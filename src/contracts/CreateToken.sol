pragma solidity ^0.5.0;

contract CreateToken {
    string  public name ;
    string  public symbol ;
    uint256 public totalSupply ; // 1 million tokens
    uint8   public decimals ;
    
    // string internal name;
    // string internal symbol;
    // uint8 internal decimals;
    // uint256 internal totalSupply;
 
    // struct Infotoken {
    //     string  name;
    //     string   symbol;
    //     uint256  totalSupply;
    //     uint     decimals;
    // }
    // Infotoken public infotoken;

    function create(string memory name1, string memory symbol1, uint256 totalSupply1, uint8 decimals1) public  payable {
        //  Infotoken(name,symbol,totalSupply,decimals);
        name = name1;
        symbol = symbol1;
        totalSupply = totalSupply1; // 1 million tokens
        decimals = decimals1;
    }
    
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() public {
        balanceOf[msg.sender] =  totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}