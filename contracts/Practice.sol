pragma solidity ^0.5;

contract Practice{
    
    uint cost = 0.2 ether;
    address payable owners = address(uint160(msg.sender));
 /**   function Prueba() public {
        address payable owners;
        owners=msg.sender;
    }**/
    
    struct Person {
        uint id;
        string user;
        bool debt;
    }
    
    mapping(address=> Person)public buyers;
    
    function RegisterPerson(bool _isExist, uint _id, string memory _user, bool _debt) public{
        if(_isExist){
             revert();
        }else{
            buyers[msg.sender]=Person({
                id: _id,
                user: _user,
                debt: _debt
            });
        }
    }
    
    function getDebtBuyer(address ins) public view returns (bool) {
        return (buyers[ins].debt);
    }
    
    
    
    
  function BuyEnergy() payable public returns(int){
      bool vari= getDebtBuyer(msg.sender);
     /** address payable wallet;
      wallet=address(uint160(msg.sender));**/
        if(vari){
            return 0;
        }else if(msg.value>= cost){
            owners.transfer(owners.balance+cost);
            return 1;
        }else{
            return 2;
        }
    }
}

