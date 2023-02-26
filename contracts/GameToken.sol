pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract GameToken is ERC721, ERC721Enumerable, Pausable, AccessControl {
   
       using Counters for Counters.Counter;

    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("Game Token", "GAME") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function safeMint(address to) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getOwnerByIndex(uint256 index) public view returns (address) {
        require(index < totalSupply(), "Invalid token index");
        uint256 tokenId = tokenByIndex(index);
        return ownerOf(tokenId);
    }
    
    function getTokenIdByOwner(address owner, uint256 index) public view returns (uint256) {
        require(index < balanceOf(owner), "Invalid token index");
        return tokenOfOwnerByIndex(owner, index);
    }

    function getTokenIdByIndex(uint256 index) public view returns (uint256) {
        require(index < totalSupply(), "Invalid token index");
        return tokenByIndex(index);
    }

    mapping (address => mapping(uint256 => bool)) private heldNFTs;

    function deposit(address nftContractAddress, uint256 tokenId) public {
        IERC721 nftContract = IERC721(nftContractAddress);
        require(nftContract.ownerOf(tokenId) == msg.sender, "Not owner of NFT");
        nftContract.transferFrom(msg.sender, address(this), tokenId);
        heldNFTs[nftContractAddress][tokenId] = true;
    }
    
    function withdraw(address nftContractAddress, uint256 tokenId) public {
        IERC721 nftContract = IERC721(nftContractAddress);
        require(heldNFTs[nftContract][tokenId], "NFT not held by contract");
        heldNFTs[nftContract][tokenId] = false;
        nftContract.transferFrom(address(this), msg.sender, tokenId);
    }
    
    function isHeld(address nftContractAddress, uint256 tokenId) public view returns (bool) {
        IERC721 nftContract = IERC721(nftContractAddress);
        return heldNFTs[nftContract][tokenId];
    }

}