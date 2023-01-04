pragma solidity ^0.5.16;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract GameToken is ERC721Full {
    constructor() ERC721Full("Game Token", "GAME") public{
    }
    
    function mint(address _to, string memory _tokenURI) public returns(bool) {
        uint _tokenId = totalSupply().add(1);
       _mint(_to, _tokenId);
       _setTokenURI(_tokenId, _tokenURI);
       return true;
    }   
    
}