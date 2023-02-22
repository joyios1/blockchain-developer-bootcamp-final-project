pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract GameToken is ERC721Enumerable, Pausable, Ownable {
   
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Game Token", "GAME") public onlyOwner{}

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }    

    function getTokenIdByIndex(uint256 index) public view returns (uint256) {
        require(index < totalSupply(), "Invalid token index!!!");
        return tokenByIndex(index);
    }

    function getTokenIdByOwner(address owner, uint256 index) public view returns (uint256) {
        require(index < balanceOf(owner), "Invalid token index");
        return tokenOfOwnerByIndex(owner, index);
    }

    function getOwnerByIndex(uint256 index) public view returns (address) {
        require(index < totalSupply(), "Invalid token index");
        uint256 tokenId = tokenByIndex(index);
        return ownerOf(tokenId);
    }

        function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

}