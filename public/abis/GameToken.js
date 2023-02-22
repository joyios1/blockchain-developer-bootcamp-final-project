GameToken = {
  "contractName": "GameToken",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_tokenURI",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_tokenURI\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"return\":\"uint256 representing the amount owned by the passed address\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a preffix in {tokenURI} to each token's URI, when they are non-empty.    * _Available since v2.5.0._\"},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"return\":\"address currently approved for the given token ID\"},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"name()\":{\"details\":\"Gets the token name.\",\"return\":\"string representing the token name\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"return\":\"address currently marked as the owner of the given token ID\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Gets the token symbol.\",\"return\":\"string representing the token symbol\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"tokenURI(uint256)\":{\"details\":\"Returns the URI for a given token ID. May return an empty string.     * If the token's URI is non-empty and a base URI was set (via {_setBaseURI}), it will be added to the token ID's URI as a prefix.     * Reverts if the token ID does not exist.\"},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"return\":\"uint256 representing the total amount of tokens\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/zois/TowerDefenseNFTs/contracts/GameToken.sol\":\"GameToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/zois/TowerDefenseNFTs/contracts/GameToken.sol\":{\"keccak256\":\"0xdbfe7fe8f283a62843b2728c9a328cbc7a6d9e67bbd6821f38b1e2896b07079a\",\"urls\":[\"bzz-raw://b908e8c776ca4c5e2967b0d61c81e7dccd955ccfc979f3f2f3181bbb6f6cd9ac\",\"dweb:/ipfs/QmNxYhMEBfsgv7WxgdpzXCYYcefkaaAgn1tcaQeEZ3Tymb\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x90a3995645af7562d84b9d69363ffa5ae7217714ab61e951bf7bc450f40e4061\",\"urls\":[\"bzz-raw://216ef9d6b614db4eb46970b4e84903f2534a45572dd30a79f0041f1a5830f436\",\"dweb:/ipfs/QmNPrJ4MWKUAWzKXpUqeyKRUfosaoANZAqXgvepdrCwZAG\"]},\"@openzeppelin/contracts/drafts/Counters.sol\":{\"keccak256\":\"0x5be8533c5950173dc2b77b75108fae6e6c5449aedadde3385ba457394aad2384\",\"urls\":[\"bzz-raw://d429fb04f5b31d909dc759d0f88e28055b80b4dd43e5def4dffc947fa0609229\",\"dweb:/ipfs/QmaY9idX5CwLLtjjTQAdiiaDSrncgafkatUZXTbbajpz8b\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x01aedbf24e121a744262e04c7815b2a4c8ce604dee4829c5cff00943a594ccf3\",\"urls\":[\"bzz-raw://999ab32a6498d8ad8db61d47c3774aae2ff919acceebe2aeb50879bef62642c3\",\"dweb:/ipfs/QmephAYF5hoymu9qCFK6mURM2kZJCxU4ntUb4KTf1miVPT\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xe0ed10f53955c35eecb02724538650a155aa940be3f0a54cd3bde6c6b0c6e48c\",\"urls\":[\"bzz-raw://7dcfda88e3225987245908c3296f3559752647036804325ebfaa9fd1545161c3\",\"dweb:/ipfs/QmXxx5rHfLL57zdgyyyG9MMv4XGN7bpVSc2MuDcaCgto6u\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1a1c02bc2487c763ad240f6b6440ec9dcb84870879aea3ed2a6b9cd300b637c7\",\"urls\":[\"bzz-raw://e6351696020fecf1c1b09437a2961cbdc3e1579238a9573b8577b58af463eeb6\",\"dweb:/ipfs/QmTg7UxUcuENko38JL2Pb2aqXkWgqW1xPDbJwmfo3RVrrV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721Enumerable.sol\":{\"keccak256\":\"0x28f4e41b86db783cd8daf9fdec839ce5930332b60f6dc9ac4992dfb584997e79\",\"urls\":[\"bzz-raw://6f1b545ec9e1f0284e86ddd4ffff353e1ab5e026bbbfaa2a5d2d791c39d7afd7\",\"dweb:/ipfs/Qmf9rVfj6LreiE7NHkkT1S7eLbSQDDY1gKd9XWERx2AN7W\"]},\"@openzeppelin/contracts/token/ERC721/ERC721Full.sol\":{\"keccak256\":\"0x307231237999e19b618a03e7ecff1cee2a189dd019ebd203e5e43a63a7ac8aa3\",\"urls\":[\"bzz-raw://9a169446f024a24c3e5146cbeefea6be3bbbe9ba836f98f9d0c64af9f10773c4\",\"dweb:/ipfs/QmWibincTepM31suKeF6bd3shbPGjc9E7uULaXQBY1eNX5\"]},\"@openzeppelin/contracts/token/ERC721/ERC721Metadata.sol\":{\"keccak256\":\"0xe454aab4894511c610fb28e63e212608004921c10dfbffaf0b0e18a2c3b204eb\",\"urls\":[\"bzz-raw://cbb33c4aa1ba8470e389a79702b1b0450c03acd0e9471ed3ae5d566a958d36a4\",\"dweb:/ipfs/QmXryp8Ncftr8WYt7vWwoFQVKnbxtQ7dQBHzfzgWWYGisK\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x680c11bc8173eef7d5db843baaf64ce499476de2c172f6aea631dbee54bcd2e6\",\"urls\":[\"bzz-raw://0f314963ab26fb65c6f364d57900f0f1aa8f6aeb4396e327e5e5c646815f060e\",\"dweb:/ipfs/Qmf6eSUtRUF4YDxGyhQq7TVDYzuHcYEvk9Us3RVy5iZQVH\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x5c573acd6c7b98d71f3c1c44d63dc17400b0fd7b26a52c9fded43b8b533dc4ec\",\"urls\":[\"bzz-raw://e23af54444d2dbfae58895339eb7b189e1ba5d0b7abde63716e7ef7da23b2fde\",\"dweb:/ipfs/QmZva7dE1SMd1yyizzc6ivSoBXXwpNveLV7iFNATNpq68Y\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0x2b2b99dc7fe8fcd1f9427d00822b99cbc683dc21f5dd7532bd7e2281fd2c2ca2\",\"urls\":[\"bzz-raw://a8024c00e34efaf328f9592e76823c79f25fa0f6006bdf4a1e7fea204afd4773\",\"dweb:/ipfs/QmZns9jTr7843njq3J2iL2LLoWXK5mdzN1bDGd9GL3ahhD\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x042048c375daca04b31e31c91bbae912b84b5eb818c4e31b2deb530fd2305342\",\"urls\":[\"bzz-raw://d877a87c5e29b9ffca3e334378058c051a4e012fd3635039681003a9376baf1f\",\"dweb:/ipfs/QmR45snf93cFXtB71TZcmoGy9DbcMha8CqgkDKaLvhjXZK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x1a8e5072509c5ea7365eb1d48030b9be865140c8fb779968da0a459a0e174a11\",\"urls\":[\"bzz-raw://03335b7b07c7c8c8d613cfdd8ec39a0b5ec133ee510bf2fe6cc5a496767bef4b\",\"dweb:/ipfs/Qmebp4nzPja645c9yXSdJkGq96oU3am3LUnG2K3R7XxyKf\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f47616d6520546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f47414d45000000000000000000000000000000000000000000000000000000008152508181620000986301ffc9a760e01b6200011c60201b60201c565b620000b06380ac58cd60e01b6200011c60201b60201c565b620000c863780e9d6360e01b6200011c60201b60201c565b8160099080519060200190620000e092919062000225565b5080600a9080519060200190620000f992919062000225565b5062000112635b5e139f60e01b6200011c60201b60201c565b50505050620002d4565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026857805160ff191683800117855562000299565b8280016001018555821562000299579182015b82811115620002985782518255916020019190600101906200027b565b5b509050620002a89190620002ac565b5090565b620002d191905b80821115620002cd576000816000905550600101620002b3565b5090565b90565b612a4480620002e46000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80636352211e116100a2578063a22cb46511610071578063a22cb46514610629578063b88d4fde14610679578063c87b56dd1461077e578063d0def52114610825578063e985e9c51461091857610116565b80636352211e1461045d5780636c0360eb146104cb57806370a082311461054e57806395d89b41146105a657610116565b806318160ddd116100e957806318160ddd146102bf57806323b872dd146102dd5780632f745c591461034b57806342842e0e146103ad5780634f6ccce71461041b57610116565b806301ffc9a71461011b57806306fdde0314610180578063081812fc14610203578063095ea7b314610271575b600080fd5b6101666004803603602081101561013157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610994565b604051808215151515815260200191505060405180910390f35b6101886109fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022f6004803603602081101561021957600080fd5b8101908080359060200190929190505050610a9d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102bd6004803603604081101561028757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b38565b005b6102c7610d1f565b6040518082815260200191505060405180910390f35b610349600480360360608110156102f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d2c565b005b6103976004803603604081101561036157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610da2565b6040518082815260200191505060405180910390f35b610419600480360360608110156103c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e61565b005b6104476004803603602081101561043157600080fd5b8101908080359060200190929190505050610e81565b6040518082815260200191505060405180910390f35b6104896004803603602081101561047357600080fd5b8101908080359060200190929190505050610f01565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104d3610fc9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105135780820151818401526020810190506104f8565b50505050905090810190601f1680156105405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105906004803603602081101561056457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061106b565b6040518082815260200191505060405180910390f35b6105ae611140565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ee5780820151818401526020810190506105d3565b50505050905090810190601f16801561061b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106776004803603604081101561063f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506111e2565b005b61077c6004803603608081101561068f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106f657600080fd5b82018360208201111561070857600080fd5b8035906020019184600183028401116401000000008311171561072a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061139a565b005b6107aa6004803603602081101561079457600080fd5b8101908080359060200190929190505050611412565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ea5780820151818401526020810190506107cf565b50505050905090810190601f1680156108175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108fe6004803603604081101561083b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561087857600080fd5b82018360208201111561088a57600080fd5b803590602001918460018302840111640100000000831117156108ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611614565b604051808215151515815260200191505060405180910390f35b61097a6004803603604081101561092e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a935780601f10610a6857610100808354040283529160200191610a93565b820191906000526020600020905b815481529060010190602001808311610a7657829003601f168201915b5050505050905090565b6000610aa8826116e7565b610afd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128e2602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4382610f01565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129926021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be9611759565b73ffffffffffffffffffffffffffffffffffffffff161480610c185750610c1781610c12611759565b611653565b5b610c6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806128576038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610d3d610d37611759565b82611761565b610d92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129b36031913960400191505060405180910390fd5b610d9d838383611855565b505050565b6000610dad8361106b565b8210610e04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806127aa602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610e4e57fe5b9060005260206000200154905092915050565b610e7c8383836040518060200160405280600081525061139a565b505050565b6000610e8b610d1f565b8210610ee2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e4602c913960400191505060405180910390fd5b60078281548110610eef57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610fc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128b96029913960400191505060405180910390fd5b80915050919050565b6060600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061288f602a913960400191505060405180910390fd5b611139600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611879565b9050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050905090565b6111ea611759565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561128b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060046000611298611759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611345611759565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6113ab6113a5611759565b83611761565b611400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129b36031913960400191505060405180910390fd5b61140c84848484611887565b50505050565b606061141d826116e7565b611472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612963602f913960400191505060405180910390fd5b6060600c60008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561151b5780601f106114f05761010080835404028352916020019161151b565b820191906000526020600020905b8154815290600101906020018083116114fe57829003601f168201915b50505050509050600081511415611544576040518060200160405280600081525091505061160f565b600b8160405160200180838054600181600116156101000203166002900480156115a55780601f106115835761010080835404028352918201916115a5565b820191906000526020600020905b815481529060010190602001808311611591575b505082805190602001908083835b602083106115d657805182526020820191506020810190506020830392506115b3565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000806116326001611624610d1f565b6118f990919063ffffffff16565b905061163e8482611981565b61164881846119a2565b600191505092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600033905090565b600061176c826116e7565b6117c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061282b602c913960400191505060405180910390fd5b60006117cc83610f01565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061183b57508373ffffffffffffffffffffffffffffffffffffffff1661182384610a9d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061184c575061184b8185611653565b5b91505092915050565b611860838383611a2c565b61186a8382611c87565b6118748282611e25565b505050565b600081600001549050919050565b611892848484611855565b61189e84848484611eec565b6118f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127d56032913960400191505060405180910390fd5b50505050565b600080828401905083811015611977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b61198b8282612228565b6119958282611e25565b61199e81612440565b5050565b6119ab826116e7565b611a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290e602c913960400191505060405180910390fd5b80600c60008481526020019081526020016000209080519060200190611a279291906126d8565b505050565b8273ffffffffffffffffffffffffffffffffffffffff16611a4c82610f01565b73ffffffffffffffffffffffffffffffffffffffff1614611ab8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061293a6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128076024913960400191505060405180910390fd5b611b478161248c565b611b8e600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061254a565b611bd5600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061256d565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611cdf6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061258390919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114611dcc576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611d4c57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611da457fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611e1e9190612758565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6000611f0d8473ffffffffffffffffffffffffffffffffffffffff166125cd565b611f1a5760019050612220565b600060608573ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1663150b7a02905060e01b611f5e611759565b898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561200e578082015181840152602081019050611ff3565b50505050905090810190601f16801561203b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106120d357805182526020820191506020810190506020830392506120b0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612135576040519150601f19603f3d011682016040523d82523d6000602084013e61213a565b606091505b5091509150816121a8576000815111156121575780518082602001fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127d56032913960400191505060405180910390fd5b60008180602001905160208110156121bf57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161493505050505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6122d4816116e7565b15612347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506123e0600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061256d565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146125475760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6125626001826000015461258390919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b60006125c583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612618565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561260f57506000801b8214155b92505050919050565b60008383111582906126c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561268a57808201518184015260208101905061266f565b50505050905090810190601f1680156126b75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061271957805160ff1916838001178555612747565b82800160010185558215612747579182015b8281111561274657825182559160200191906001019061272b565b5b5090506127549190612784565b5090565b81548183558181111561277f5781836000526020600020918201910161277e9190612784565b5b505050565b6127a691905b808211156127a257600081600090555060010161278a565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582032d452d3c9798fcd169f69b7dbb73d7cdf3bb02187e86af83a12fc2d5adfc3c864736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101165760003560e01c80636352211e116100a2578063a22cb46511610071578063a22cb46514610629578063b88d4fde14610679578063c87b56dd1461077e578063d0def52114610825578063e985e9c51461091857610116565b80636352211e1461045d5780636c0360eb146104cb57806370a082311461054e57806395d89b41146105a657610116565b806318160ddd116100e957806318160ddd146102bf57806323b872dd146102dd5780632f745c591461034b57806342842e0e146103ad5780634f6ccce71461041b57610116565b806301ffc9a71461011b57806306fdde0314610180578063081812fc14610203578063095ea7b314610271575b600080fd5b6101666004803603602081101561013157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610994565b604051808215151515815260200191505060405180910390f35b6101886109fb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c85780820151818401526020810190506101ad565b50505050905090810190601f1680156101f55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61022f6004803603602081101561021957600080fd5b8101908080359060200190929190505050610a9d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102bd6004803603604081101561028757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b38565b005b6102c7610d1f565b6040518082815260200191505060405180910390f35b610349600480360360608110156102f357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d2c565b005b6103976004803603604081101561036157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610da2565b6040518082815260200191505060405180910390f35b610419600480360360608110156103c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e61565b005b6104476004803603602081101561043157600080fd5b8101908080359060200190929190505050610e81565b6040518082815260200191505060405180910390f35b6104896004803603602081101561047357600080fd5b8101908080359060200190929190505050610f01565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104d3610fc9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105135780820151818401526020810190506104f8565b50505050905090810190601f1680156105405780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105906004803603602081101561056457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061106b565b6040518082815260200191505060405180910390f35b6105ae611140565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105ee5780820151818401526020810190506105d3565b50505050905090810190601f16801561061b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106776004803603604081101561063f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506111e2565b005b61077c6004803603608081101561068f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106f657600080fd5b82018360208201111561070857600080fd5b8035906020019184600183028401116401000000008311171561072a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061139a565b005b6107aa6004803603602081101561079457600080fd5b8101908080359060200190929190505050611412565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107ea5780820151818401526020810190506107cf565b50505050905090810190601f1680156108175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108fe6004803603604081101561083b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561087857600080fd5b82018360208201111561088a57600080fd5b803590602001918460018302840111640100000000831117156108ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611614565b604051808215151515815260200191505060405180910390f35b61097a6004803603604081101561092e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611653565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a935780601f10610a6857610100808354040283529160200191610a93565b820191906000526020600020905b815481529060010190602001808311610a7657829003601f168201915b5050505050905090565b6000610aa8826116e7565b610afd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128e2602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4382610f01565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129926021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be9611759565b73ffffffffffffffffffffffffffffffffffffffff161480610c185750610c1781610c12611759565b611653565b5b610c6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806128576038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610d3d610d37611759565b82611761565b610d92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129b36031913960400191505060405180910390fd5b610d9d838383611855565b505050565b6000610dad8361106b565b8210610e04576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806127aa602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610e4e57fe5b9060005260206000200154905092915050565b610e7c8383836040518060200160405280600081525061139a565b505050565b6000610e8b610d1f565b8210610ee2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129e4602c913960400191505060405180910390fd5b60078281548110610eef57fe5b90600052602060002001549050919050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610fc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128b96029913960400191505060405180910390fd5b80915050919050565b6060600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061288f602a913960400191505060405180910390fd5b611139600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611879565b9050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111d85780601f106111ad576101008083540402835291602001916111d8565b820191906000526020600020905b8154815290600101906020018083116111bb57829003601f168201915b5050505050905090565b6111ea611759565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561128b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b8060046000611298611759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611345611759565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6113ab6113a5611759565b83611761565b611400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129b36031913960400191505060405180910390fd5b61140c84848484611887565b50505050565b606061141d826116e7565b611472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612963602f913960400191505060405180910390fd5b6060600c60008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561151b5780601f106114f05761010080835404028352916020019161151b565b820191906000526020600020905b8154815290600101906020018083116114fe57829003601f168201915b50505050509050600081511415611544576040518060200160405280600081525091505061160f565b600b8160405160200180838054600181600116156101000203166002900480156115a55780601f106115835761010080835404028352918201916115a5565b820191906000526020600020905b815481529060010190602001808311611591575b505082805190602001908083835b602083106115d657805182526020820191506020810190506020830392506115b3565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000806116326001611624610d1f565b6118f990919063ffffffff16565b905061163e8482611981565b61164881846119a2565b600191505092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600033905090565b600061176c826116e7565b6117c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061282b602c913960400191505060405180910390fd5b60006117cc83610f01565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061183b57508373ffffffffffffffffffffffffffffffffffffffff1661182384610a9d565b73ffffffffffffffffffffffffffffffffffffffff16145b8061184c575061184b8185611653565b5b91505092915050565b611860838383611a2c565b61186a8382611c87565b6118748282611e25565b505050565b600081600001549050919050565b611892848484611855565b61189e84848484611eec565b6118f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127d56032913960400191505060405180910390fd5b50505050565b600080828401905083811015611977576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b61198b8282612228565b6119958282611e25565b61199e81612440565b5050565b6119ab826116e7565b611a00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c81526020018061290e602c913960400191505060405180910390fd5b80600c60008481526020019081526020016000209080519060200190611a279291906126d8565b505050565b8273ffffffffffffffffffffffffffffffffffffffff16611a4c82610f01565b73ffffffffffffffffffffffffffffffffffffffff1614611ab8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061293a6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b3e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128076024913960400191505060405180910390fd5b611b478161248c565b611b8e600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061254a565b611bd5600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061256d565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611cdf6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061258390919063ffffffff16565b9050600060066000848152602001908152602001600020549050818114611dcc576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611d4c57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110611da457fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003611e1e9190612758565b5050505050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6000611f0d8473ffffffffffffffffffffffffffffffffffffffff166125cd565b611f1a5760019050612220565b600060608573ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1663150b7a02905060e01b611f5e611759565b898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561200e578082015181840152602081019050611ff3565b50505050905090810190601f16801561203b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106120d357805182526020820191506020810190506020830392506120b0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612135576040519150601f19603f3d011682016040523d82523d6000602084013e61213a565b606091505b5091509150816121a8576000815111156121575780518082602001fd5b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127d56032913960400191505060405180910390fd5b60008180602001905160208110156121bf57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161493505050505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6122d4816116e7565b15612347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506123e0600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061256d565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146125475760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6125626001826000015461258390919063ffffffff16565b816000018190555050565b6001816000016000828254019250508190555050565b60006125c583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612618565b905092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561260f57506000801b8214155b92505050919050565b60008383111582906126c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561268a57808201518184015260208101905061266f565b50505050905090810190601f1680156126b75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061271957805160ff1916838001178555612747565b82800160010185558215612747579182015b8281111561274657825182559160200191906001019061272b565b5b5090506127549190612784565b5090565b81548183558181111561277f5781836000526020600020918201910161277e9190612784565b5b505050565b6127a691905b808211156127a257600081600090555060010161278a565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a7231582032d452d3c9798fcd169f69b7dbb73d7cdf3bb02187e86af83a12fc2d5adfc3c864736f6c63430005100032",
  "sourceMap": "89:336:0:-;;;128:60;8:9:-1;5:2;;;30:1;27;20:12;5:2;128:60:0;456:155:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;533:4;539:6;718:40:4;385:10;737:20;;718:18;;;:40;;:::i;:::-;2262::7;2136:10;2281:20;;2262:18;;;:40;;:::i;:::-;1357:51:8;1172:10;1376:31;;1357:18;;;:51;;:::i;:::-;920:4:10;912:5;:12;;;;;;;;;;;;:::i;:::-;;944:6;934:7;:16;;;;;;;;;;;;:::i;:::-;;1038:49;774:10;1057:29;;1038:18;;;:49;;:::i;:::-;840:254;;456:155:9;;89:336:0;;1442:190:4;1532:10;1517:25;;:11;:25;;;;;1509:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1621:4;1585:20;:33;1606:11;1585:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1442:190;:::o;89:336:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "89:336:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;89:336:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;915:133:4;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;915:133:4;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1199:83:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1199:83:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4283:200:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4283:200:7;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3583:415;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3583:415:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2171:94:8;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5929:287:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5929:287:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1789:229:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1789:229:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6865:132:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6865:132:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2603:196:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2603:196:8;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2939:223:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2939:223:7;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3387:89:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3387:89:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2513:207:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2513:207:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1391:87:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1391:87:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4776:249:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4776:249:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;7720:269;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7720:269:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7720:269:7;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7720:269:7;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7720:269:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7720:269:7;;;;;;;;;;;;;;;:::i;:::-;;1781:545:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1781:545:10;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1781:545:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;198:217:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;198:217:0;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;198:217:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;198:217:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;198:217:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;198:217:0;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5347:145:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5347:145:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;915:133:4;985:4;1008:20;:33;1029:11;1008:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:40;;915:133;;;:::o;1199:83:10:-;1238:13;1270:5;1263:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1199:83;:::o;4283:200:7:-;4342:7;4369:16;4377:7;4369;:16::i;:::-;4361:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4452:15;:24;4468:7;4452:24;;;;;;;;;;;;;;;;;;;;;4445:31;;4283:200;;;:::o;3583:415::-;3646:13;3662:16;3670:7;3662;:16::i;:::-;3646:32;;3702:5;3696:11;;:2;:11;;;;3688:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3780:5;3764:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3789:37;3806:5;3813:12;:10;:12::i;:::-;3789:16;:37::i;:::-;3764:62;3756:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3946:2;3919:15;:24;3935:7;3919:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;3983:7;3979:2;3963:28;;3972:5;3963:28;;;;;;;;;;;;3583:415;;;:::o;2171:94:8:-;2215:7;2241:10;:17;;;;2234:24;;2171:94;:::o;5929:287:7:-;6071:41;6090:12;:10;:12::i;:::-;6104:7;6071:18;:41::i;:::-;6063:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6177:32;6191:4;6197:2;6201:7;6177:13;:32::i;:::-;5929:287;;;:::o;1789:229:8:-;1869:7;1904:16;1914:5;1904:9;:16::i;:::-;1896:5;:24;1888:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1985:12;:19;1998:5;1985:19;;;;;;;;;;;;;;;2005:5;1985:26;;;;;;;;;;;;;;;;1978:33;;1789:229;;;;:::o;6865:132:7:-;6951:39;6968:4;6974:2;6978:7;6951:39;;;;;;;;;;;;:16;:39::i;:::-;6865:132;;;:::o;2603:196:8:-;2661:7;2696:13;:11;:13::i;:::-;2688:5;:21;2680:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2775:10;2786:5;2775:17;;;;;;;;;;;;;;;;2768:24;;2603:196;;;:::o;2939:223:7:-;2994:7;3013:13;3029:11;:20;3041:7;3029:20;;;;;;;;;;;;;;;;;;;;;3013:36;;3084:1;3067:19;;:5;:19;;;;3059:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3150:5;3143:12;;;2939:223;;;:::o;3387:89:10:-;3429:13;3461:8;3454:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3387:89;:::o;2513:207:7:-;2568:7;2612:1;2595:19;;:5;:19;;;;2587:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2679:34;:17;:24;2697:5;2679:24;;;;;;;;;;;;;;;:32;:34::i;:::-;2672:41;;2513:207;;;:::o;1391:87:10:-;1432:13;1464:7;1457:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1391:87;:::o;4776:249:7:-;4861:12;:10;:12::i;:::-;4855:18;;:2;:18;;;;4847:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4953:8;4914:18;:32;4933:12;:10;:12::i;:::-;4914:32;;;;;;;;;;;;;;;:36;4947:2;4914:36;;;;;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;5005:2;4976:42;;4991:12;:10;:12::i;:::-;4976:42;;;5009:8;4976:42;;;;;;;;;;;;;;;;;;;;;;4776:249;;:::o;7720:269::-;7834:41;7853:12;:10;:12::i;:::-;7867:7;7834:18;:41::i;:::-;7826:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7939:43;7957:4;7963:2;7967:7;7976:5;7939:17;:43::i;:::-;7720:269;;;;:::o;1781:545:10:-;1839:13;1872:16;1880:7;1872;:16::i;:::-;1864:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1951:23;1977:10;:19;1988:7;1977:19;;;;;;;;;;;1951:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2131:1;2110:9;2104:23;:28;2100:220;;;2148:9;;;;;;;;;;;;;;;;;2100:220;2288:8;2298:9;2271:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;2271:37:10;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2271:37:10;;;2257:52;;;1781:545;;;;:::o;198:217:0:-;265:4;281:13;297:20;315:1;297:13;:11;:13::i;:::-;:17;;:20;;;;:::i;:::-;281:36;;326:20;332:3;337:8;326:5;:20::i;:::-;355:33;368:8;378:9;355:12;:33::i;:::-;404:4;397:11;;;198:217;;;;:::o;5347:145:7:-;5427:4;5450:18;:25;5469:5;5450:25;;;;;;;;;;;;;;;:35;5476:8;5450:35;;;;;;;;;;;;;;;;;;;;;;;;;5443:42;;5347:145;;;;:::o;9158:152::-;9215:4;9231:13;9247:11;:20;9259:7;9247:20;;;;;;;;;;;;;;;;;;;;;9231:36;;9301:1;9284:19;;:5;:19;;;;9277:26;;;9158:152;;;:::o;788:96:2:-;833:15;867:10;860:17;;788:96;:::o;9671:329:7:-;9756:4;9780:16;9788:7;9780;:16::i;:::-;9772:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9855:13;9871:16;9879:7;9871;:16::i;:::-;9855:32;;9916:5;9905:16;;:7;:16;;;:51;;;;9949:7;9925:31;;:20;9937:7;9925:11;:20::i;:::-;:31;;;9905:51;:87;;;;9960:32;9977:5;9984:7;9960:16;:32::i;:::-;9905:87;9897:96;;;9671:329;;;;:::o;3174:239:8:-;3259:38;3279:4;3285:2;3289:7;3259:19;:38::i;:::-;3308:47;3341:4;3347:7;3308:32;:47::i;:::-;3366:40;3394:2;3398:7;3366:27;:40::i;:::-;3174:239;;;:::o;1065:112:3:-;1130:7;1156;:14;;;1149:21;;1065:112;;;:::o;8694:269:7:-;8803:32;8817:4;8823:2;8827:7;8803:13;:32::i;:::-;8853:48;8876:4;8882:2;8886:7;8895:5;8853:22;:48::i;:::-;8845:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8694:269;;;;:::o;834:176:6:-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;3670:196:8:-;3733:24;3745:2;3749:7;3733:11;:24::i;:::-;3768:40;3796:2;3800:7;3768:27;:40::i;:::-;3819;3851:7;3819:31;:40::i;:::-;3670:196;;:::o;2650:204:10:-;2741:16;2749:7;2741;:16::i;:::-;2733:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2838:9;2816:10;:19;2827:7;2816:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;2650:204;;:::o;13281:447:7:-;13394:4;13374:24;;:16;13382:7;13374;:16::i;:::-;:24;;;13366:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13476:1;13462:16;;:2;:16;;;;13454:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13530:23;13545:7;13530:14;:23::i;:::-;13564:35;:17;:23;13582:4;13564:23;;;;;;;;;;;;;;;:33;:35::i;:::-;13609:33;:17;:21;13627:2;13609:21;;;;;;;;;;;;;;;:31;:33::i;:::-;13676:2;13653:11;:20;13665:7;13653:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;13713:7;13709:2;13694:27;;13703:4;13694:27;;;;;;;;;;;;13281:447;;;:::o;6284:1128:8:-;6546:22;6571:32;6601:1;6571:12;:18;6584:4;6571:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;6546:57;;6613:18;6634:17;:26;6652:7;6634:26;;;;;;;;;;;;6613:47;;6778:14;6764:10;:28;6760:323;;6808:19;6830:12;:18;6843:4;6830:18;;;;;;;;;;;;;;;6849:14;6830:34;;;;;;;;;;;;;;;;6808:56;;6912:11;6879:12;:18;6892:4;6879:18;;;;;;;;;;;;;;;6898:10;6879:30;;;;;;;;;;;;;;;:44;;;;7028:10;6995:17;:30;7013:11;6995:30;;;;;;;;;;;:43;;;;6760:323;;7169:12;:18;7182:4;7169:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;6284:1128;;;;:::o;5128:183::-;5241:12;:16;5254:2;5241:16;;;;;;;;;;;;;;;:23;;;;5212:17;:26;5230:7;5212:26;;;;;;;;;;;:52;;;;5274:12;:16;5287:2;5274:16;;;;;;;;;;;;;;;5296:7;5274:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5274:30:8;;;;;;;;;;;;;;;;;;;;;;5128:183;;:::o;14367:1051:7:-;14488:4;14513:15;:2;:13;;;:15::i;:::-;14508:58;;14551:4;14544:11;;;;14508:58;14635:12;14649:23;14676:2;:7;;14736:2;14720:36;;;:45;;;;14779:12;:10;:12::i;:::-;14805:4;14823:7;14844:5;14684:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;14684:175:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;14684:175:7;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;14684:175:7;14676:184;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;14676:184:7;;;;;;;;;;;;;;;;;;;;;;;;14:1:-1;21;16:31;;;;75:4;69:11;64:16;;144:4;140:9;133:4;115:16;111:27;107:43;104:1;100:51;94:4;87:65;169:16;166:1;159:27;225:16;222:1;215:4;212:1;208:12;193:49;7:242;;16:31;36:4;31:9;;7:242;;14634:226:7;;;;14875:7;14870:542;;14922:1;14902:10;:17;:21;14898:376;;;15067:10;15061:17;15127:15;15114:10;15110:2;15106:19;15099:44;15016:145;15199:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14870:542;15304:13;15331:10;15320:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15320:32:7;;;;;;;;;;;;;;;;15304:48;;754:10;15384:16;;15374:26;;;:6;:26;;;;15366:35;;;;;14367:1051;;;;;;;:::o;11714:327::-;11799:1;11785:16;;:2;:16;;;;11777:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11857:16;11865:7;11857;:16::i;:::-;11856:17;11848:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11940:2;11917:11;:20;11929:7;11917:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;11952:33;:17;:21;11970:2;11952:21;;;;;;;;;;;;;;;:31;:33::i;:::-;12026:7;12022:2;12001:33;;12018:1;12001:33;;;;;;;;;;;;11714:327;;:::o;5506:161:8:-;5609:10;:17;;;;5582:15;:24;5598:7;5582:24;;;;;;;;;;;:44;;;;5636:10;5652:7;5636:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5636:24:8;;;;;;;;;;;;;;;;;;;;;;5506:161;:::o;15580:171:7:-;15679:1;15643:38;;:15;:24;15659:7;15643:24;;;;;;;;;;;;;;;;;;;;;:38;;;15639:106;;15732:1;15697:15;:24;15713:7;15697:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;15639:106;15580:171;:::o;1367:108:3:-;1447:21;1466:1;1447:7;:14;;;:18;;:21;;;;:::i;:::-;1430:7;:14;;:38;;;;1367:108;:::o;1183:178::-;1353:1;1335:7;:14;;;:19;;;;;;;;;;;1183:178;:::o;1274:134:6:-;1332:7;1358:43;1362:1;1365;1358:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1351:50;;1274:134;;;;:::o;686:610:15:-;746:4;1004:16;1030:19;1052:66;1030:88;;;;1219:7;1207:20;1195:32;;1258:11;1246:8;:23;;:42;;;;;1285:3;1273:15;;:8;:15;;1246:42;1238:51;;;;686:610;;;:::o;1732:187:6:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;89:336:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.16;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721Full.sol\";\n\ncontract GameToken is ERC721Full {\n    constructor() ERC721Full(\"Game Token\", \"GAME\") public{\n    }\n    \n    function mint(address _to, string memory _tokenURI) public returns(bool) {\n        uint _tokenId = totalSupply().add(1);\n       _mint(_to, _tokenId);\n       _setTokenURI(_tokenId, _tokenURI);\n       return true;\n    }   \n    \n}",
  "sourcePath": "/home/zois/TowerDefenseNFTs/contracts/GameToken.sol",
  "ast": {
    "absolutePath": "/home/zois/TowerDefenseNFTs/contracts/GameToken.sol",
    "exportedSymbols": {
      "GameToken": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721Full.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721Full.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1437,
        "src": "26:61:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "ERC721Full",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1436,
              "src": "111:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Full_$1436",
                "typeString": "contract ERC721Full"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "111:10:0"
          }
        ],
        "contractDependencies": [
          103,
          204,
          214,
          1072,
          1412,
          1436,
          1609,
          1712,
          1739,
          1762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43,
          1436,
          1609,
          1762,
          1412,
          1739,
          1072,
          1712,
          204,
          214,
          103
        ],
        "name": "GameToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 11,
              "nodeType": "Block",
              "src": "181:7:0",
              "statements": []
            },
            "documentation": null,
            "id": 12,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "47616d6520546f6b656e",
                    "id": 7,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "153:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ebd19fbfd9cac099805799e53e1b6f0f0a4929dc86feba390ca3ff8715a405d0",
                      "typeString": "literal_string \"Game Token\""
                    },
                    "value": "Game Token"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "47414d45",
                    "id": 8,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "167:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d13d8e3c8822ff4d0a39994f3616e22d61c97585cee7a1baf4e9a875726b5f15",
                      "typeString": "literal_string \"GAME\""
                    },
                    "value": "GAME"
                  }
                ],
                "id": 9,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 6,
                  "name": "ERC721Full",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1436,
                  "src": "142:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Full_$1436_$",
                    "typeString": "type(contract ERC721Full)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "142:32:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:2:0"
            },
            "returnParameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "181:0:0"
            },
            "scope": 43,
            "src": "128:60:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "271:144:0",
              "statements": [
                {
                  "assignments": [
                    22
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22,
                      "name": "_tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 41,
                      "src": "281:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "281:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 28,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 26,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "315:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 23,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1147
                          ],
                          "referencedDeclaration": 1147,
                          "src": "297:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 24,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "297:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 241,
                      "src": "297:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "297:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "281:36:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "332:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "337:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 29,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1219
                      ],
                      "referencedDeclaration": 1219,
                      "src": "326:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "326:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "326:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "368:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 36,
                        "name": "_tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "378:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 34,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1560,
                      "src": "355:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "355:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "355:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "404:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 20,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "397:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "212:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "225:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:38:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "265:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "264:6:0"
            },
            "scope": 43,
            "src": "198:217:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "89:336:0"
      }
    ],
    "src": "0:425:0"
  },
  "legacyAST": {
    "absolutePath": "/home/zois/TowerDefenseNFTs/contracts/GameToken.sol",
    "exportedSymbols": {
      "GameToken": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".16"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721Full.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721Full.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1437,
        "src": "26:61:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3,
              "name": "ERC721Full",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1436,
              "src": "111:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Full_$1436",
                "typeString": "contract ERC721Full"
              }
            },
            "id": 4,
            "nodeType": "InheritanceSpecifier",
            "src": "111:10:0"
          }
        ],
        "contractDependencies": [
          103,
          204,
          214,
          1072,
          1412,
          1436,
          1609,
          1712,
          1739,
          1762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43,
          1436,
          1609,
          1762,
          1412,
          1739,
          1072,
          1712,
          204,
          214,
          103
        ],
        "name": "GameToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 11,
              "nodeType": "Block",
              "src": "181:7:0",
              "statements": []
            },
            "documentation": null,
            "id": 12,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "47616d6520546f6b656e",
                    "id": 7,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "153:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ebd19fbfd9cac099805799e53e1b6f0f0a4929dc86feba390ca3ff8715a405d0",
                      "typeString": "literal_string \"Game Token\""
                    },
                    "value": "Game Token"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "47414d45",
                    "id": 8,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "167:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_d13d8e3c8822ff4d0a39994f3616e22d61c97585cee7a1baf4e9a875726b5f15",
                      "typeString": "literal_string \"GAME\""
                    },
                    "value": "GAME"
                  }
                ],
                "id": 9,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 6,
                  "name": "ERC721Full",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1436,
                  "src": "142:10:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Full_$1436_$",
                    "typeString": "type(contract ERC721Full)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "142:32:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:2:0"
            },
            "returnParameters": {
              "id": 10,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "181:0:0"
            },
            "scope": 43,
            "src": "128:60:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "271:144:0",
              "statements": [
                {
                  "assignments": [
                    22
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 22,
                      "name": "_tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 41,
                      "src": "281:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "281:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 28,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 26,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "315:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 23,
                          "name": "totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1147
                          ],
                          "referencedDeclaration": 1147,
                          "src": "297:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                            "typeString": "function () view returns (uint256)"
                          }
                        },
                        "id": 24,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "297:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 25,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 241,
                      "src": "297:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "297:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "281:36:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 30,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "332:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "337:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 29,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1219
                      ],
                      "referencedDeclaration": 1219,
                      "src": "326:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 32,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "326:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 33,
                  "nodeType": "ExpressionStatement",
                  "src": "326:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "368:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 36,
                        "name": "_tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "378:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 34,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1560,
                      "src": "355:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 37,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "355:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 38,
                  "nodeType": "ExpressionStatement",
                  "src": "355:33:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "404:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 20,
                  "id": 40,
                  "nodeType": "Return",
                  "src": "397:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 17,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "212:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 16,
                  "name": "_tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "225:23:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 15,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:38:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "265:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "265:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "264:6:0"
            },
            "scope": 43,
            "src": "198:217:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "89:336:0"
      }
    ],
    "src": "0:425:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "1671839719447": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x77ccE2da85489496d9791095B790dc0A2A8b49D2",
      "transactionHash": "0x71c4f254de27f4282958df96652cdd844bf1fc43d0c14a56adf92c0763dc81f4"
    },
    "1672787648295": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xae49e420234beC6aB73281FA9659aCDb64ae752F",
      "transactionHash": "0x1d85f217be98f4577d127b1ab9bb50a40d1fc9333c21b02bc4abe7c8d1cfb1e3"
    },
    "1672790356830": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x421C19e1b148f849C669Cf76Fe960C6bD735487D",
      "transactionHash": "0x6c80b05ff2b04ce886b88e5ba9bb8a4ce7d90b209b418e1befa4863b178951ad"
    },
    "1673632582848": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x5306372724ADF1263D707c0f36A6EedE17F17EE2",
      "transactionHash": "0xbf65657ee5075953c6735258aca713c60605e3d3918083443a9b1172f982391b"
    },
    "1674841947433": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xE48DaD23293E0f0C2d76C3273B1572281d2B35d2",
      "transactionHash": "0x7a4aaab8ca8a65d8659e362b30401e473fc74e6c98659c75e39ca232015a322b"
    }
  },
  "schemaVersion": "3.2.3",
  "updatedAt": "2023-01-27T17:53:46.893Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a preffix in {tokenURI} to each token's URI, when they are non-empty.    * _Available since v2.5.0._"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "name()": {
        "details": "Gets the token name.",
        "return": "string representing the token name"
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "address currently marked as the owner of the given token ID"
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Gets the token symbol.",
        "return": "string representing the token symbol"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "tokenURI(uint256)": {
        "details": "Returns the URI for a given token ID. May return an empty string.     * If the token's URI is non-empty and a base URI was set (via {_setBaseURI}), it will be added to the token ID's URI as a prefix.     * Reverts if the token ID does not exist."
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
        "return": "uint256 representing the total amount of tokens"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}