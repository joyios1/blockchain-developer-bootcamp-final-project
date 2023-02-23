GameToken = {
	"contractName": "GameToken",
	"abi": [
	  {
		"inputs": [],
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
			"indexed": false,
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "Paused",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"indexed": true,
			"internalType": "bytes32",
			"name": "previousAdminRole",
			"type": "bytes32"
		  },
		  {
			"indexed": true,
			"internalType": "bytes32",
			"name": "newAdminRole",
			"type": "bytes32"
		  }
		],
		"name": "RoleAdminChanged",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "sender",
			"type": "address"
		  }
		],
		"name": "RoleGranted",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "sender",
			"type": "address"
		  }
		],
		"name": "RoleRevoked",
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
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "Unpaused",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
		  {
			"internalType": "bytes32",
			"name": "",
			"type": "bytes32"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MINTER_ROLE",
		"outputs": [
		  {
			"internalType": "bytes32",
			"name": "",
			"type": "bytes32"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "PAUSER_ROLE",
		"outputs": [
		  {
			"internalType": "bytes32",
			"name": "",
			"type": "bytes32"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  }
		],
		"name": "getRoleAdmin",
		"outputs": [
		  {
			"internalType": "bytes32",
			"name": "",
			"type": "bytes32"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "hasRole",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "name",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "paused",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "bytes32",
			"name": "role",
			"type": "bytes32"
		  },
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
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
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
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
			"name": "data",
			"type": "bytes"
		  }
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "operator",
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
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "symbol",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  }
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
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
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "index",
			"type": "uint256"
		  }
		],
		"name": "getOwnerByIndex",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
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
		"name": "getTokenIdByOwner",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "uint256",
			"name": "index",
			"type": "uint256"
		  }
		],
		"name": "getTokenIdByIndex",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.8.9+commit.e5eed63a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PAUSER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getOwnerByIndex\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getTokenIdByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getTokenIdByOwner\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"safeMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/GameToken.sol\":\"GameToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x67e3daf189111d6d5b0464ed09cf9f0605a22c4b965a7fcecd707101faff008a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cbbb1a75e4064d564bf69e74970eef35064e51fcc09cbf3589aee7faa60d6afe\",\"dweb:/ipfs/QmYfAtQwFSGmxomnyAV3tpBDbfDwiFXV61osWW2zzQVg5Q\"]},\"@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0xd89f3585b211fc9e3408384a4c4efdc3a93b2f877a3821046fa01c219d35be1b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5ea15ef7c8980240ccd46df13809d163f749bc0a01d8bced1875660d4872da1c\",\"dweb:/ipfs/QmbDfAT9VeCSG4cnPd6tjDMp8ED85dLHbWyMyv7wbmL4CH\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xab28a56179c1db258c9bf5235b382698cb650debecb51b23d12be9e241374b68\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://daae589a9d6fa7e55f99f86c0a16796ca490f243fb3693632c3711c0646c1d56\",\"dweb:/ipfs/QmR3zpd7wNw3rcUdekwiv6FYHJqksuTCXLVioTxu6Fbxk3\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0xa8796bd16014cefb8c26449413981a49c510f92a98d6828494f5fd046223ced3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://63a5e0bb5a7d182e0d0eef87033f78115eab791de3626a929bc98c157087880a\",\"dweb:/ipfs/QmetkXAu2CJKS4qrZtEQPU8okAPwUwa6HL4XYwk8vrYMk8\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ec772b45a624be516f1c81970caa8a2e144301e9d0921cbc1a2789fef39a1269\",\"dweb:/ipfs/QmNyjwxCrGhQMyzLD93oUobJXVe9ceJvRvfXwbEtuxPiEj\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa4d1d62251f8574deb032a35fc948386a9b4de74b812d4f545a1ac120486b48a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8c969013129ba9e651a20735ef659fef6d8a1139ea3607bd4b26ddea2d645634\",\"dweb:/ipfs/QmVhVa6LGuzAcB8qgDtVHRkucn4ihj5UZr8xBLcJkP6ucb\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xa1e8e83cd0087785df04ac79fb395d9f3684caeaf973d9e2c71caef723a3a5d6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://33bbf48cc069be677705037ba7520c22b1b622c23b33e1a71495f2d36549d40b\",\"dweb:/ipfs/Qmct36zWXv3j7LZB83uwbg7TXwnZSN1fqHNDZ93GG98bGz\"]},\"project:/contracts/GameToken.sol\":{\"keccak256\":\"0xaac02911fde17959e66f4cb7d31f44144e1ca2bcbec22633671cb6651ff236c4\",\"urls\":[\"bzz-raw://9c4de524e2533804761c859514da33889aefec5a0c1ad2828f4090ef8f762af5\",\"dweb:/ipfs/QmfU832n8xBaXt9YM9oMnaEAQVV1fYFvCMm8EnkA5xqqc3\"]}},\"version\":1}",
	"bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f47616d6520546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f47414d4500000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620002b1565b508060019080519060200190620000af929190620002b1565b5050506000600a60006101000a81548160ff021916908315150217905550620000e26000801b336200014c60201b60201c565b620001147f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a336200014c60201b60201c565b620001467f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200014c60201b60201c565b620003c6565b6200015e82826200023e60201b60201c565b6200023a576001600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001df620002a960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b828054620002bf9062000390565b90600052602060002090601f016020900481019282620002e357600085556200032f565b82601f10620002fe57805160ff19168380011785556200032f565b828001600101855582156200032f579182015b828111156200032e57825182559160200191906001019062000311565b5b5090506200033e919062000342565b5090565b5b808211156200035d57600081600090555060010162000343565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003a957607f821691505b60208210811415620003c057620003bf62000361565b5b50919050565b61410880620003d66000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80634f6ccce71161010f578063a22cb465116100a2578063d547741f11610071578063d547741f146105a2578063e63ab1e9146105be578063e985e9c5146105dc578063ea720f881461060c576101e5565b8063a22cb4651461051c578063b88d4fde14610538578063c87b56dd14610554578063d539139314610584576101e5565b80638456cb59116100de5780638456cb59146104a657806391d14854146104b057806395d89b41146104e0578063a217fddf146104fe576101e5565b80634f6ccce7146103f85780635c975abb146104285780636352211e1461044657806370a0823114610476576101e5565b8063248a9ca3116101875780633f4ba83a116101565780633f4ba83a1461038657806340d097c31461039057806342842e0e146103ac57806349f202ff146103c8576101e5565b8063248a9ca3146102ee5780632f2ff15d1461031e5780632f745c591461033a57806336568abe1461036a576101e5565b8063095ea7b3116101c3578063095ea7b31461026857806318160ddd146102845780631b732d46146102a257806323b872dd146102d2576101e5565b806301ffc9a7146101ea57806306fdde031461021a578063081812fc14610238575b600080fd5b61020460048036038101906101ff9190612cc8565b61063c565b6040516102119190612d10565b60405180910390f35b61022261064e565b60405161022f9190612dc4565b60405180910390f35b610252600480360381019061024d9190612e1c565b6106e0565b60405161025f9190612e8a565b60405180910390f35b610282600480360381019061027d9190612ed1565b610726565b005b61028c61083e565b6040516102999190612f20565b60405180910390f35b6102bc60048036038101906102b79190612e1c565b61084b565b6040516102c99190612e8a565b60405180910390f35b6102ec60048036038101906102e79190612f3b565b6108b4565b005b61030860048036038101906103039190612fc4565b610914565b6040516103159190613000565b60405180910390f35b6103386004803603810190610333919061301b565b610934565b005b610354600480360381019061034f9190612ed1565b610955565b6040516103619190612f20565b60405180910390f35b610384600480360381019061037f919061301b565b6109fa565b005b61038e610a7d565b005b6103aa60048036038101906103a5919061305b565b610ab2565b005b6103c660048036038101906103c19190612f3b565b610b03565b005b6103e260048036038101906103dd9190612e1c565b610b23565b6040516103ef9190612f20565b60405180910390f35b610412600480360381019061040d9190612e1c565b610b7e565b60405161041f9190612f20565b60405180910390f35b610430610bef565b60405161043d9190612d10565b60405180910390f35b610460600480360381019061045b9190612e1c565b610c06565b60405161046d9190612e8a565b60405180910390f35b610490600480360381019061048b919061305b565b610c8d565b60405161049d9190612f20565b60405180910390f35b6104ae610d45565b005b6104ca60048036038101906104c5919061301b565b610d7a565b6040516104d79190612d10565b60405180910390f35b6104e8610de5565b6040516104f59190612dc4565b60405180910390f35b610506610e77565b6040516105139190613000565b60405180910390f35b610536600480360381019061053191906130b4565b610e7e565b005b610552600480360381019061054d9190613229565b610e94565b005b61056e60048036038101906105699190612e1c565b610ef6565b60405161057b9190612dc4565b60405180910390f35b61058c610f5e565b6040516105999190613000565b60405180910390f35b6105bc60048036038101906105b7919061301b565b610f82565b005b6105c6610fa3565b6040516105d39190613000565b60405180910390f35b6105f660048036038101906105f191906132ac565b610fc7565b6040516106039190612d10565b60405180910390f35b61062660048036038101906106219190612ed1565b61105b565b6040516106339190612f20565b60405180910390f35b6000610647826110b9565b9050919050565b60606000805461065d9061331b565b80601f01602080910402602001604051908101604052809291908181526020018280546106899061331b565b80156106d65780601f106106ab576101008083540402835291602001916106d6565b820191906000526020600020905b8154815290600101906020018083116106b957829003601f168201915b5050505050905090565b60006106eb82611133565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061073182610c06565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610799906133bf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166107c161117e565b73ffffffffffffffffffffffffffffffffffffffff1614806107f057506107ef816107ea61117e565b610fc7565b5b61082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690613451565b60405180910390fd5b6108398383611186565b505050565b6000600880549050905090565b600061085561083e565b8210610896576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088d906134bd565b60405180910390fd5b60006108a183610b7e565b90506108ac81610c06565b915050919050565b6108c56108bf61117e565b8261123f565b610904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fb9061354f565b60405180910390fd5b61090f8383836112d4565b505050565b6000600b6000838152602001908152602001600020600101549050919050565b61093d82610914565b610946816115ce565b61095083836115e2565b505050565b600061096083610c8d565b82106109a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610998906135e1565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610a0261117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6690613673565b60405180910390fd5b610a7982826116c3565b5050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610aa7816115ce565b610aaf6117a5565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610adc816115ce565b6000610ae8600c611808565b9050610af4600c611816565b610afe838261182c565b505050565b610b1e83838360405180602001604052806000815250610e94565b505050565b6000610b2d61083e565b8210610b6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b65906134bd565b60405180910390fd5b610b7782610b7e565b9050919050565b6000610b8861083e565b8210610bc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc090613705565b60405180910390fd5b60088281548110610bdd57610bdc613725565b5b90600052602060002001549050919050565b6000600a60009054906101000a900460ff16905090565b600080610c128361184a565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b906137a0565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf590613832565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610d6f816115ce565b610d77611887565b50565b6000600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060018054610df49061331b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e209061331b565b8015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b6000801b81565b610e90610e8961117e565b83836118ea565b5050565b610ea5610e9f61117e565b8361123f565b610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb9061354f565b60405180910390fd5b610ef084848484611a57565b50505050565b6060610f0182611133565b6000610f0b611ab3565b90506000815111610f2b5760405180602001604052806000815250610f56565b80610f3584611aca565b604051602001610f4692919061388e565b6040516020818303038152906040525b915050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610f8b82610914565b610f94816115ce565b610f9e83836116c3565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061106683610c8d565b82106110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e906134bd565b60405180910390fd5b6110b18383610955565b905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061112c575061112b82611ba2565b5b9050919050565b61113c81611c1c565b61117b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611172906137a0565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166111f983610c06565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061124b83610c06565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061128d575061128c8185610fc7565b5b806112cb57508373ffffffffffffffffffffffffffffffffffffffff166112b3846106e0565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112f482610c06565b73ffffffffffffffffffffffffffffffffffffffff161461134a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134190613924565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b1906139b6565b60405180910390fd5b6113c78383836001611c5d565b8273ffffffffffffffffffffffffffffffffffffffff166113e782610c06565b73ffffffffffffffffffffffffffffffffffffffff161461143d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143490613924565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115c98383836001611c77565b505050565b6115df816115da61117e565b611c7d565b50565b6115ec8282610d7a565b6116bf576001600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061166461117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6116cd8282610d7a565b156117a1576000600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061174661117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6117ad611d02565b6000600a60006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6117f161117e565b6040516117fe9190612e8a565b60405180910390a1565b600081600001549050919050565b6001816000016000828254019250508190555050565b611846828260405180602001604052806000815250611d4b565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61188f611da6565b6001600a60006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118d361117e565b6040516118e09190612e8a565b60405180910390a1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611959576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195090613a22565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611a4a9190612d10565b60405180910390a3505050565b611a628484846112d4565b611a6e84848484611df0565b611aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa490613ab4565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001611ad984611f87565b01905060008167ffffffffffffffff811115611af857611af76130fe565b5b6040519080825280601f01601f191660200182016040528015611b2a5781602001600182028036833780820191505090505b509050600082602001820190505b600115611b97578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611b8157611b80613ad4565b5b0494506000851415611b9257611b97565b611b38565b819350505050919050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611c155750611c14826120da565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611c3e8361184a565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611c65611da6565b611c71848484846121bc565b50505050565b50505050565b611c878282610d7a565b611cfe57611c948161231c565b611ca28360001c6020612349565b604051602001611cb3929190613b9b565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf59190612dc4565b60405180910390fd5b5050565b611d0a610bef565b611d49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4090613c21565b60405180910390fd5b565b611d558383612585565b611d626000848484611df0565b611da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9890613ab4565b60405180910390fd5b505050565b611dae610bef565b15611dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de590613c8d565b60405180910390fd5b565b6000611e118473ffffffffffffffffffffffffffffffffffffffff166127a3565b15611f7a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611e3a61117e565b8786866040518563ffffffff1660e01b8152600401611e5c9493929190613d02565b602060405180830381600087803b158015611e7657600080fd5b505af1925050508015611ea757506040513d601f19601f82011682018060405250810190611ea49190613d63565b60015b611f2a573d8060008114611ed7576040519150601f19603f3d011682016040523d82523d6000602084013e611edc565b606091505b50600081511415611f22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1990613ab4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611f7f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611fe5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611fdb57611fda613ad4565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612022576d04ee2d6d415b85acef8100000000838161201857612017613ad4565b5b0492506020810190505b662386f26fc10000831061205157662386f26fc10000838161204757612046613ad4565b5b0492506010810190505b6305f5e100831061207a576305f5e10083816120705761206f613ad4565b5b0492506008810190505b612710831061209f57612710838161209557612094613ad4565b5b0492506004810190505b606483106120c257606483816120b8576120b7613ad4565b5b0492506002810190505b600a83106120d1576001810190505b80915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806121a557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806121b557506121b4826127c6565b5b9050919050565b6121c884848484612830565b600181111561220c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161220390613e02565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156122545761224f81612956565b612293565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461229257612291858261299f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156122d6576122d181612b0c565b612315565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612314576123138482612bdd565b5b5b5050505050565b60606123428273ffffffffffffffffffffffffffffffffffffffff16601460ff16612349565b9050919050565b60606000600283600261235c9190613e51565b6123669190613eab565b67ffffffffffffffff81111561237f5761237e6130fe565b5b6040519080825280601f01601f1916602001820160405280156123b15781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106123e9576123e8613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061244d5761244c613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261248d9190613e51565b6124979190613eab565b90505b6001811115612537577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106124d9576124d8613725565b5b1a60f81b8282815181106124f0576124ef613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061253090613f01565b905061249a565b506000841461257b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257290613f77565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ec90613fe3565b60405180910390fd5b6125fe81611c1c565b1561263e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126359061404f565b60405180910390fd5b61264c600083836001611c5d565b61265581611c1c565b15612695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268c9061404f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461279f600083836001611c77565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600181111561295057600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146128c45780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546128bc919061406f565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461294f5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546129479190613eab565b925050819055505b5b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b600060016129ac84610c8d565b6129b6919061406f565b9050600060076000848152602001908152602001600020549050818114612a9b576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050612b20919061406f565b9050600060096000848152602001908152602001600020549050600060088381548110612b5057612b4f613725565b5b906000526020600020015490508060088381548110612b7257612b71613725565b5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480612bc157612bc06140a3565b5b6001900381819060005260206000200160009055905550505050565b6000612be883610c8d565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612ca581612c70565b8114612cb057600080fd5b50565b600081359050612cc281612c9c565b92915050565b600060208284031215612cde57612cdd612c66565b5b6000612cec84828501612cb3565b91505092915050565b60008115159050919050565b612d0a81612cf5565b82525050565b6000602082019050612d256000830184612d01565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612d65578082015181840152602081019050612d4a565b83811115612d74576000848401525b50505050565b6000601f19601f8301169050919050565b6000612d9682612d2b565b612da08185612d36565b9350612db0818560208601612d47565b612db981612d7a565b840191505092915050565b60006020820190508181036000830152612dde8184612d8b565b905092915050565b6000819050919050565b612df981612de6565b8114612e0457600080fd5b50565b600081359050612e1681612df0565b92915050565b600060208284031215612e3257612e31612c66565b5b6000612e4084828501612e07565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612e7482612e49565b9050919050565b612e8481612e69565b82525050565b6000602082019050612e9f6000830184612e7b565b92915050565b612eae81612e69565b8114612eb957600080fd5b50565b600081359050612ecb81612ea5565b92915050565b60008060408385031215612ee857612ee7612c66565b5b6000612ef685828601612ebc565b9250506020612f0785828601612e07565b9150509250929050565b612f1a81612de6565b82525050565b6000602082019050612f356000830184612f11565b92915050565b600080600060608486031215612f5457612f53612c66565b5b6000612f6286828701612ebc565b9350506020612f7386828701612ebc565b9250506040612f8486828701612e07565b9150509250925092565b6000819050919050565b612fa181612f8e565b8114612fac57600080fd5b50565b600081359050612fbe81612f98565b92915050565b600060208284031215612fda57612fd9612c66565b5b6000612fe884828501612faf565b91505092915050565b612ffa81612f8e565b82525050565b60006020820190506130156000830184612ff1565b92915050565b6000806040838503121561303257613031612c66565b5b600061304085828601612faf565b925050602061305185828601612ebc565b9150509250929050565b60006020828403121561307157613070612c66565b5b600061307f84828501612ebc565b91505092915050565b61309181612cf5565b811461309c57600080fd5b50565b6000813590506130ae81613088565b92915050565b600080604083850312156130cb576130ca612c66565b5b60006130d985828601612ebc565b92505060206130ea8582860161309f565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61313682612d7a565b810181811067ffffffffffffffff82111715613155576131546130fe565b5b80604052505050565b6000613168612c5c565b9050613174828261312d565b919050565b600067ffffffffffffffff821115613194576131936130fe565b5b61319d82612d7a565b9050602081019050919050565b82818337600083830152505050565b60006131cc6131c784613179565b61315e565b9050828152602081018484840111156131e8576131e76130f9565b5b6131f38482856131aa565b509392505050565b600082601f8301126132105761320f6130f4565b5b81356132208482602086016131b9565b91505092915050565b6000806000806080858703121561324357613242612c66565b5b600061325187828801612ebc565b945050602061326287828801612ebc565b935050604061327387828801612e07565b925050606085013567ffffffffffffffff81111561329457613293612c6b565b5b6132a0878288016131fb565b91505092959194509250565b600080604083850312156132c3576132c2612c66565b5b60006132d185828601612ebc565b92505060206132e285828601612ebc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061333357607f821691505b60208210811415613347576133466132ec565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006133a9602183612d36565b91506133b48261334d565b604082019050919050565b600060208201905081810360008301526133d88161339c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061343b603d83612d36565b9150613446826133df565b604082019050919050565b6000602082019050818103600083015261346a8161342e565b9050919050565b7f496e76616c696420746f6b656e20696e64657800000000000000000000000000600082015250565b60006134a7601383612d36565b91506134b282613471565b602082019050919050565b600060208201905081810360008301526134d68161349a565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613539602d83612d36565b9150613544826134dd565b604082019050919050565b600060208201905081810360008301526135688161352c565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b60006135cb602b83612d36565b91506135d68261356f565b604082019050919050565b600060208201905081810360008301526135fa816135be565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600061365d602f83612d36565b915061366882613601565b604082019050919050565b6000602082019050818103600083015261368c81613650565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b60006136ef602c83612d36565b91506136fa82613693565b604082019050919050565b6000602082019050818103600083015261371e816136e2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061378a601883612d36565b915061379582613754565b602082019050919050565b600060208201905081810360008301526137b98161377d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061381c602983612d36565b9150613827826137c0565b604082019050919050565b6000602082019050818103600083015261384b8161380f565b9050919050565b600081905092915050565b600061386882612d2b565b6138728185613852565b9350613882818560208601612d47565b80840191505092915050565b600061389a828561385d565b91506138a6828461385d565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061390e602583612d36565b9150613919826138b2565b604082019050919050565b6000602082019050818103600083015261393d81613901565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006139a0602483612d36565b91506139ab82613944565b604082019050919050565b600060208201905081810360008301526139cf81613993565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613a0c601983612d36565b9150613a17826139d6565b602082019050919050565b60006020820190508181036000830152613a3b816139ff565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613a9e603283612d36565b9150613aa982613a42565b604082019050919050565b60006020820190508181036000830152613acd81613a91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000613b39601783613852565b9150613b4482613b03565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000613b85601183613852565b9150613b9082613b4f565b601182019050919050565b6000613ba682613b2c565b9150613bb2828561385d565b9150613bbd82613b78565b9150613bc9828461385d565b91508190509392505050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000613c0b601483612d36565b9150613c1682613bd5565b602082019050919050565b60006020820190508181036000830152613c3a81613bfe565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000613c77601083612d36565b9150613c8282613c41565b602082019050919050565b60006020820190508181036000830152613ca681613c6a565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613cd482613cad565b613cde8185613cb8565b9350613cee818560208601612d47565b613cf781612d7a565b840191505092915050565b6000608082019050613d176000830187612e7b565b613d246020830186612e7b565b613d316040830185612f11565b8181036060830152613d438184613cc9565b905095945050505050565b600081519050613d5d81612c9c565b92915050565b600060208284031215613d7957613d78612c66565b5b6000613d8784828501613d4e565b91505092915050565b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000613dec603583612d36565b9150613df782613d90565b604082019050919050565b60006020820190508181036000830152613e1b81613ddf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613e5c82612de6565b9150613e6783612de6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613ea057613e9f613e22565b5b828202905092915050565b6000613eb682612de6565b9150613ec183612de6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613ef657613ef5613e22565b5b828201905092915050565b6000613f0c82612de6565b91506000821415613f2057613f1f613e22565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000613f61602083612d36565b9150613f6c82613f2b565b602082019050919050565b60006020820190508181036000830152613f9081613f54565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613fcd602083612d36565b9150613fd882613f97565b602082019050919050565b60006020820190508181036000830152613ffc81613fc0565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614039601c83612d36565b915061404482614003565b602082019050919050565b600060208201905081810360008301526140688161402c565b9050919050565b600061407a82612de6565b915061408583612de6565b92508282101561409857614097613e22565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220998f1ca79d15567ff33b1d694056842a7c378857e043c6b5f60b58ff1ffede3d64736f6c63430008090033",
	"deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101e55760003560e01c80634f6ccce71161010f578063a22cb465116100a2578063d547741f11610071578063d547741f146105a2578063e63ab1e9146105be578063e985e9c5146105dc578063ea720f881461060c576101e5565b8063a22cb4651461051c578063b88d4fde14610538578063c87b56dd14610554578063d539139314610584576101e5565b80638456cb59116100de5780638456cb59146104a657806391d14854146104b057806395d89b41146104e0578063a217fddf146104fe576101e5565b80634f6ccce7146103f85780635c975abb146104285780636352211e1461044657806370a0823114610476576101e5565b8063248a9ca3116101875780633f4ba83a116101565780633f4ba83a1461038657806340d097c31461039057806342842e0e146103ac57806349f202ff146103c8576101e5565b8063248a9ca3146102ee5780632f2ff15d1461031e5780632f745c591461033a57806336568abe1461036a576101e5565b8063095ea7b3116101c3578063095ea7b31461026857806318160ddd146102845780631b732d46146102a257806323b872dd146102d2576101e5565b806301ffc9a7146101ea57806306fdde031461021a578063081812fc14610238575b600080fd5b61020460048036038101906101ff9190612cc8565b61063c565b6040516102119190612d10565b60405180910390f35b61022261064e565b60405161022f9190612dc4565b60405180910390f35b610252600480360381019061024d9190612e1c565b6106e0565b60405161025f9190612e8a565b60405180910390f35b610282600480360381019061027d9190612ed1565b610726565b005b61028c61083e565b6040516102999190612f20565b60405180910390f35b6102bc60048036038101906102b79190612e1c565b61084b565b6040516102c99190612e8a565b60405180910390f35b6102ec60048036038101906102e79190612f3b565b6108b4565b005b61030860048036038101906103039190612fc4565b610914565b6040516103159190613000565b60405180910390f35b6103386004803603810190610333919061301b565b610934565b005b610354600480360381019061034f9190612ed1565b610955565b6040516103619190612f20565b60405180910390f35b610384600480360381019061037f919061301b565b6109fa565b005b61038e610a7d565b005b6103aa60048036038101906103a5919061305b565b610ab2565b005b6103c660048036038101906103c19190612f3b565b610b03565b005b6103e260048036038101906103dd9190612e1c565b610b23565b6040516103ef9190612f20565b60405180910390f35b610412600480360381019061040d9190612e1c565b610b7e565b60405161041f9190612f20565b60405180910390f35b610430610bef565b60405161043d9190612d10565b60405180910390f35b610460600480360381019061045b9190612e1c565b610c06565b60405161046d9190612e8a565b60405180910390f35b610490600480360381019061048b919061305b565b610c8d565b60405161049d9190612f20565b60405180910390f35b6104ae610d45565b005b6104ca60048036038101906104c5919061301b565b610d7a565b6040516104d79190612d10565b60405180910390f35b6104e8610de5565b6040516104f59190612dc4565b60405180910390f35b610506610e77565b6040516105139190613000565b60405180910390f35b610536600480360381019061053191906130b4565b610e7e565b005b610552600480360381019061054d9190613229565b610e94565b005b61056e60048036038101906105699190612e1c565b610ef6565b60405161057b9190612dc4565b60405180910390f35b61058c610f5e565b6040516105999190613000565b60405180910390f35b6105bc60048036038101906105b7919061301b565b610f82565b005b6105c6610fa3565b6040516105d39190613000565b60405180910390f35b6105f660048036038101906105f191906132ac565b610fc7565b6040516106039190612d10565b60405180910390f35b61062660048036038101906106219190612ed1565b61105b565b6040516106339190612f20565b60405180910390f35b6000610647826110b9565b9050919050565b60606000805461065d9061331b565b80601f01602080910402602001604051908101604052809291908181526020018280546106899061331b565b80156106d65780601f106106ab576101008083540402835291602001916106d6565b820191906000526020600020905b8154815290600101906020018083116106b957829003601f168201915b5050505050905090565b60006106eb82611133565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061073182610c06565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610799906133bf565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166107c161117e565b73ffffffffffffffffffffffffffffffffffffffff1614806107f057506107ef816107ea61117e565b610fc7565b5b61082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690613451565b60405180910390fd5b6108398383611186565b505050565b6000600880549050905090565b600061085561083e565b8210610896576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088d906134bd565b60405180910390fd5b60006108a183610b7e565b90506108ac81610c06565b915050919050565b6108c56108bf61117e565b8261123f565b610904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fb9061354f565b60405180910390fd5b61090f8383836112d4565b505050565b6000600b6000838152602001908152602001600020600101549050919050565b61093d82610914565b610946816115ce565b61095083836115e2565b505050565b600061096083610c8d565b82106109a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610998906135e1565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610a0261117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6690613673565b60405180910390fd5b610a7982826116c3565b5050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610aa7816115ce565b610aaf6117a5565b50565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610adc816115ce565b6000610ae8600c611808565b9050610af4600c611816565b610afe838261182c565b505050565b610b1e83838360405180602001604052806000815250610e94565b505050565b6000610b2d61083e565b8210610b6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b65906134bd565b60405180910390fd5b610b7782610b7e565b9050919050565b6000610b8861083e565b8210610bc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bc090613705565b60405180910390fd5b60088281548110610bdd57610bdc613725565b5b90600052602060002001549050919050565b6000600a60009054906101000a900460ff16905090565b600080610c128361184a565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b906137a0565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf590613832565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610d6f816115ce565b610d77611887565b50565b6000600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060018054610df49061331b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e209061331b565b8015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b6000801b81565b610e90610e8961117e565b83836118ea565b5050565b610ea5610e9f61117e565b8361123f565b610ee4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edb9061354f565b60405180910390fd5b610ef084848484611a57565b50505050565b6060610f0182611133565b6000610f0b611ab3565b90506000815111610f2b5760405180602001604052806000815250610f56565b80610f3584611aca565b604051602001610f4692919061388e565b6040516020818303038152906040525b915050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610f8b82610914565b610f94816115ce565b610f9e83836116c3565b505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061106683610c8d565b82106110a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109e906134bd565b60405180910390fd5b6110b18383610955565b905092915050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061112c575061112b82611ba2565b5b9050919050565b61113c81611c1c565b61117b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611172906137a0565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166111f983610c06565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061124b83610c06565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061128d575061128c8185610fc7565b5b806112cb57508373ffffffffffffffffffffffffffffffffffffffff166112b3846106e0565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112f482610c06565b73ffffffffffffffffffffffffffffffffffffffff161461134a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134190613924565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113b1906139b6565b60405180910390fd5b6113c78383836001611c5d565b8273ffffffffffffffffffffffffffffffffffffffff166113e782610c06565b73ffffffffffffffffffffffffffffffffffffffff161461143d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143490613924565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46115c98383836001611c77565b505050565b6115df816115da61117e565b611c7d565b50565b6115ec8282610d7a565b6116bf576001600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061166461117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6116cd8282610d7a565b156117a1576000600b600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061174661117e565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6117ad611d02565b6000600a60006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6117f161117e565b6040516117fe9190612e8a565b60405180910390a1565b600081600001549050919050565b6001816000016000828254019250508190555050565b611846828260405180602001604052806000815250611d4b565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61188f611da6565b6001600a60006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118d361117e565b6040516118e09190612e8a565b60405180910390a1565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611959576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195090613a22565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611a4a9190612d10565b60405180910390a3505050565b611a628484846112d4565b611a6e84848484611df0565b611aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa490613ab4565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060006001611ad984611f87565b01905060008167ffffffffffffffff811115611af857611af76130fe565b5b6040519080825280601f01601f191660200182016040528015611b2a5781602001600182028036833780820191505090505b509050600082602001820190505b600115611b97578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611b8157611b80613ad4565b5b0494506000851415611b9257611b97565b611b38565b819350505050919050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611c155750611c14826120da565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611c3e8361184a565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611c65611da6565b611c71848484846121bc565b50505050565b50505050565b611c878282610d7a565b611cfe57611c948161231c565b611ca28360001c6020612349565b604051602001611cb3929190613b9b565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cf59190612dc4565b60405180910390fd5b5050565b611d0a610bef565b611d49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d4090613c21565b60405180910390fd5b565b611d558383612585565b611d626000848484611df0565b611da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d9890613ab4565b60405180910390fd5b505050565b611dae610bef565b15611dee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611de590613c8d565b60405180910390fd5b565b6000611e118473ffffffffffffffffffffffffffffffffffffffff166127a3565b15611f7a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611e3a61117e565b8786866040518563ffffffff1660e01b8152600401611e5c9493929190613d02565b602060405180830381600087803b158015611e7657600080fd5b505af1925050508015611ea757506040513d601f19601f82011682018060405250810190611ea49190613d63565b60015b611f2a573d8060008114611ed7576040519150601f19603f3d011682016040523d82523d6000602084013e611edc565b606091505b50600081511415611f22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1990613ab4565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611f7f565b600190505b949350505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611fe5577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611fdb57611fda613ad4565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612022576d04ee2d6d415b85acef8100000000838161201857612017613ad4565b5b0492506020810190505b662386f26fc10000831061205157662386f26fc10000838161204757612046613ad4565b5b0492506010810190505b6305f5e100831061207a576305f5e10083816120705761206f613ad4565b5b0492506008810190505b612710831061209f57612710838161209557612094613ad4565b5b0492506004810190505b606483106120c257606483816120b8576120b7613ad4565b5b0492506002810190505b600a83106120d1576001810190505b80915050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806121a557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806121b557506121b4826127c6565b5b9050919050565b6121c884848484612830565b600181111561220c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161220390613e02565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156122545761224f81612956565b612293565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461229257612291858261299f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156122d6576122d181612b0c565b612315565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614612314576123138482612bdd565b5b5b5050505050565b60606123428273ffffffffffffffffffffffffffffffffffffffff16601460ff16612349565b9050919050565b60606000600283600261235c9190613e51565b6123669190613eab565b67ffffffffffffffff81111561237f5761237e6130fe565b5b6040519080825280601f01601f1916602001820160405280156123b15781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106123e9576123e8613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061244d5761244c613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261248d9190613e51565b6124979190613eab565b90505b6001811115612537577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106124d9576124d8613725565b5b1a60f81b8282815181106124f0576124ef613725565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061253090613f01565b905061249a565b506000841461257b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161257290613f77565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125ec90613fe3565b60405180910390fd5b6125fe81611c1c565b1561263e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126359061404f565b60405180910390fd5b61264c600083836001611c5d565b61265581611c1c565b15612695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161268c9061404f565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461279f600083836001611c77565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600181111561295057600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146128c45780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546128bc919061406f565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461294f5780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546129479190613eab565b925050819055505b5b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b600060016129ac84610c8d565b6129b6919061406f565b9050600060076000848152602001908152602001600020549050818114612a9b576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050612b20919061406f565b9050600060096000848152602001908152602001600020549050600060088381548110612b5057612b4f613725565b5b906000526020600020015490508060088381548110612b7257612b71613725565b5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480612bc157612bc06140a3565b5b6001900381819060005260206000200160009055905550505050565b6000612be883610c8d565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612ca581612c70565b8114612cb057600080fd5b50565b600081359050612cc281612c9c565b92915050565b600060208284031215612cde57612cdd612c66565b5b6000612cec84828501612cb3565b91505092915050565b60008115159050919050565b612d0a81612cf5565b82525050565b6000602082019050612d256000830184612d01565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612d65578082015181840152602081019050612d4a565b83811115612d74576000848401525b50505050565b6000601f19601f8301169050919050565b6000612d9682612d2b565b612da08185612d36565b9350612db0818560208601612d47565b612db981612d7a565b840191505092915050565b60006020820190508181036000830152612dde8184612d8b565b905092915050565b6000819050919050565b612df981612de6565b8114612e0457600080fd5b50565b600081359050612e1681612df0565b92915050565b600060208284031215612e3257612e31612c66565b5b6000612e4084828501612e07565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612e7482612e49565b9050919050565b612e8481612e69565b82525050565b6000602082019050612e9f6000830184612e7b565b92915050565b612eae81612e69565b8114612eb957600080fd5b50565b600081359050612ecb81612ea5565b92915050565b60008060408385031215612ee857612ee7612c66565b5b6000612ef685828601612ebc565b9250506020612f0785828601612e07565b9150509250929050565b612f1a81612de6565b82525050565b6000602082019050612f356000830184612f11565b92915050565b600080600060608486031215612f5457612f53612c66565b5b6000612f6286828701612ebc565b9350506020612f7386828701612ebc565b9250506040612f8486828701612e07565b9150509250925092565b6000819050919050565b612fa181612f8e565b8114612fac57600080fd5b50565b600081359050612fbe81612f98565b92915050565b600060208284031215612fda57612fd9612c66565b5b6000612fe884828501612faf565b91505092915050565b612ffa81612f8e565b82525050565b60006020820190506130156000830184612ff1565b92915050565b6000806040838503121561303257613031612c66565b5b600061304085828601612faf565b925050602061305185828601612ebc565b9150509250929050565b60006020828403121561307157613070612c66565b5b600061307f84828501612ebc565b91505092915050565b61309181612cf5565b811461309c57600080fd5b50565b6000813590506130ae81613088565b92915050565b600080604083850312156130cb576130ca612c66565b5b60006130d985828601612ebc565b92505060206130ea8582860161309f565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61313682612d7a565b810181811067ffffffffffffffff82111715613155576131546130fe565b5b80604052505050565b6000613168612c5c565b9050613174828261312d565b919050565b600067ffffffffffffffff821115613194576131936130fe565b5b61319d82612d7a565b9050602081019050919050565b82818337600083830152505050565b60006131cc6131c784613179565b61315e565b9050828152602081018484840111156131e8576131e76130f9565b5b6131f38482856131aa565b509392505050565b600082601f8301126132105761320f6130f4565b5b81356132208482602086016131b9565b91505092915050565b6000806000806080858703121561324357613242612c66565b5b600061325187828801612ebc565b945050602061326287828801612ebc565b935050604061327387828801612e07565b925050606085013567ffffffffffffffff81111561329457613293612c6b565b5b6132a0878288016131fb565b91505092959194509250565b600080604083850312156132c3576132c2612c66565b5b60006132d185828601612ebc565b92505060206132e285828601612ebc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061333357607f821691505b60208210811415613347576133466132ec565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006133a9602183612d36565b91506133b48261334d565b604082019050919050565b600060208201905081810360008301526133d88161339c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061343b603d83612d36565b9150613446826133df565b604082019050919050565b6000602082019050818103600083015261346a8161342e565b9050919050565b7f496e76616c696420746f6b656e20696e64657800000000000000000000000000600082015250565b60006134a7601383612d36565b91506134b282613471565b602082019050919050565b600060208201905081810360008301526134d68161349a565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613539602d83612d36565b9150613544826134dd565b604082019050919050565b600060208201905081810360008301526135688161352c565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b60006135cb602b83612d36565b91506135d68261356f565b604082019050919050565b600060208201905081810360008301526135fa816135be565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600061365d602f83612d36565b915061366882613601565b604082019050919050565b6000602082019050818103600083015261368c81613650565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b60006136ef602c83612d36565b91506136fa82613693565b604082019050919050565b6000602082019050818103600083015261371e816136e2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061378a601883612d36565b915061379582613754565b602082019050919050565b600060208201905081810360008301526137b98161377d565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b600061381c602983612d36565b9150613827826137c0565b604082019050919050565b6000602082019050818103600083015261384b8161380f565b9050919050565b600081905092915050565b600061386882612d2b565b6138728185613852565b9350613882818560208601612d47565b80840191505092915050565b600061389a828561385d565b91506138a6828461385d565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061390e602583612d36565b9150613919826138b2565b604082019050919050565b6000602082019050818103600083015261393d81613901565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006139a0602483612d36565b91506139ab82613944565b604082019050919050565b600060208201905081810360008301526139cf81613993565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613a0c601983612d36565b9150613a17826139d6565b602082019050919050565b60006020820190508181036000830152613a3b816139ff565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613a9e603283612d36565b9150613aa982613a42565b604082019050919050565b60006020820190508181036000830152613acd81613a91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000613b39601783613852565b9150613b4482613b03565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000613b85601183613852565b9150613b9082613b4f565b601182019050919050565b6000613ba682613b2c565b9150613bb2828561385d565b9150613bbd82613b78565b9150613bc9828461385d565b91508190509392505050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000613c0b601483612d36565b9150613c1682613bd5565b602082019050919050565b60006020820190508181036000830152613c3a81613bfe565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b6000613c77601083612d36565b9150613c8282613c41565b602082019050919050565b60006020820190508181036000830152613ca681613c6a565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000613cd482613cad565b613cde8185613cb8565b9350613cee818560208601612d47565b613cf781612d7a565b840191505092915050565b6000608082019050613d176000830187612e7b565b613d246020830186612e7b565b613d316040830185612f11565b8181036060830152613d438184613cc9565b905095945050505050565b600081519050613d5d81612c9c565b92915050565b600060208284031215613d7957613d78612c66565b5b6000613d8784828501613d4e565b91505092915050565b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000613dec603583612d36565b9150613df782613d90565b604082019050919050565b60006020820190508181036000830152613e1b81613ddf565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613e5c82612de6565b9150613e6783612de6565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613ea057613e9f613e22565b5b828202905092915050565b6000613eb682612de6565b9150613ec183612de6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115613ef657613ef5613e22565b5b828201905092915050565b6000613f0c82612de6565b91506000821415613f2057613f1f613e22565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000613f61602083612d36565b9150613f6c82613f2b565b602082019050919050565b60006020820190508181036000830152613f9081613f54565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613fcd602083612d36565b9150613fd882613f97565b602082019050919050565b60006020820190508181036000830152613ffc81613fc0565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000614039601c83612d36565b915061404482614003565b602082019050919050565b600060208201905081810360008301526140688161402c565b9050919050565b600061407a82612de6565b915061408583612de6565b92508282101561409857614097613e22565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220998f1ca79d15567ff33b1d694056842a7c378857e043c6b5f60b58ff1ffede3d64736f6c63430008090033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:516:18",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "35:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "52:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "55:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "45:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "45:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "45:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "149:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "152:4:18",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "142:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "142:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "142:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "173:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "176:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "166:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "166:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "166:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "7:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "244:269:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "254:22:18",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "268:4:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "274:1:18",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "264:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "264:12:18"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "254:6:18"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "285:38:18",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "315:4:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "321:1:18",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "311:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "311:12:18"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "289:18:18",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "362:51:18",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "376:27:18",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "390:6:18"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "398:4:18",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "386:3:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "386:17:18"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "376:6:18"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "342:18:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "335:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "335:26:18"
					},
					"nodeType": "YulIf",
					"src": "332:81:18"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "465:42:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "479:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "479:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "479:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "429:18:18"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "452:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "460:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "449:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "449:14:18"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "426:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "426:38:18"
					},
					"nodeType": "YulIf",
					"src": "423:84:18"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "228:4:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "237:6:18",
				  "type": ""
				}
			  ],
			  "src": "193:320:18"
			}
		  ]
		},
		"contents": "{\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
		"id": 18,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:38440:18",
		  "statements": [
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "47:35:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "57:19:18",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "73:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "67:5:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "67:9:18"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "57:6:18"
					  }
					]
				  }
				]
			  },
			  "name": "allocate_unbounded",
			  "nodeType": "YulFunctionDefinition",
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "40:6:18",
				  "type": ""
				}
			  ],
			  "src": "7:75:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "177:28:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "194:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "197:1:18",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "187:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "187:12:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "187:12:18"
				  }
				]
			  },
			  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
			  "nodeType": "YulFunctionDefinition",
			  "src": "88:117:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "300:28:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "317:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "320:1:18",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "310:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "310:12:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "310:12:18"
				  }
				]
			  },
			  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
			  "nodeType": "YulFunctionDefinition",
			  "src": "211:117:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "378:105:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "388:89:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "403:5:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "410:66:18",
						  "type": "",
						  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "399:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "399:78:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "388:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bytes4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "360:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "370:7:18",
				  "type": ""
				}
			  ],
			  "src": "334:149:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "531:78:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "587:16:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "596:1:18",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "599:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "589:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "589:12:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "589:12:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "554:5:18"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "578:5:18"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_bytes4",
								"nodeType": "YulIdentifier",
								"src": "561:16:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "561:23:18"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "551:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "551:34:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "544:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "544:42:18"
					},
					"nodeType": "YulIf",
					"src": "541:62:18"
				  }
				]
			  },
			  "name": "validator_revert_t_bytes4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "524:5:18",
				  "type": ""
				}
			  ],
			  "src": "489:120:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "666:86:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "676:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "698:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "685:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "685:20:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "676:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "740:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_bytes4",
						"nodeType": "YulIdentifier",
						"src": "714:25:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "714:32:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "714:32:18"
				  }
				]
			  },
			  "name": "abi_decode_t_bytes4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "644:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "652:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "660:5:18",
				  "type": ""
				}
			  ],
			  "src": "615:137:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "823:262:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "869:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "871:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "871:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "871:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "844:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "853:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "840:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "840:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "865:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "836:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "836:32:18"
					},
					"nodeType": "YulIf",
					"src": "833:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "962:116:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "977:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "991:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "981:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "1006:62:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "1040:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "1051:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "1036:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1036:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1060:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bytes4",
							"nodeType": "YulIdentifier",
							"src": "1016:19:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1016:52:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "1006:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bytes4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "793:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "804:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "816:6:18",
				  "type": ""
				}
			  ],
			  "src": "758:327:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1133:48:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1143:32:18",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1168:5:18"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "1161:6:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1161:13:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "1154:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1154:21:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "1143:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1115:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "1125:7:18",
				  "type": ""
				}
			  ],
			  "src": "1091:90:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1246:50:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1263:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "1283:5:18"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_bool",
							"nodeType": "YulIdentifier",
							"src": "1268:14:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1268:21:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1256:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1256:34:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1256:34:18"
				  }
				]
			  },
			  "name": "abi_encode_t_bool_to_t_bool_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1234:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "1241:3:18",
				  "type": ""
				}
			  ],
			  "src": "1187:109:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1394:118:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1404:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1416:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1427:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1412:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1412:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1404:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "1478:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1491:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1502:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1487:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1487:17:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bool_to_t_bool_fromStack",
						"nodeType": "YulIdentifier",
						"src": "1440:37:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1440:65:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1440:65:18"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1366:9:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1378:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1389:4:18",
				  "type": ""
				}
			  ],
			  "src": "1302:210:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1577:40:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1588:22:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1604:5:18"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1598:5:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1598:12:18"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "1588:6:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_string_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "1560:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1570:6:18",
				  "type": ""
				}
			  ],
			  "src": "1518:99:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1719:73:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1736:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1741:6:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1729:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1729:19:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1729:19:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1757:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "1776:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1781:4:18",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1772:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1772:14:18"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "1757:11:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "1691:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1696:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "1707:11:18",
				  "type": ""
				}
			  ],
			  "src": "1623:169:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1847:258:18",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1857:10:18",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "1866:1:18",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "1861:1:18",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1926:63:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"name": "dst",
									"nodeType": "YulIdentifier",
									"src": "1951:3:18"
								  },
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "1956:1:18"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "1947:3:18"
								},
								"nodeType": "YulFunctionCall",
								"src": "1947:11:18"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"name": "src",
										"nodeType": "YulIdentifier",
										"src": "1970:3:18"
									  },
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "1975:1:18"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "1966:3:18"
									},
									"nodeType": "YulFunctionCall",
									"src": "1966:11:18"
								  }
								],
								"functionName": {
								  "name": "mload",
								  "nodeType": "YulIdentifier",
								  "src": "1960:5:18"
								},
								"nodeType": "YulFunctionCall",
								"src": "1960:18:18"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "1940:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "1940:39:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1940:39:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "1887:1:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "1890:6:18"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "1884:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1884:13:18"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "1898:19:18",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "1900:15:18",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "1909:1:18"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1912:2:18",
								"type": "",
								"value": "32"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "1905:3:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "1905:10:18"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "1900:1:18"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "1880:3:18",
					  "statements": []
					},
					"src": "1876:113:18"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2023:76:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"name": "dst",
									"nodeType": "YulIdentifier",
									"src": "2073:3:18"
								  },
								  {
									"name": "length",
									"nodeType": "YulIdentifier",
									"src": "2078:6:18"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "2069:3:18"
								},
								"nodeType": "YulFunctionCall",
								"src": "2069:16:18"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2087:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "2062:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "2062:27:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2062:27:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "2004:1:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "2007:6:18"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "2001:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2001:13:18"
					},
					"nodeType": "YulIf",
					"src": "1998:101:18"
				  }
				]
			  },
			  "name": "copy_memory_to_memory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "1829:3:18",
				  "type": ""
				},
				{
				  "name": "dst",
				  "nodeType": "YulTypedName",
				  "src": "1834:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "1839:6:18",
				  "type": ""
				}
			  ],
			  "src": "1798:307:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2159:54:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2169:38:18",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2187:5:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2194:2:18",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2183:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2183:14:18"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2203:2:18",
							  "type": "",
							  "value": "31"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "2199:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2199:7:18"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "2179:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2179:28:18"
					},
					"variableNames": [
					  {
						"name": "result",
						"nodeType": "YulIdentifier",
						"src": "2169:6:18"
					  }
					]
				  }
				]
			  },
			  "name": "round_up_to_mul_of_32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2142:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "result",
				  "nodeType": "YulTypedName",
				  "src": "2152:6:18",
				  "type": ""
				}
			  ],
			  "src": "2111:102:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2311:272:18",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2321:53:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2368:5:18"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "2335:32:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2335:39:18"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "2325:6:18",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2383:78:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "2449:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "2454:6:18"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "2390:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2390:71:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "2383:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "2496:5:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2503:4:18",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2492:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2492:16:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "2510:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "2515:6:18"
						}
					  ],
					  "functionName": {
						"name": "copy_memory_to_memory",
						"nodeType": "YulIdentifier",
						"src": "2470:21:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2470:52:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2470:52:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2531:46:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "2542:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "2569:6:18"
							}
						  ],
						  "functionName": {
							"name": "round_up_to_mul_of_32",
							"nodeType": "YulIdentifier",
							"src": "2547:21:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2547:29:18"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2538:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2538:39:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "2531:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2292:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "2299:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "2307:3:18",
				  "type": ""
				}
			  ],
			  "src": "2219:364:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2707:195:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2717:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2729:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2740:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2725:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2725:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2717:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2764:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2775:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2760:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2760:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "2783:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2789:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2779:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2779:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2753:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2753:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2753:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2809:86:18",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "2881:6:18"
						},
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "2890:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "2817:63:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2817:78:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2809:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2679:9:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2691:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2702:4:18",
				  "type": ""
				}
			  ],
			  "src": "2589:313:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2953:32:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2963:16:18",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2974:5:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "2963:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "2935:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "2945:7:18",
				  "type": ""
				}
			  ],
			  "src": "2908:77:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3034:79:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3091:16:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3100:1:18",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3103:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3093:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "3093:12:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3093:12:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3057:5:18"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "3082:5:18"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_uint256",
								"nodeType": "YulIdentifier",
								"src": "3064:17:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3064:24:18"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "3054:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3054:35:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3047:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3047:43:18"
					},
					"nodeType": "YulIf",
					"src": "3044:63:18"
				  }
				]
			  },
			  "name": "validator_revert_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3027:5:18",
				  "type": ""
				}
			  ],
			  "src": "2991:122:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3171:87:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3181:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "3203:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3190:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3190:20:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "3181:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3246:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "3219:26:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3219:33:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3219:33:18"
				  }
				]
			  },
			  "name": "abi_decode_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "3149:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "3157:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3165:5:18",
				  "type": ""
				}
			  ],
			  "src": "3119:139:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3330:263:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3376:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "3378:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "3378:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3378:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3351:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3360:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "3347:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3347:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3372:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "3343:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3343:32:18"
					},
					"nodeType": "YulIf",
					"src": "3340:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "3469:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "3484:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3498:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "3488:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "3513:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "3548:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "3559:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "3544:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "3544:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3568:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "3523:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3523:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "3513:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3300:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "3311:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3323:6:18",
				  "type": ""
				}
			  ],
			  "src": "3264:329:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3644:81:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3654:65:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3669:5:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3676:42:18",
						  "type": "",
						  "value": "0xffffffffffffffffffffffffffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "3665:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3665:54:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3654:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_uint160",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3626:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3636:7:18",
				  "type": ""
				}
			  ],
			  "src": "3599:126:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3776:51:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3786:35:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3815:5:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint160",
						"nodeType": "YulIdentifier",
						"src": "3797:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3797:24:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "3786:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3758:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "3768:7:18",
				  "type": ""
				}
			  ],
			  "src": "3731:96:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3898:53:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "3915:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "3938:5:18"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_address",
							"nodeType": "YulIdentifier",
							"src": "3920:17:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3920:24:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3908:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3908:37:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3908:37:18"
				  }
				]
			  },
			  "name": "abi_encode_t_address_to_t_address_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "3886:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "3893:3:18",
				  "type": ""
				}
			  ],
			  "src": "3833:118:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4055:124:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4065:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4077:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4088:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4073:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4073:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4065:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "4145:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4158:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4169:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4154:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4154:17:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "4101:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4101:71:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4101:71:18"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4027:9:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4039:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4050:4:18",
				  "type": ""
				}
			  ],
			  "src": "3957:222:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4228:79:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4285:16:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4294:1:18",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "4297:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "4287:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "4287:12:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4287:12:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "4251:5:18"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "4276:5:18"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_address",
								"nodeType": "YulIdentifier",
								"src": "4258:17:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4258:24:18"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "4248:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4248:35:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4241:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4241:43:18"
					},
					"nodeType": "YulIf",
					"src": "4238:63:18"
				  }
				]
			  },
			  "name": "validator_revert_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4221:5:18",
				  "type": ""
				}
			  ],
			  "src": "4185:122:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4365:87:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4375:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "4397:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "4384:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4384:20:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "4375:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "4440:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_address",
						"nodeType": "YulIdentifier",
						"src": "4413:26:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4413:33:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4413:33:18"
				  }
				]
			  },
			  "name": "abi_decode_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "4343:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "4351:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4359:5:18",
				  "type": ""
				}
			  ],
			  "src": "4313:139:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4541:391:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4587:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "4589:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "4589:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4589:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4562:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4571:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "4558:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4558:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4583:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "4554:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4554:32:18"
					},
					"nodeType": "YulIf",
					"src": "4551:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "4680:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "4695:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4709:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "4699:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "4724:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "4759:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "4770:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "4755:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4755:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4779:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "4734:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4734:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "4724:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "4807:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "4822:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4836:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "4826:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "4852:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "4887:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "4898:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "4883:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4883:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "4907:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "4862:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4862:53:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "4852:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4503:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "4514:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4526:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "4534:6:18",
				  "type": ""
				}
			  ],
			  "src": "4458:474:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5003:53:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "5020:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "5043:5:18"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "5025:17:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5025:24:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5013:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5013:37:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5013:37:18"
				  }
				]
			  },
			  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "4991:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "4998:3:18",
				  "type": ""
				}
			  ],
			  "src": "4938:118:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5160:124:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5170:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5182:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5193:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5178:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5178:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5170:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "5250:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5263:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5274:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5259:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5259:17:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "5206:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5206:71:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5206:71:18"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5132:9:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5144:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5155:4:18",
				  "type": ""
				}
			  ],
			  "src": "5062:222:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5390:519:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5436:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "5438:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "5438:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5438:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5411:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5420:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "5407:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5407:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5432:2:18",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "5403:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5403:32:18"
					},
					"nodeType": "YulIf",
					"src": "5400:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5529:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5544:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5558:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5548:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5573:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5608:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5619:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5604:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5604:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5628:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5583:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5583:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "5573:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5656:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5671:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5685:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5675:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5701:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5736:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5747:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5732:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5732:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5756:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "5711:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5711:53:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "5701:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "5784:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "5799:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5813:2:18",
						  "type": "",
						  "value": "64"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "5803:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "5829:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "5864:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "5875:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "5860:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5860:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "5884:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "5839:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5839:53:18"
						},
						"variableNames": [
						  {
							"name": "value2",
							"nodeType": "YulIdentifier",
							"src": "5829:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5344:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "5355:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5367:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "5375:6:18",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "5383:6:18",
				  "type": ""
				}
			  ],
			  "src": "5290:619:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5960:32:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5970:16:18",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "5981:5:18"
					},
					"variableNames": [
					  {
						"name": "cleaned",
						"nodeType": "YulIdentifier",
						"src": "5970:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "cleanup_t_bytes32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "5942:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "cleaned",
				  "nodeType": "YulTypedName",
				  "src": "5952:7:18",
				  "type": ""
				}
			  ],
			  "src": "5915:77:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6041:79:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6098:16:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "6107:1:18",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "6110:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "6100:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "6100:12:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "6100:12:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6064:5:18"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "6089:5:18"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_bytes32",
								"nodeType": "YulIdentifier",
								"src": "6071:17:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6071:24:18"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "6061:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6061:35:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "6054:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6054:43:18"
					},
					"nodeType": "YulIf",
					"src": "6051:63:18"
				  }
				]
			  },
			  "name": "validator_revert_t_bytes32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6034:5:18",
				  "type": ""
				}
			  ],
			  "src": "5998:122:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6178:87:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6188:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "6210:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "6197:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6197:20:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "6188:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "6253:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_bytes32",
						"nodeType": "YulIdentifier",
						"src": "6226:26:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6226:33:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6226:33:18"
				  }
				]
			  },
			  "name": "abi_decode_t_bytes32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "6156:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "6164:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6172:5:18",
				  "type": ""
				}
			  ],
			  "src": "6126:139:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6337:263:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6383:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "6385:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "6385:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "6385:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6358:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6367:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "6354:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6354:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6379:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "6350:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6350:32:18"
					},
					"nodeType": "YulIf",
					"src": "6347:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "6476:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "6491:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6505:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "6495:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "6520:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "6555:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "6566:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "6551:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "6551:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "6575:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bytes32",
							"nodeType": "YulIdentifier",
							"src": "6530:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6530:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "6520:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bytes32",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6307:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "6318:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6330:6:18",
				  "type": ""
				}
			  ],
			  "src": "6271:329:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6671:53:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "6688:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "6711:5:18"
							}
						  ],
						  "functionName": {
							"name": "cleanup_t_bytes32",
							"nodeType": "YulIdentifier",
							"src": "6693:17:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6693:24:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6681:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6681:37:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6681:37:18"
				  }
				]
			  },
			  "name": "abi_encode_t_bytes32_to_t_bytes32_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "6659:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "6666:3:18",
				  "type": ""
				}
			  ],
			  "src": "6606:118:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6828:124:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "6838:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6850:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6861:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6846:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6846:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6838:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "6918:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6931:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6942:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6927:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6927:17:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bytes32_to_t_bytes32_fromStack",
						"nodeType": "YulIdentifier",
						"src": "6874:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6874:71:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6874:71:18"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bytes32__to_t_bytes32__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6800:9:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "6812:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6823:4:18",
				  "type": ""
				}
			  ],
			  "src": "6730:222:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7041:391:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7087:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "7089:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "7089:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7089:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7062:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7071:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "7058:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7058:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7083:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "7054:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7054:32:18"
					},
					"nodeType": "YulIf",
					"src": "7051:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7180:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7195:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7209:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7199:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7224:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7259:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7270:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7255:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7255:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7279:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bytes32",
							"nodeType": "YulIdentifier",
							"src": "7234:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7234:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "7224:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7307:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7322:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7336:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7326:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7352:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7387:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7398:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7383:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7383:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7407:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7362:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7362:53:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "7352:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bytes32t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7003:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "7014:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7026:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "7034:6:18",
				  "type": ""
				}
			  ],
			  "src": "6958:474:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7504:263:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7550:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "7552:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "7552:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7552:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7525:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7534:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "7521:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7521:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7546:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "7517:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7517:32:18"
					},
					"nodeType": "YulIf",
					"src": "7514:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "7643:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "7658:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7672:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "7662:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "7687:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "7722:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "7733:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "7718:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7718:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "7742:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "7697:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7697:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "7687:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "7474:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "7485:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "7497:6:18",
				  "type": ""
				}
			  ],
			  "src": "7438:329:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7813:76:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7867:16:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7876:1:18",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7879:1:18",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "7869:6:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "7869:12:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7869:12:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "7836:5:18"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "7858:5:18"
								}
							  ],
							  "functionName": {
								"name": "cleanup_t_bool",
								"nodeType": "YulIdentifier",
								"src": "7843:14:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7843:21:18"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "7833:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7833:32:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7826:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7826:40:18"
					},
					"nodeType": "YulIf",
					"src": "7823:60:18"
				  }
				]
			  },
			  "name": "validator_revert_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "7806:5:18",
				  "type": ""
				}
			  ],
			  "src": "7773:116:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7944:84:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7954:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "7976:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "7963:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7963:20:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "7954:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "8016:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_bool",
						"nodeType": "YulIdentifier",
						"src": "7992:23:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7992:30:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7992:30:18"
				  }
				]
			  },
			  "name": "abi_decode_t_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "7922:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "7930:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "7938:5:18",
				  "type": ""
				}
			  ],
			  "src": "7895:133:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8114:388:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "8160:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "8162:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "8162:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "8162:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "8135:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8144:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "8131:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8131:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8156:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "8127:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8127:32:18"
					},
					"nodeType": "YulIf",
					"src": "8124:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "8253:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "8268:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8282:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "8272:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "8297:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "8332:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "8343:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "8328:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8328:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "8352:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "8307:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8307:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "8297:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "8380:115:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "8395:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8409:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "8399:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "8425:60:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "8457:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "8468:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "8453:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "8453:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "8477:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bool",
							"nodeType": "YulIdentifier",
							"src": "8435:17:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8435:50:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "8425:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_bool",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8076:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "8087:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "8099:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "8107:6:18",
				  "type": ""
				}
			  ],
			  "src": "8034:468:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8597:28:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8614:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8617:1:18",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8607:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8607:12:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8607:12:18"
				  }
				]
			  },
			  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
			  "nodeType": "YulFunctionDefinition",
			  "src": "8508:117:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8720:28:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8737:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8740:1:18",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8730:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8730:12:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8730:12:18"
				  }
				]
			  },
			  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
			  "nodeType": "YulFunctionDefinition",
			  "src": "8631:117:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8782:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8799:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8802:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8792:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8792:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8792:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8896:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8899:4:18",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8889:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8889:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8889:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8920:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8923:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "8913:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8913:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8913:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "8754:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8983:238:18",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "8993:58:18",
					"value": {
					  "arguments": [
						{
						  "name": "memPtr",
						  "nodeType": "YulIdentifier",
						  "src": "9015:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "size",
							  "nodeType": "YulIdentifier",
							  "src": "9045:4:18"
							}
						  ],
						  "functionName": {
							"name": "round_up_to_mul_of_32",
							"nodeType": "YulIdentifier",
							"src": "9023:21:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9023:27:18"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9011:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9011:40:18"
					},
					"variables": [
					  {
						"name": "newFreePtr",
						"nodeType": "YulTypedName",
						"src": "8997:10:18",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "9162:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "9164:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "9164:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "9164:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "newFreePtr",
							  "nodeType": "YulIdentifier",
							  "src": "9105:10:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9117:18:18",
							  "type": "",
							  "value": "0xffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "gt",
							"nodeType": "YulIdentifier",
							"src": "9102:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9102:34:18"
						},
						{
						  "arguments": [
							{
							  "name": "newFreePtr",
							  "nodeType": "YulIdentifier",
							  "src": "9141:10:18"
							},
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "9153:6:18"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "9138:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9138:22:18"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "9099:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9099:62:18"
					},
					"nodeType": "YulIf",
					"src": "9096:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9200:2:18",
						  "type": "",
						  "value": "64"
						},
						{
						  "name": "newFreePtr",
						  "nodeType": "YulIdentifier",
						  "src": "9204:10:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9193:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9193:22:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9193:22:18"
				  }
				]
			  },
			  "name": "finalize_allocation",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "8969:6:18",
				  "type": ""
				},
				{
				  "name": "size",
				  "nodeType": "YulTypedName",
				  "src": "8977:4:18",
				  "type": ""
				}
			  ],
			  "src": "8940:281:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9268:88:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9278:30:18",
					"value": {
					  "arguments": [],
					  "functionName": {
						"name": "allocate_unbounded",
						"nodeType": "YulIdentifier",
						"src": "9288:18:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9288:20:18"
					},
					"variableNames": [
					  {
						"name": "memPtr",
						"nodeType": "YulIdentifier",
						"src": "9278:6:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "memPtr",
						  "nodeType": "YulIdentifier",
						  "src": "9337:6:18"
						},
						{
						  "name": "size",
						  "nodeType": "YulIdentifier",
						  "src": "9345:4:18"
						}
					  ],
					  "functionName": {
						"name": "finalize_allocation",
						"nodeType": "YulIdentifier",
						"src": "9317:19:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9317:33:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9317:33:18"
				  }
				]
			  },
			  "name": "allocate_memory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "size",
				  "nodeType": "YulTypedName",
				  "src": "9252:4:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "9261:6:18",
				  "type": ""
				}
			  ],
			  "src": "9227:129:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9428:241:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "9533:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "9535:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "9535:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "9535:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "9505:6:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9513:18:18",
						  "type": "",
						  "value": "0xffffffffffffffff"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "9502:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9502:30:18"
					},
					"nodeType": "YulIf",
					"src": "9499:56:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9565:37:18",
					"value": {
					  "arguments": [
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "9595:6:18"
						}
					  ],
					  "functionName": {
						"name": "round_up_to_mul_of_32",
						"nodeType": "YulIdentifier",
						"src": "9573:21:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9573:29:18"
					},
					"variableNames": [
					  {
						"name": "size",
						"nodeType": "YulIdentifier",
						"src": "9565:4:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9639:23:18",
					"value": {
					  "arguments": [
						{
						  "name": "size",
						  "nodeType": "YulIdentifier",
						  "src": "9651:4:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9657:4:18",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9647:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9647:15:18"
					},
					"variableNames": [
					  {
						"name": "size",
						"nodeType": "YulIdentifier",
						"src": "9639:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_allocation_size_t_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "9412:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "size",
				  "nodeType": "YulTypedName",
				  "src": "9423:4:18",
				  "type": ""
				}
			  ],
			  "src": "9362:307:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9726:103:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "dst",
						  "nodeType": "YulIdentifier",
						  "src": "9749:3:18"
						},
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "9754:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "9759:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldatacopy",
						"nodeType": "YulIdentifier",
						"src": "9736:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9736:30:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9736:30:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dst",
							  "nodeType": "YulIdentifier",
							  "src": "9807:3:18"
							},
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "9812:6:18"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9803:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9803:16:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9821:1:18",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9796:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9796:27:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9796:27:18"
				  }
				]
			  },
			  "name": "copy_calldata_to_memory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "9708:3:18",
				  "type": ""
				},
				{
				  "name": "dst",
				  "nodeType": "YulTypedName",
				  "src": "9713:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "9718:6:18",
				  "type": ""
				}
			  ],
			  "src": "9675:154:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9918:327:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "9928:74:18",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "9994:6:18"
							}
						  ],
						  "functionName": {
							"name": "array_allocation_size_t_bytes_memory_ptr",
							"nodeType": "YulIdentifier",
							"src": "9953:40:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9953:48:18"
						}
					  ],
					  "functionName": {
						"name": "allocate_memory",
						"nodeType": "YulIdentifier",
						"src": "9937:15:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9937:65:18"
					},
					"variableNames": [
					  {
						"name": "array",
						"nodeType": "YulIdentifier",
						"src": "9928:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "array",
						  "nodeType": "YulIdentifier",
						  "src": "10018:5:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "10025:6:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10011:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10011:21:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10011:21:18"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "10041:27:18",
					"value": {
					  "arguments": [
						{
						  "name": "array",
						  "nodeType": "YulIdentifier",
						  "src": "10056:5:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10063:4:18",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10052:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10052:16:18"
					},
					"variables": [
					  {
						"name": "dst",
						"nodeType": "YulTypedName",
						"src": "10045:3:18",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10106:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
							  "nodeType": "YulIdentifier",
							  "src": "10108:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "10108:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10108:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "src",
							  "nodeType": "YulIdentifier",
							  "src": "10087:3:18"
							},
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "10092:6:18"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10083:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10083:16:18"
						},
						{
						  "name": "end",
						  "nodeType": "YulIdentifier",
						  "src": "10101:3:18"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "10080:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10080:25:18"
					},
					"nodeType": "YulIf",
					"src": "10077:112:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "10222:3:18"
						},
						{
						  "name": "dst",
						  "nodeType": "YulIdentifier",
						  "src": "10227:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "10232:6:18"
						}
					  ],
					  "functionName": {
						"name": "copy_calldata_to_memory",
						"nodeType": "YulIdentifier",
						"src": "10198:23:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10198:41:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10198:41:18"
				  }
				]
			  },
			  "name": "abi_decode_available_length_t_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "9891:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "9896:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "9904:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "9912:5:18",
				  "type": ""
				}
			  ],
			  "src": "9835:410:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10325:277:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10374:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
							  "nodeType": "YulIdentifier",
							  "src": "10376:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "10376:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10376:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "10353:6:18"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "10361:4:18",
								  "type": "",
								  "value": "0x1f"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "10349:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10349:17:18"
							},
							{
							  "name": "end",
							  "nodeType": "YulIdentifier",
							  "src": "10368:3:18"
							}
						  ],
						  "functionName": {
							"name": "slt",
							"nodeType": "YulIdentifier",
							"src": "10345:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10345:27:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "10338:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10338:35:18"
					},
					"nodeType": "YulIf",
					"src": "10335:122:18"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "10466:34:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "10493:6:18"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "10480:12:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10480:20:18"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "10470:6:18",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10509:87:18",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "offset",
							  "nodeType": "YulIdentifier",
							  "src": "10569:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10577:4:18",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10565:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10565:17:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "10584:6:18"
						},
						{
						  "name": "end",
						  "nodeType": "YulIdentifier",
						  "src": "10592:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_decode_available_length_t_bytes_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "10518:46:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10518:78:18"
					},
					"variableNames": [
					  {
						"name": "array",
						"nodeType": "YulIdentifier",
						"src": "10509:5:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_t_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "10303:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "10311:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "10319:5:18",
				  "type": ""
				}
			  ],
			  "src": "10264:338:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10734:817:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "10781:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "10783:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "10783:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "10783:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "10755:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10764:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "10751:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10751:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10776:3:18",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "10747:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10747:33:18"
					},
					"nodeType": "YulIf",
					"src": "10744:120:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "10874:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "10889:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10903:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "10893:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "10918:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "10953:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "10964:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "10949:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "10949:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "10973:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "10928:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10928:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "10918:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "11001:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "11016:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11030:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "11020:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "11046:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11081:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "11092:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11077:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11077:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "11101:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "11056:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11056:53:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "11046:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "11129:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "11144:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11158:2:18",
						  "type": "",
						  "value": "64"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "11148:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "11174:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11209:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "11220:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11205:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11205:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "11229:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_uint256",
							"nodeType": "YulIdentifier",
							"src": "11184:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11184:53:18"
						},
						"variableNames": [
						  {
							"name": "value2",
							"nodeType": "YulIdentifier",
							"src": "11174:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "11257:287:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "11272:46:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11303:9:18"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "11314:2:18",
								  "type": "",
								  "value": "96"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11299:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11299:18:18"
							}
						  ],
						  "functionName": {
							"name": "calldataload",
							"nodeType": "YulIdentifier",
							"src": "11286:12:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11286:32:18"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "11276:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "11365:83:18",
						  "statements": [
							{
							  "expression": {
								"arguments": [],
								"functionName": {
								  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
								  "nodeType": "YulIdentifier",
								  "src": "11367:77:18"
								},
								"nodeType": "YulFunctionCall",
								"src": "11367:79:18"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "11367:79:18"
							}
						  ]
						},
						"condition": {
						  "arguments": [
							{
							  "name": "offset",
							  "nodeType": "YulIdentifier",
							  "src": "11337:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11345:18:18",
							  "type": "",
							  "value": "0xffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "gt",
							"nodeType": "YulIdentifier",
							"src": "11334:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11334:30:18"
						},
						"nodeType": "YulIf",
						"src": "11331:117:18"
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "11462:72:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11506:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "11517:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11502:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11502:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "11526:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bytes_memory_ptr",
							"nodeType": "YulIdentifier",
							"src": "11472:29:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11472:62:18"
						},
						"variableNames": [
						  {
							"name": "value3",
							"nodeType": "YulIdentifier",
							"src": "11462:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10680:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "10691:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "10703:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "10711:6:18",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "10719:6:18",
				  "type": ""
				},
				{
				  "name": "value3",
				  "nodeType": "YulTypedName",
				  "src": "10727:6:18",
				  "type": ""
				}
			  ],
			  "src": "10608:943:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11640:391:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "11686:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "11688:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "11688:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "11688:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "11661:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11670:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "11657:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11657:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11682:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "11653:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11653:32:18"
					},
					"nodeType": "YulIf",
					"src": "11650:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "11779:117:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "11794:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11808:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "11798:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "11823:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11858:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "11869:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11854:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11854:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "11878:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "11833:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11833:53:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "11823:6:18"
						  }
						]
					  }
					]
				  },
				  {
					"nodeType": "YulBlock",
					"src": "11906:118:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "11921:16:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11935:2:18",
						  "type": "",
						  "value": "32"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "11925:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "11951:63:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "11986:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "11997:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "11982:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "11982:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "12006:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_address",
							"nodeType": "YulIdentifier",
							"src": "11961:20:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11961:53:18"
						},
						"variableNames": [
						  {
							"name": "value1",
							"nodeType": "YulIdentifier",
							"src": "11951:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11602:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "11613:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "11625:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "11633:6:18",
				  "type": ""
				}
			  ],
			  "src": "11557:474:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12065:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12082:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12085:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12075:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12075:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12075:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12179:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12182:4:18",
						  "type": "",
						  "value": "0x22"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12172:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12172:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12172:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12203:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12206:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "12196:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12196:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12196:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x22",
			  "nodeType": "YulFunctionDefinition",
			  "src": "12037:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12274:269:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12284:22:18",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "12298:4:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12304:1:18",
						  "type": "",
						  "value": "2"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "12294:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12294:12:18"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "12284:6:18"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "12315:38:18",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "12345:4:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12351:1:18",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "12341:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12341:12:18"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "12319:18:18",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12392:51:18",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "12406:27:18",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "12420:6:18"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "12428:4:18",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "12416:3:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "12416:17:18"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "12406:6:18"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "12372:18:18"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "12365:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12365:26:18"
					},
					"nodeType": "YulIf",
					"src": "12362:81:18"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12495:42:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x22",
							  "nodeType": "YulIdentifier",
							  "src": "12509:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "12509:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "12509:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "12459:18:18"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "12482:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12490:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "12479:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12479:14:18"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "12456:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12456:38:18"
					},
					"nodeType": "YulIf",
					"src": "12453:84:18"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "12258:4:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "12267:6:18",
				  "type": ""
				}
			  ],
			  "src": "12223:320:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12655:114:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "12677:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12685:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12673:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12673:14:18"
						},
						{
						  "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12689:34:18",
						  "type": "",
						  "value": "ERC721: approval to current owne"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12666:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12666:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12666:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "12745:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12753:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12741:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12741:15:18"
						},
						{
						  "hexValue": "72",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12758:3:18",
						  "type": "",
						  "value": "r"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12734:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12734:28:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12734:28:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "12647:6:18",
				  "type": ""
				}
			  ],
			  "src": "12549:220:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12921:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12931:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "12997:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13002:2:18",
						  "type": "",
						  "value": "33"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "12938:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12938:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "12931:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13103:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
						"nodeType": "YulIdentifier",
						"src": "13014:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13014:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13014:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13116:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13127:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13132:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13123:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13123:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "13116:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "12909:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "12917:3:18",
				  "type": ""
				}
			  ],
			  "src": "12775:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13318:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13328:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "13340:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13351:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13336:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13336:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13328:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13375:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13386:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13371:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13371:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "13394:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "13400:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "13390:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13390:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13364:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13364:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13364:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13420:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "13554:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13428:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13428:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "13420:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "13298:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "13313:4:18",
				  "type": ""
				}
			  ],
			  "src": "13147:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13678:142:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "13700:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13708:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13696:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13696:14:18"
						},
						{
						  "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "13712:34:18",
						  "type": "",
						  "value": "ERC721: approve caller is not to"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13689:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13689:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13689:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "13768:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13776:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13764:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13764:15:18"
						},
						{
						  "hexValue": "6b656e206f776e6572206f7220617070726f76656420666f7220616c6c",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "13781:31:18",
						  "type": "",
						  "value": "ken owner or approved for all"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13757:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13757:56:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13757:56:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "13670:6:18",
				  "type": ""
				}
			  ],
			  "src": "13572:248:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13972:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "13982:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "14048:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14053:2:18",
						  "type": "",
						  "value": "61"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "13989:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13989:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "13982:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "14154:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
						"nodeType": "YulIdentifier",
						"src": "14065:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14065:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14065:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14167:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "14178:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14183:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "14174:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14174:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "14167:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "13960:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "13968:3:18",
				  "type": ""
				}
			  ],
			  "src": "13826:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14369:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14379:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "14391:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "14402:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "14387:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14387:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "14379:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "14426:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "14437:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "14422:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "14422:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "14445:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "14451:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "14441:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "14441:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14415:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14415:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14415:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "14471:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "14605:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "14479:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14479:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "14471:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "14349:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "14364:4:18",
				  "type": ""
				}
			  ],
			  "src": "14198:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14729:63:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "14751:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "14759:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "14747:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "14747:14:18"
						},
						{
						  "hexValue": "496e76616c696420746f6b656e20696e646578",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "14763:21:18",
						  "type": "",
						  "value": "Invalid token index"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "14740:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14740:45:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "14740:45:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "14721:6:18",
				  "type": ""
				}
			  ],
			  "src": "14623:169:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "14944:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "14954:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "15020:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15025:2:18",
						  "type": "",
						  "value": "19"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "14961:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "14961:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "14954:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "15126:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
						"nodeType": "YulIdentifier",
						"src": "15037:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15037:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15037:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15139:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "15150:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15155:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "15146:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15146:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "15139:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "14932:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "14940:3:18",
				  "type": ""
				}
			  ],
			  "src": "14798:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15341:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "15351:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "15363:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "15374:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "15359:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15359:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "15351:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "15398:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15409:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15394:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15394:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "15417:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "15423:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "15413:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15413:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15387:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15387:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15387:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "15443:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "15577:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "15451:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15451:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "15443:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "15321:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "15336:4:18",
				  "type": ""
				}
			  ],
			  "src": "15170:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15701:126:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15723:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15731:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15719:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15719:14:18"
						},
						{
						  "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15735:34:18",
						  "type": "",
						  "value": "ERC721: caller is not token owne"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15712:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15712:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15712:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "15791:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "15799:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "15787:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "15787:15:18"
						},
						{
						  "hexValue": "72206f7220617070726f766564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "15804:15:18",
						  "type": "",
						  "value": "r or approved"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "15780:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15780:40:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "15780:40:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "15693:6:18",
				  "type": ""
				}
			  ],
			  "src": "15595:232:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "15979:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "15989:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16055:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16060:2:18",
						  "type": "",
						  "value": "45"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "15996:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "15996:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "15989:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16161:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
						"nodeType": "YulIdentifier",
						"src": "16072:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16072:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16072:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16174:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "16185:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16190:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16181:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16181:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "16174:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "15967:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "15975:3:18",
				  "type": ""
				}
			  ],
			  "src": "15833:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16376:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "16386:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "16398:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "16409:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "16394:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16394:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "16386:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "16433:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16444:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16429:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16429:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "16452:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "16458:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "16448:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16448:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16422:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16422:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16422:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "16478:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "16612:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "16486:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16486:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "16478:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "16356:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "16371:4:18",
				  "type": ""
				}
			  ],
			  "src": "16205:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "16736:124:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "16758:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16766:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16754:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16754:14:18"
						},
						{
						  "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16770:34:18",
						  "type": "",
						  "value": "ERC721Enumerable: owner index ou"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16747:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16747:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16747:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "16826:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "16834:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "16822:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "16822:15:18"
						},
						{
						  "hexValue": "74206f6620626f756e6473",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "16839:13:18",
						  "type": "",
						  "value": "t of bounds"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "16815:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "16815:38:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "16815:38:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "16728:6:18",
				  "type": ""
				}
			  ],
			  "src": "16630:230:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17012:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17022:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17088:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17093:2:18",
						  "type": "",
						  "value": "43"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17029:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17029:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "17022:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17194:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
						"nodeType": "YulIdentifier",
						"src": "17105:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17105:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17105:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17207:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "17218:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17223:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17214:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17214:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "17207:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "17000:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "17008:3:18",
				  "type": ""
				}
			  ],
			  "src": "16866:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17409:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "17419:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "17431:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "17442:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "17427:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17427:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17419:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17466:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17477:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17462:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17462:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "17485:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "17491:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "17481:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17481:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17455:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17455:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17455:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "17511:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "17645:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "17519:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17519:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "17511:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "17389:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "17404:4:18",
				  "type": ""
				}
			  ],
			  "src": "17238:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "17769:128:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "17791:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17799:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17787:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17787:14:18"
						},
						{
						  "hexValue": "416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "17803:34:18",
						  "type": "",
						  "value": "AccessControl: can only renounce"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17780:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17780:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17780:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "17859:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "17867:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "17855:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "17855:15:18"
						},
						{
						  "hexValue": "20726f6c657320666f722073656c66",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "17872:17:18",
						  "type": "",
						  "value": " roles for self"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "17848:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "17848:42:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "17848:42:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "17761:6:18",
				  "type": ""
				}
			  ],
			  "src": "17663:234:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18049:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18059:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18125:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18130:2:18",
						  "type": "",
						  "value": "47"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18066:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18066:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "18059:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18231:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b",
						"nodeType": "YulIdentifier",
						"src": "18142:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18142:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18142:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18244:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "18255:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18260:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18251:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18251:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "18244:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "18037:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "18045:3:18",
				  "type": ""
				}
			  ],
			  "src": "17903:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18446:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "18456:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "18468:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "18479:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "18464:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18464:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18456:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18503:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18514:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18499:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18499:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "18522:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "18528:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "18518:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18518:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18492:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18492:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18492:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "18548:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "18682:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "18556:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18556:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "18548:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "18426:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "18441:4:18",
				  "type": ""
				}
			  ],
			  "src": "18275:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "18806:125:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "18828:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18836:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18824:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18824:14:18"
						},
						{
						  "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "18840:34:18",
						  "type": "",
						  "value": "ERC721Enumerable: global index o"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18817:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18817:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18817:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "18896:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "18904:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "18892:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "18892:15:18"
						},
						{
						  "hexValue": "7574206f6620626f756e6473",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "18909:14:18",
						  "type": "",
						  "value": "ut of bounds"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "18885:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "18885:39:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "18885:39:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "18798:6:18",
				  "type": ""
				}
			  ],
			  "src": "18700:231:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19083:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19093:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19159:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19164:2:18",
						  "type": "",
						  "value": "44"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "19100:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19100:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "19093:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19265:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
						"nodeType": "YulIdentifier",
						"src": "19176:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19176:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19176:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "19278:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "19289:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19294:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19285:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19285:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "19278:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "19071:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "19079:3:18",
				  "type": ""
				}
			  ],
			  "src": "18937:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19480:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "19490:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "19502:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19513:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "19498:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19498:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "19490:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19537:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "19548:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "19533:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19533:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "19556:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "19562:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "19552:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "19552:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19526:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19526:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19526:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "19582:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "19716:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "19590:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19590:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "19582:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "19460:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "19475:4:18",
				  "type": ""
				}
			  ],
			  "src": "19309:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "19762:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19779:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19782:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19772:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19772:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19772:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19876:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19879:4:18",
						  "type": "",
						  "value": "0x32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "19869:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19869:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19869:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19900:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "19903:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "19893:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "19893:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "19893:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x32",
			  "nodeType": "YulFunctionDefinition",
			  "src": "19734:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20026:68:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "20048:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20056:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20044:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20044:14:18"
						},
						{
						  "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "20060:26:18",
						  "type": "",
						  "value": "ERC721: invalid token ID"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20037:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20037:50:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20037:50:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "20018:6:18",
				  "type": ""
				}
			  ],
			  "src": "19920:174:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20246:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20256:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20322:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20327:2:18",
						  "type": "",
						  "value": "24"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20263:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20263:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "20256:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20428:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
						"nodeType": "YulIdentifier",
						"src": "20339:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20339:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20339:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20441:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "20452:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20457:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20448:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20448:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "20441:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "20234:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "20242:3:18",
				  "type": ""
				}
			  ],
			  "src": "20100:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "20643:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "20653:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "20665:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "20676:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "20661:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20661:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20653:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20700:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "20711:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "20696:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20696:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "20719:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "20725:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "20715:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "20715:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "20689:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20689:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "20689:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "20745:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "20879:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "20753:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "20753:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "20745:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "20623:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "20638:4:18",
				  "type": ""
				}
			  ],
			  "src": "20472:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21003:122:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "21025:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21033:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21021:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21021:14:18"
						},
						{
						  "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "21037:34:18",
						  "type": "",
						  "value": "ERC721: address zero is not a va"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21014:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21014:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21014:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "21093:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21101:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21089:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21089:15:18"
						},
						{
						  "hexValue": "6c6964206f776e6572",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "21106:11:18",
						  "type": "",
						  "value": "lid owner"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21082:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21082:36:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21082:36:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "20995:6:18",
				  "type": ""
				}
			  ],
			  "src": "20897:228:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21277:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21287:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21353:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21358:2:18",
						  "type": "",
						  "value": "41"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "21294:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21294:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "21287:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21459:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
						"nodeType": "YulIdentifier",
						"src": "21370:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21370:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21370:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "21472:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "21483:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21488:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21479:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21479:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "21472:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "21265:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "21273:3:18",
				  "type": ""
				}
			  ],
			  "src": "21131:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "21674:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "21684:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "21696:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "21707:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "21692:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21692:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "21684:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21731:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "21742:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "21727:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21727:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "21750:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "21756:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "21746:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "21746:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "21720:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21720:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "21720:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "21776:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "21910:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "21784:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "21784:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "21776:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "21654:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "21669:4:18",
				  "type": ""
				}
			  ],
			  "src": "21503:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22042:34:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22052:18:18",
					"value": {
					  "name": "pos",
					  "nodeType": "YulIdentifier",
					  "src": "22067:3:18"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "22052:11:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "22014:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "22019:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "22030:11:18",
				  "type": ""
				}
			  ],
			  "src": "21928:148:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22192:267:18",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "22202:53:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "22249:5:18"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_string_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "22216:32:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22216:39:18"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "22206:6:18",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22264:96:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22348:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "22353:6:18"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22271:76:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22271:89:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "22264:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "22395:5:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "22402:4:18",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "22391:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "22391:16:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22409:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "22414:6:18"
						}
					  ],
					  "functionName": {
						"name": "copy_memory_to_memory",
						"nodeType": "YulIdentifier",
						"src": "22369:21:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22369:52:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "22369:52:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22430:23:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22441:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "22446:6:18"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "22437:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22437:16:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "22430:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "22173:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "22180:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "22188:3:18",
				  "type": ""
				}
			  ],
			  "src": "22082:377:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "22649:251:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "22660:102:18",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "22749:6:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22758:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22667:81:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22667:95:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "22660:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22772:102:18",
					"value": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "22861:6:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "22870:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "22779:81:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "22779:95:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "22772:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "22884:10:18",
					"value": {
					  "name": "pos",
					  "nodeType": "YulIdentifier",
					  "src": "22891:3:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "22884:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "22620:3:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "22626:6:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "22634:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "22645:3:18",
				  "type": ""
				}
			  ],
			  "src": "22465:435:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23012:118:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23034:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23042:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23030:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23030:14:18"
						},
						{
						  "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23046:34:18",
						  "type": "",
						  "value": "ERC721: transfer from incorrect "
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23023:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23023:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23023:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "23102:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23110:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23098:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23098:15:18"
						},
						{
						  "hexValue": "6f776e6572",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "23115:7:18",
						  "type": "",
						  "value": "owner"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23091:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23091:32:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23091:32:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "23004:6:18",
				  "type": ""
				}
			  ],
			  "src": "22906:224:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23282:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23292:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23358:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23363:2:18",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "23299:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23299:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "23292:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23464:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
						"nodeType": "YulIdentifier",
						"src": "23375:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23375:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23375:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "23477:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "23488:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23493:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23484:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23484:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "23477:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "23270:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "23278:3:18",
				  "type": ""
				}
			  ],
			  "src": "23136:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "23679:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "23689:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "23701:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "23712:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "23697:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23697:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "23689:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "23736:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "23747:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "23732:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23732:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "23755:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "23761:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "23751:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "23751:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "23725:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23725:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "23725:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "23781:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "23915:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "23789:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "23789:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "23781:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "23659:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "23674:4:18",
				  "type": ""
				}
			  ],
			  "src": "23508:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24039:117:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24061:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24069:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24057:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24057:14:18"
						},
						{
						  "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24073:34:18",
						  "type": "",
						  "value": "ERC721: transfer to the zero add"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24050:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24050:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24050:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "24129:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24137:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24125:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24125:15:18"
						},
						{
						  "hexValue": "72657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "24142:6:18",
						  "type": "",
						  "value": "ress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24118:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24118:31:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24118:31:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "24031:6:18",
				  "type": ""
				}
			  ],
			  "src": "23933:223:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24308:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24318:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24384:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24389:2:18",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24325:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24325:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "24318:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24490:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
						"nodeType": "YulIdentifier",
						"src": "24401:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24401:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24401:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24503:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "24514:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24519:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "24510:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24510:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "24503:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "24296:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "24304:3:18",
				  "type": ""
				}
			  ],
			  "src": "24162:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "24705:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "24715:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "24727:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "24738:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "24723:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24723:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24715:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "24762:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "24773:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "24758:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24758:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "24781:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "24787:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "24777:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "24777:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "24751:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24751:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "24751:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "24807:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "24941:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "24815:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "24815:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "24807:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "24685:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "24700:4:18",
				  "type": ""
				}
			  ],
			  "src": "24534:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25065:69:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "25087:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25095:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25083:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25083:14:18"
						},
						{
						  "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "25099:27:18",
						  "type": "",
						  "value": "ERC721: approve to caller"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25076:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25076:51:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25076:51:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "25057:6:18",
				  "type": ""
				}
			  ],
			  "src": "24959:175:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25286:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "25296:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25362:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25367:2:18",
						  "type": "",
						  "value": "25"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25303:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25303:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "25296:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25468:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
						"nodeType": "YulIdentifier",
						"src": "25379:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25379:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25379:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25481:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "25492:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25497:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25488:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25488:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "25481:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "25274:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "25282:3:18",
				  "type": ""
				}
			  ],
			  "src": "25140:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "25683:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "25693:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "25705:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "25716:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "25701:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25701:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "25693:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "25740:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "25751:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "25736:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25736:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "25759:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "25765:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "25755:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "25755:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "25729:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25729:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "25729:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "25785:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "25919:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "25793:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "25793:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "25785:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "25663:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "25678:4:18",
				  "type": ""
				}
			  ],
			  "src": "25512:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26043:131:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26065:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26073:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26061:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26061:14:18"
						},
						{
						  "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26077:34:18",
						  "type": "",
						  "value": "ERC721: transfer to non ERC721Re"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26054:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26054:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26054:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "26133:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26141:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26129:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26129:15:18"
						},
						{
						  "hexValue": "63656976657220696d706c656d656e746572",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "26146:20:18",
						  "type": "",
						  "value": "ceiver implementer"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26122:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26122:45:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26122:45:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "26035:6:18",
				  "type": ""
				}
			  ],
			  "src": "25937:237:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26326:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26336:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26402:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26407:2:18",
						  "type": "",
						  "value": "50"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26343:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26343:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "26336:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26508:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
						"nodeType": "YulIdentifier",
						"src": "26419:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26419:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26419:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26521:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "26532:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26537:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26528:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26528:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "26521:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "26314:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "26322:3:18",
				  "type": ""
				}
			  ],
			  "src": "26180:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "26723:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "26733:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "26745:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "26756:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "26741:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26741:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26733:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26780:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "26791:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "26776:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26776:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "26799:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "26805:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "26795:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "26795:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "26769:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26769:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "26769:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "26825:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "26959:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "26833:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "26833:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "26825:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "26703:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "26718:4:18",
				  "type": ""
				}
			  ],
			  "src": "26552:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27005:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27022:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27025:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27015:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27015:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27015:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27119:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27122:4:18",
						  "type": "",
						  "value": "0x12"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27112:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27112:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27112:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27143:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27146:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "27136:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27136:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27136:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x12",
			  "nodeType": "YulFunctionDefinition",
			  "src": "26977:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27269:67:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27291:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27299:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27287:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27287:14:18"
						},
						{
						  "hexValue": "416363657373436f6e74726f6c3a206163636f756e7420",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27303:25:18",
						  "type": "",
						  "value": "AccessControl: account "
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27280:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27280:49:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27280:49:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "27261:6:18",
				  "type": ""
				}
			  ],
			  "src": "27163:173:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27506:238:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "27516:92:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27600:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27605:2:18",
						  "type": "",
						  "value": "23"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "27523:76:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27523:85:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "27516:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27706:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874",
						"nodeType": "YulIdentifier",
						"src": "27617:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27617:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27617:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "27719:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "27730:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "27735:2:18",
						  "type": "",
						  "value": "23"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "27726:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27726:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "27719:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "27494:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "27502:3:18",
				  "type": ""
				}
			  ],
			  "src": "27342:402:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "27856:61:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "27878:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "27886:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "27874:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "27874:14:18"
						},
						{
						  "hexValue": "206973206d697373696e6720726f6c6520",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "27890:19:18",
						  "type": "",
						  "value": " is missing role "
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "27867:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "27867:43:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "27867:43:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "27848:6:18",
				  "type": ""
				}
			  ],
			  "src": "27750:167:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28087:238:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28097:92:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28181:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28186:2:18",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28104:76:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28104:85:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "28097:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28287:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69",
						"nodeType": "YulIdentifier",
						"src": "28198:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28198:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "28198:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28300:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28311:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "28316:2:18",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "28307:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28307:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "28300:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "28075:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "28083:3:18",
				  "type": ""
				}
			  ],
			  "src": "27923:402:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "28717:581:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "28728:155:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28879:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28735:142:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28735:148:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "28728:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "28893:102:18",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "28982:6:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "28991:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "28900:81:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "28900:95:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "28893:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29005:155:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29156:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29012:142:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29012:148:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "29005:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29170:102:18",
					"value": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "29259:6:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29268:3:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29177:81:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29177:95:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "29170:3:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29282:10:18",
					"value": {
					  "name": "pos",
					  "nodeType": "YulIdentifier",
					  "src": "29289:3:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "29282:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_packed_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_t_string_memory_ptr_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "28688:3:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "28694:6:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "28702:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "28713:3:18",
				  "type": ""
				}
			  ],
			  "src": "28331:967:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29410:64:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "29432:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "29440:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "29428:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "29428:14:18"
						},
						{
						  "hexValue": "5061757361626c653a206e6f7420706175736564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "29444:22:18",
						  "type": "",
						  "value": "Pausable: not paused"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "29421:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29421:46:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29421:46:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "29402:6:18",
				  "type": ""
				}
			  ],
			  "src": "29304:170:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "29626:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "29636:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29702:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29707:2:18",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "29643:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29643:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "29636:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29808:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a",
						"nodeType": "YulIdentifier",
						"src": "29719:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29719:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "29719:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "29821:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "29832:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "29837:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "29828:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "29828:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "29821:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "29614:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "29622:3:18",
				  "type": ""
				}
			  ],
			  "src": "29480:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30023:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "30033:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "30045:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30056:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "30041:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30041:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "30033:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "30080:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "30091:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "30076:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "30076:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "30099:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "30105:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "30095:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "30095:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "30069:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30069:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30069:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30125:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "30259:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "30133:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30133:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "30125:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "30003:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "30018:4:18",
				  "type": ""
				}
			  ],
			  "src": "29852:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30383:60:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "30405:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "30413:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "30401:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "30401:14:18"
						},
						{
						  "hexValue": "5061757361626c653a20706175736564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "30417:18:18",
						  "type": "",
						  "value": "Pausable: paused"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "30394:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30394:42:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30394:42:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "30375:6:18",
				  "type": ""
				}
			  ],
			  "src": "30277:166:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30595:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "30605:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "30671:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30676:2:18",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "30612:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30612:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "30605:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "30777:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a",
						"nodeType": "YulIdentifier",
						"src": "30688:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30688:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "30688:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "30790:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "30801:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "30806:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "30797:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "30797:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "30790:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "30583:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "30591:3:18",
				  "type": ""
				}
			  ],
			  "src": "30449:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "30992:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31002:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "31014:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "31025:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "31010:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31010:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "31002:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "31049:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "31060:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "31045:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31045:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "31068:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "31074:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "31064:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31064:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "31038:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31038:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31038:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "31094:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "31228:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "31102:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31102:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "31094:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "30972:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "30987:4:18",
				  "type": ""
				}
			  ],
			  "src": "30821:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31304:40:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "31315:22:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31331:5:18"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "31325:5:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31325:12:18"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "31315:6:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_length_t_bytes_memory_ptr",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31287:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "31297:6:18",
				  "type": ""
				}
			  ],
			  "src": "31246:98:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31445:73:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31462:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "31467:6:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "31455:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31455:19:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31455:19:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "31483:29:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31502:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "31507:4:18",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "31498:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31498:14:18"
					},
					"variableNames": [
					  {
						"name": "updated_pos",
						"nodeType": "YulIdentifier",
						"src": "31483:11:18"
					  }
					]
				  }
				]
			  },
			  "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "31417:3:18",
				  "type": ""
				},
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "31422:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "updated_pos",
				  "nodeType": "YulTypedName",
				  "src": "31433:11:18",
				  "type": ""
				}
			  ],
			  "src": "31350:168:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "31614:270:18",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "31624:52:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "31670:5:18"
						}
					  ],
					  "functionName": {
						"name": "array_length_t_bytes_memory_ptr",
						"nodeType": "YulIdentifier",
						"src": "31638:31:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31638:38:18"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "31628:6:18",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "31685:77:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31750:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "31755:6:18"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "31692:57:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31692:70:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "31685:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "31797:5:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "31804:4:18",
							  "type": "",
							  "value": "0x20"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "31793:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31793:16:18"
						},
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31811:3:18"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "31816:6:18"
						}
					  ],
					  "functionName": {
						"name": "copy_memory_to_memory",
						"nodeType": "YulIdentifier",
						"src": "31771:21:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31771:52:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "31771:52:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "31832:46:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "31843:3:18"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "31870:6:18"
							}
						  ],
						  "functionName": {
							"name": "round_up_to_mul_of_32",
							"nodeType": "YulIdentifier",
							"src": "31848:21:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "31848:29:18"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "31839:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "31839:39:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "31832:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "31595:5:18",
				  "type": ""
				},
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "31602:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "31610:3:18",
				  "type": ""
				}
			  ],
			  "src": "31524:360:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "32090:440:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "32100:27:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "32112:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32123:3:18",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "32108:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32108:19:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "32100:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "32181:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32194:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "32205:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "32190:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32190:17:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32137:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32137:71:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32137:71:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value1",
						  "nodeType": "YulIdentifier",
						  "src": "32262:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32275:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "32286:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "32271:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32271:18:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_address_to_t_address_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32218:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32218:72:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32218:72:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value2",
						  "nodeType": "YulIdentifier",
						  "src": "32344:6:18"
						},
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32357:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "32368:2:18",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "32353:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32353:18:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_uint256_to_t_uint256_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32300:43:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32300:72:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32300:72:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32393:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "32404:2:18",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "32389:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32389:18:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "32413:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32419:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "32409:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32409:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "32382:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32382:48:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32382:48:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "32439:84:18",
					"value": {
					  "arguments": [
						{
						  "name": "value3",
						  "nodeType": "YulIdentifier",
						  "src": "32509:6:18"
						},
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "32518:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "32447:61:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32447:76:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "32439:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "32038:9:18",
				  "type": ""
				},
				{
				  "name": "value3",
				  "nodeType": "YulTypedName",
				  "src": "32050:6:18",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "32058:6:18",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "32066:6:18",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "32074:6:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "32085:4:18",
				  "type": ""
				}
			  ],
			  "src": "31890:640:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "32598:79:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "32608:22:18",
					"value": {
					  "arguments": [
						{
						  "name": "offset",
						  "nodeType": "YulIdentifier",
						  "src": "32623:6:18"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "32617:5:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32617:13:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "32608:5:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "32665:5:18"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_t_bytes4",
						"nodeType": "YulIdentifier",
						"src": "32639:25:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32639:32:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "32639:32:18"
				  }
				]
			  },
			  "name": "abi_decode_t_bytes4_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "offset",
				  "nodeType": "YulTypedName",
				  "src": "32576:6:18",
				  "type": ""
				},
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "32584:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "32592:5:18",
				  "type": ""
				}
			  ],
			  "src": "32536:141:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "32759:273:18",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "32805:83:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
							  "nodeType": "YulIdentifier",
							  "src": "32807:77:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "32807:79:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "32807:79:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "32780:7:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "32789:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "32776:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32776:23:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32801:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "32772:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "32772:32:18"
					},
					"nodeType": "YulIf",
					"src": "32769:119:18"
				  },
				  {
					"nodeType": "YulBlock",
					"src": "32898:127:18",
					"statements": [
					  {
						"nodeType": "YulVariableDeclaration",
						"src": "32913:15:18",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "32927:1:18",
						  "type": "",
						  "value": "0"
						},
						"variables": [
						  {
							"name": "offset",
							"nodeType": "YulTypedName",
							"src": "32917:6:18",
							"type": ""
						  }
						]
					  },
					  {
						"nodeType": "YulAssignment",
						"src": "32942:73:18",
						"value": {
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "32987:9:18"
								},
								{
								  "name": "offset",
								  "nodeType": "YulIdentifier",
								  "src": "32998:6:18"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "32983:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "32983:22:18"
							},
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "33007:7:18"
							}
						  ],
						  "functionName": {
							"name": "abi_decode_t_bytes4_fromMemory",
							"nodeType": "YulIdentifier",
							"src": "32952:30:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "32952:63:18"
						},
						"variableNames": [
						  {
							"name": "value0",
							"nodeType": "YulIdentifier",
							"src": "32942:6:18"
						  }
						]
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_bytes4_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "32729:9:18",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "32740:7:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "32752:6:18",
				  "type": ""
				}
			  ],
			  "src": "32683:349:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "33144:134:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "33166:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "33174:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "33162:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "33162:14:18"
						},
						{
						  "hexValue": "455243373231456e756d657261626c653a20636f6e7365637574697665207472",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "33178:34:18",
						  "type": "",
						  "value": "ERC721Enumerable: consecutive tr"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "33155:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33155:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "33155:58:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "33234:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "33242:2:18",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "33230:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "33230:15:18"
						},
						{
						  "hexValue": "616e7366657273206e6f7420737570706f72746564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "33247:23:18",
						  "type": "",
						  "value": "ansfers not supported"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "33223:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33223:48:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "33223:48:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "33136:6:18",
				  "type": ""
				}
			  ],
			  "src": "33038:240:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "33430:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "33440:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "33506:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "33511:2:18",
						  "type": "",
						  "value": "53"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "33447:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33447:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "33440:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "33612:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314",
						"nodeType": "YulIdentifier",
						"src": "33523:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33523:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "33523:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "33625:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "33636:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "33641:2:18",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "33632:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33632:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "33625:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "33418:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "33426:3:18",
				  "type": ""
				}
			  ],
			  "src": "33284:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "33827:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "33837:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "33849:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "33860:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "33845:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33845:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "33837:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "33884:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "33895:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "33880:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "33880:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "33903:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "33909:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "33899:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "33899:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "33873:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33873:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "33873:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "33929:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "34063:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "33937:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "33937:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "33929:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "33807:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "33822:4:18",
				  "type": ""
				}
			  ],
			  "src": "33656:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "34109:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34126:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34129:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "34119:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34119:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "34119:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34223:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34226:4:18",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "34216:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34216:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "34216:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34247:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "34250:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "34240:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34240:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "34240:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "34081:180:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "34315:300:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "34325:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "34348:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "34330:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34330:20:18"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "34325:1:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "34359:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "34382:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "34364:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34364:20:18"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "34359:1:18"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "34557:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "34559:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "34559:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "34559:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "34469:1:18"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "34462:6:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "34462:9:18"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "34455:6:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "34455:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "y",
							  "nodeType": "YulIdentifier",
							  "src": "34477:1:18"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "34484:66:18",
								  "type": "",
								  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
								},
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "34552:1:18"
								}
							  ],
							  "functionName": {
								"name": "div",
								"nodeType": "YulIdentifier",
								"src": "34480:3:18"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "34480:74:18"
							}
						  ],
						  "functionName": {
							"name": "gt",
							"nodeType": "YulIdentifier",
							"src": "34474:2:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "34474:81:18"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "34451:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34451:105:18"
					},
					"nodeType": "YulIf",
					"src": "34448:131:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "34589:20:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "34604:1:18"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "34607:1:18"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "34600:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34600:9:18"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "34589:7:18"
					  }
					]
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "34298:1:18",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "34301:1:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "34307:7:18",
				  "type": ""
				}
			  ],
			  "src": "34267:348:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "34665:261:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "34675:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "34698:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "34680:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34680:20:18"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "34675:1:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "34709:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "34732:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "34714:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34714:20:18"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "34709:1:18"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "34872:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "34874:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "34874:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "34874:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "34793:1:18"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "34800:66:18",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
							},
							{
							  "name": "y",
							  "nodeType": "YulIdentifier",
							  "src": "34868:1:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "34796:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "34796:74:18"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "34790:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34790:81:18"
					},
					"nodeType": "YulIf",
					"src": "34787:107:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "34904:16:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "34915:1:18"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "34918:1:18"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "34911:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34911:9:18"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "34904:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "34652:1:18",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "34655:1:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "34661:3:18",
				  "type": ""
				}
			  ],
			  "src": "34621:305:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "34975:128:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "34985:33:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "35012:5:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "34994:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "34994:24:18"
					},
					"variableNames": [
					  {
						"name": "value",
						"nodeType": "YulIdentifier",
						"src": "34985:5:18"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "35046:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "35048:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "35048:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "35048:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "35033:5:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "35040:4:18",
						  "type": "",
						  "value": "0x00"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "35030:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35030:15:18"
					},
					"nodeType": "YulIf",
					"src": "35027:41:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "35077:20:18",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "35088:5:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "35095:1:18",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "35084:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35084:13:18"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "35077:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "decrement_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "34961:5:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "34971:3:18",
				  "type": ""
				}
			  ],
			  "src": "34932:171:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "35215:76:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "35237:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "35245:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "35233:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "35233:14:18"
						},
						{
						  "hexValue": "537472696e67733a20686578206c656e67746820696e73756666696369656e74",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "35249:34:18",
						  "type": "",
						  "value": "Strings: hex length insufficient"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "35226:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35226:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "35226:58:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "35207:6:18",
				  "type": ""
				}
			  ],
			  "src": "35109:182:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "35443:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "35453:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "35519:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "35524:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "35460:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35460:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "35453:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "35625:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2",
						"nodeType": "YulIdentifier",
						"src": "35536:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35536:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "35536:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "35638:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "35649:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "35654:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "35645:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35645:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "35638:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "35431:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "35439:3:18",
				  "type": ""
				}
			  ],
			  "src": "35297:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "35840:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "35850:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "35862:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "35873:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "35858:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35858:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "35850:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "35897:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "35908:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "35893:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "35893:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "35916:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "35922:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "35912:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "35912:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "35886:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35886:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "35886:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "35942:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "36076:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "35950:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "35950:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "35942:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "35820:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "35835:4:18",
				  "type": ""
				}
			  ],
			  "src": "35669:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "36200:76:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "36222:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "36230:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "36218:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "36218:14:18"
						},
						{
						  "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "36234:34:18",
						  "type": "",
						  "value": "ERC721: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "36211:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36211:58:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "36211:58:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "36192:6:18",
				  "type": ""
				}
			  ],
			  "src": "36094:182:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "36428:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "36438:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "36504:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "36509:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "36445:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36445:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "36438:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "36610:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
						"nodeType": "YulIdentifier",
						"src": "36521:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36521:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "36521:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "36623:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "36634:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "36639:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "36630:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36630:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "36623:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "36416:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "36424:3:18",
				  "type": ""
				}
			  ],
			  "src": "36282:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "36825:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "36835:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "36847:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "36858:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "36843:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36843:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "36835:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "36882:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "36893:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "36878:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "36878:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "36901:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "36907:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "36897:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "36897:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "36871:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36871:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "36871:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "36927:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "37061:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "36935:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "36935:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "36927:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "36805:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "36820:4:18",
				  "type": ""
				}
			  ],
			  "src": "36654:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "37185:72:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "memPtr",
							  "nodeType": "YulIdentifier",
							  "src": "37207:6:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "37215:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "37203:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "37203:14:18"
						},
						{
						  "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "37219:30:18",
						  "type": "",
						  "value": "ERC721: token already minted"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "37196:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37196:54:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "37196:54:18"
				  }
				]
			  },
			  "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "memPtr",
				  "nodeType": "YulTypedName",
				  "src": "37177:6:18",
				  "type": ""
				}
			  ],
			  "src": "37079:178:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "37409:220:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "37419:74:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "37485:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "37490:2:18",
						  "type": "",
						  "value": "28"
						}
					  ],
					  "functionName": {
						"name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "37426:58:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37426:67:18"
					},
					"variableNames": [
					  {
						"name": "pos",
						"nodeType": "YulIdentifier",
						"src": "37419:3:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "37591:3:18"
						}
					  ],
					  "functionName": {
						"name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
						"nodeType": "YulIdentifier",
						"src": "37502:88:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37502:93:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "37502:93:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "37604:19:18",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "37615:3:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "37620:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "37611:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37611:12:18"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "37604:3:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "37397:3:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "37405:3:18",
				  "type": ""
				}
			  ],
			  "src": "37263:366:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "37806:248:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "37816:26:18",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "37828:9:18"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "37839:2:18",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "37824:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37824:18:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "37816:4:18"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "37863:9:18"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "37874:1:18",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "37859:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "37859:17:18"
						},
						{
						  "arguments": [
							{
							  "name": "tail",
							  "nodeType": "YulIdentifier",
							  "src": "37882:4:18"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "37888:9:18"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "37878:3:18"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "37878:20:18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "37852:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37852:47:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "37852:47:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "37908:139:18",
					"value": {
					  "arguments": [
						{
						  "name": "tail",
						  "nodeType": "YulIdentifier",
						  "src": "38042:4:18"
						}
					  ],
					  "functionName": {
						"name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
						"nodeType": "YulIdentifier",
						"src": "37916:124:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "37916:131:18"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "37908:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "37786:9:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "37801:4:18",
				  "type": ""
				}
			  ],
			  "src": "37635:419:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "38105:146:18",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "38115:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "38138:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "38120:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38120:20:18"
					},
					"variableNames": [
					  {
						"name": "x",
						"nodeType": "YulIdentifier",
						"src": "38115:1:18"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "38149:25:18",
					"value": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "38172:1:18"
						}
					  ],
					  "functionName": {
						"name": "cleanup_t_uint256",
						"nodeType": "YulIdentifier",
						"src": "38154:17:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38154:20:18"
					},
					"variableNames": [
					  {
						"name": "y",
						"nodeType": "YulIdentifier",
						"src": "38149:1:18"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "38196:22:18",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "38198:16:18"
							},
							"nodeType": "YulFunctionCall",
							"src": "38198:18:18"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "38198:18:18"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "38190:1:18"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "38193:1:18"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "38187:2:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38187:8:18"
					},
					"nodeType": "YulIf",
					"src": "38184:34:18"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "38228:17:18",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "38240:1:18"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "38243:1:18"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "38236:3:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38236:9:18"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "38228:4:18"
					  }
					]
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "38091:1:18",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "38094:1:18",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "38100:4:18",
				  "type": ""
				}
			  ],
			  "src": "38060:191:18"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "38285:152:18",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38302:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38305:77:18",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "38295:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38295:88:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "38295:88:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38399:1:18",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38402:4:18",
						  "type": "",
						  "value": "0x31"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "38392:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38392:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "38392:15:18"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38423:1:18",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "38426:4:18",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "38416:6:18"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "38416:15:18"
					},
					"nodeType": "YulExpressionStatement",
					"src": "38416:15:18"
				  }
				]
			  },
			  "name": "panic_error_0x31",
			  "nodeType": "YulFunctionDefinition",
			  "src": "38257:180:18"
			}
		  ]
		},
		"contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bytes32(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_bytes32(value) {\n        if iszero(eq(value, cleanup_t_bytes32(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes32(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes32(value)\n    }\n\n    function abi_decode_tuple_t_bytes32(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes32(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_bytes32_to_t_bytes32_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bytes32(value))\n    }\n\n    function abi_encode_tuple_t_bytes32__to_t_bytes32__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bytes32_to_t_bytes32_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_bytes32t_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes32(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner or approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 61)\n        store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403(memPtr) {\n\n        mstore(add(memPtr, 0), \"Invalid token index\")\n\n    }\n\n    function abi_encode_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 19)\n        store_literal_in_memory_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r or approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 45)\n        store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: owner index ou\")\n\n        mstore(add(memPtr, 32), \"t of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b(memPtr) {\n\n        mstore(add(memPtr, 0), \"AccessControl: can only renounce\")\n\n        mstore(add(memPtr, 32), \" roles for self\")\n\n    }\n\n    function abi_encode_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 47)\n        store_literal_in_memory_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fb06fa8ff2141e8ed74502f6792273793f25f0e9d3cf15344f3f5a0d4948fd4b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: global index o\")\n\n        mstore(add(memPtr, 32), \"ut of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874(memPtr) {\n\n        mstore(add(memPtr, 0), \"AccessControl: account \")\n\n    }\n\n    function abi_encode_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_to_t_string_memory_ptr_nonPadded_inplace_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, 23)\n        store_literal_in_memory_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874(pos)\n        end := add(pos, 23)\n    }\n\n    function store_literal_in_memory_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69(memPtr) {\n\n        mstore(add(memPtr, 0), \" is missing role \")\n\n    }\n\n    function abi_encode_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_to_t_string_memory_ptr_nonPadded_inplace_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, 17)\n        store_literal_in_memory_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69(pos)\n        end := add(pos, 17)\n    }\n\n    function abi_encode_tuple_packed_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_t_string_memory_ptr_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_stringliteral_da0d07ce4a2849fbfc4cb9d6f939e9bd93016c372ca4a5ff14fe06caf3d67874_to_t_string_memory_ptr_nonPadded_inplace_fromStack( pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_stringliteral_f986ce851518a691bccd44ea42a5a185d1b866ef6cb07984a09b81694d20ab69_to_t_string_memory_ptr_nonPadded_inplace_fromStack( pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a(memPtr) {\n\n        mstore(add(memPtr, 0), \"Pausable: not paused\")\n\n    }\n\n    function abi_encode_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 20)\n        store_literal_in_memory_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0d1d997348c4b502650619e51f7d09f80514d98b6993be5051d07f703984619a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a(memPtr) {\n\n        mstore(add(memPtr, 0), \"Pausable: paused\")\n\n    }\n\n    function abi_encode_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 16)\n        store_literal_in_memory_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_68571e1369f7a6dcdcd736cb0343b35a58ed0f64d245c2ed839c98d412744f8a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: consecutive tr\")\n\n        mstore(add(memPtr, 32), \"ansfers not supported\")\n\n    }\n\n    function abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 53)\n        store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function decrement_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0x00) { panic_error_0x11() }\n        ret := sub(value, 1)\n    }\n\n    function store_literal_in_memory_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2(memPtr) {\n\n        mstore(add(memPtr, 0), \"Strings: hex length insufficient\")\n\n    }\n\n    function abi_encode_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_04fc88320d7c9f639317c75102c103ff0044d3075a5c627e24e76e5bbb2733c2_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function panic_error_0x31() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n\n}\n",
		"id": 18,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "384:2038:17:-:0;;;694:192;;;;;;;;;;1390:113:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;;;;;;;:::i;:::-;;1390:113;;1006:5:3;996:7;;:15;;;;;;;;;;;;;;;;;;747:42:17::1;2072:4:0;758:18:17::0;::::1;778:10;747;;;:42;;:::i;:::-;799:35;549:24;823:10;799;;;:35;;:::i;:::-;844;617:24;868:10;844;;;:35;;:::i;:::-;384:2038:::0;;7461:233:0;7544:22;7552:4;7558:7;7544;;;:22;;:::i;:::-;7539:149;;7614:4;7582:6;:12;7589:4;7582:12;;;;;;;;;;;:20;;:29;7603:7;7582:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;7664:12;:10;;;:12;;:::i;:::-;7637:40;;7655:7;7637:40;;7649:4;7637:40;;;;;;;;;;7539:149;7461:233;;:::o;2895:145::-;2981:4;3004:6;:12;3011:4;3004:12;;;;;;;;;;;:20;;:29;3025:7;3004:29;;;;;;;;;;;;;;;;;;;;;;;;;2997:36;;2895:145;;;;:::o;640:96:11:-;693:7;719:10;712:17;;640:96;:::o;384:2038:17:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:18:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;384:2038:17:-;;;;;;;",
	"deployedSourceMap": "384:2038:17:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1569:220;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2471:98:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3468:406;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1630:111:7;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1795:220:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4612:326:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4378:129:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4803:145;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1306:253:7;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5912:214:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;969:75:17;;;:::i;:::-;;1050:188;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5004:179:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2241:178:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1813:230:7;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1615:84:3;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2190:219:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;892:71:17;;;:::i;:::-;;2895:145:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2633:102:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2027:49:0;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5249:314;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2801:276;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;579:62:17;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5228:147:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;511:62:17;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2025:210:17;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1569:220;1719:4;1746:36;1770:11;1746:23;:36::i;:::-;1739:43;;1569:220;;;:::o;2471:98:4:-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;3605:11;;:2;:11;;;;3597:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3702:5;3686:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3711:37;3728:5;3735:12;:10;:12::i;:::-;3711:16;:37::i;:::-;3686:62;3665:170;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3538:336;3468:406;;:::o;1630:111:7:-;1691:7;1717:10;:17;;;;1710:24;;1630:111;:::o;1795:220:17:-;1856:7;1891:13;:11;:13::i;:::-;1883:5;:21;1875:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;1938:15;1956:19;1969:5;1956:12;:19::i;:::-;1938:37;;1992:16;2000:7;1992;:16::i;:::-;1985:23;;;1795:220;;;:::o;4612:326:4:-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;4903:28;4913:4;4919:2;4923:7;4903:9;:28::i;:::-;4612:326;;;:::o;4378:129:0:-;4452:7;4478:6;:12;4485:4;4478:12;;;;;;;;;;;:22;;;4471:29;;4378:129;;;:::o;4803:145::-;4886:18;4899:4;4886:12;:18::i;:::-;2505:16;2516:4;2505:10;:16::i;:::-;4916:25:::1;4927:4;4933:7;4916:10;:25::i;:::-;4803:145:::0;;;:::o;1306:253:7:-;1403:7;1438:23;1455:5;1438:16;:23::i;:::-;1430:5;:31;1422:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;1526:12;:19;1539:5;1526:19;;;;;;;;;;;;;;;:26;1546:5;1526:26;;;;;;;;;;;;1519:33;;1306:253;;;;:::o;5912:214:0:-;6018:12;:10;:12::i;:::-;6007:23;;:7;:23;;;5999:83;;;;;;;;;;;;:::i;:::-;;;;;;;;;6093:26;6105:4;6111:7;6093:11;:26::i;:::-;5912:214;;:::o;969:75:17:-;549:24;2505:16:0;2516:4;2505:10;:16::i;:::-;1027:10:17::1;:8;:10::i;:::-;969:75:::0;:::o;1050:188::-;617:24;2505:16:0;2516:4;2505:10;:16::i;:::-;1119:15:17::1;1137:25;:15;:23;:25::i;:::-;1119:43;;1172:27;:15;:25;:27::i;:::-;1209:22;1219:2;1223:7;1209:9;:22::i;:::-;1109:129;1050:188:::0;;:::o;5004:179:4:-;5137:39;5154:4;5160:2;5164:7;5137:39;;;;;;;;;;;;:16;:39::i;:::-;5004:179;;;:::o;2241:178:17:-;2304:7;2339:13;:11;:13::i;:::-;2331:5;:21;2323:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;2393:19;2406:5;2393:12;:19::i;:::-;2386:26;;2241:178;;;:::o;1813:230:7:-;1888:7;1923:30;:28;:30::i;:::-;1915:5;:38;1907:95;;;;;;;;;;;;:::i;:::-;;;;;;;;;2019:10;2030:5;2019:17;;;;;;;;:::i;:::-;;;;;;;;;;2012:24;;1813:230;;;:::o;1615:84:3:-;1662:4;1685:7;;;;;;;;;;;1678:14;;1615:84;:::o;2190:219:4:-;2262:7;2281:13;2297:17;2306:7;2297:8;:17::i;:::-;2281:33;;2349:1;2332:19;;:5;:19;;;;2324:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2397:5;2390:12;;;2190:219;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;892:71:17:-;549:24;2505:16:0;2516:4;2505:10;:16::i;:::-;948:8:17::1;:6;:8::i;:::-;892:71:::0;:::o;2895:145:0:-;2981:4;3004:6;:12;3011:4;3004:12;;;;;;;;;;;:20;;:29;3025:7;3004:29;;;;;;;;;;;;;;;;;;;;;;;;;2997:36;;2895:145;;;;:::o;2633:102:4:-;2689:13;2721:7;2714:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2633:102;:::o;2027:49:0:-;2072:4;2027:49;;;:::o;4169:153:4:-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5249:314::-;5417:41;5436:12;:10;:12::i;:::-;5450:7;5417:18;:41::i;:::-;5409:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;5518:38;5532:4;5538:2;5542:7;5551:4;5518:13;:38::i;:::-;5249:314;;;;:::o;2801:276::-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;:8;:10::i;:::-;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2984:86;2977:93;;;2801:276;;;:::o;579:62:17:-;617:24;579:62;:::o;5228:147:0:-;5312:18;5325:4;5312:12;:18::i;:::-;2505:16;2516:4;2505:10;:16::i;:::-;5342:26:::1;5354:4;5360:7;5342:11;:26::i;:::-;5228:147:::0;;;:::o;511:62:17:-;549:24;511:62;:::o;4388:162:4:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;2025:210:17:-;2103:7;2138:16;2148:5;2138:9;:16::i;:::-;2130:5;:24;2122:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2195:33;2215:5;2222;2195:19;:33::i;:::-;2188:40;;2025:210;;;;:::o;2606:202:0:-;2691:4;2729:32;2714:47;;;:11;:47;;;;:87;;;;2765:36;2789:11;2765:23;:36::i;:::-;2714:87;2707:94;;2606:202;;;:::o;13466:133:4:-;13547:16;13555:7;13547;:16::i;:::-;13539:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;13466:133;:::o;640:96:11:-;693:7;719:10;712:17;;640:96;:::o;12768:171:4:-;12869:2;12842:15;:24;12858:7;12842:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;12924:7;12920:2;12886:46;;12895:23;12910:7;12895:14;:23::i;:::-;12886:46;;;;;;;;;;;;12768:171;;:::o;7540:261::-;7633:4;7649:13;7665:23;7680:7;7665:14;:23::i;:::-;7649:39;;7717:5;7706:16;;:7;:16;;;:52;;;;7726:32;7743:5;7750:7;7726:16;:32::i;:::-;7706:52;:87;;;;7786:7;7762:31;;:20;7774:7;7762:11;:20::i;:::-;:31;;;7706:87;7698:96;;;7540:261;;;;:::o;11423:1233::-;11577:4;11550:31;;:23;11565:7;11550:14;:23::i;:::-;:31;;;11542:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11655:1;11641:16;;:2;:16;;;;11633:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;11709:42;11730:4;11736:2;11740:7;11749:1;11709:20;:42::i;:::-;11878:4;11851:31;;:23;11866:7;11851:14;:23::i;:::-;:31;;;11843:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11993:15;:24;12009:7;11993:24;;;;;;;;;;;;11986:31;;;;;;;;;;;12480:1;12461:9;:15;12471:4;12461:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;12512:1;12495:9;:13;12505:2;12495:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;12552:2;12533:7;:16;12541:7;12533:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;12589:7;12585:2;12570:27;;12579:4;12570:27;;;;;;;;;;;;12608:41;12628:4;12634:2;12638:7;12647:1;12608:19;:41::i;:::-;11423:1233;;;:::o;3334:103:0:-;3400:30;3411:4;3417:12;:10;:12::i;:::-;3400:10;:30::i;:::-;3334:103;:::o;7461:233::-;7544:22;7552:4;7558:7;7544;:22::i;:::-;7539:149;;7614:4;7582:6;:12;7589:4;7582:12;;;;;;;;;;;:20;;:29;7603:7;7582:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;7664:12;:10;:12::i;:::-;7637:40;;7655:7;7637:40;;7649:4;7637:40;;;;;;;;;;7539:149;7461:233;;:::o;7865:234::-;7948:22;7956:4;7962:7;7948;:22::i;:::-;7944:149;;;8018:5;7986:6;:12;7993:4;7986:12;;;;;;;;;;;:20;;:29;8007:7;7986:29;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8069:12;:10;:12::i;:::-;8042:40;;8060:7;8042:40;;8054:4;8042:40;;;;;;;;;;7944:149;7865:234;;:::o;2433:117:3:-;1486:16;:14;:16::i;:::-;2501:5:::1;2491:7;;:15;;;;;;;;;;;;;;;;;;2521:22;2530:12;:10;:12::i;:::-;2521:22;;;;;;:::i;:::-;;;;;;;;2433:117::o:0;827:112:12:-;892:7;918;:14;;;911:21;;827:112;;;:::o;945:123::-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;8131:108:4:-;8206:26;8216:2;8220:7;8206:26;;;;;;;;;;;;:9;:26::i;:::-;8131:108;;:::o;6838:115::-;6904:7;6930;:16;6938:7;6930:16;;;;;;;;;;;;;;;;;;;;;6923:23;;6838:115;;;:::o;2186::3:-;1239:19;:17;:19::i;:::-;2255:4:::1;2245:7;;:14;;;;;;;;;;;;;;;;;;2274:20;2281:12;:10;:12::i;:::-;2274:20;;;;;;:::i;:::-;;;;;;;;2186:115::o:0;13075:307:4:-;13225:8;13216:17;;:5;:17;;;;13208:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;13311:8;13273:18;:25;13292:5;13273:25;;;;;;;;;;;;;;;:35;13299:8;13273:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;13356:8;13334:41;;13349:5;13334:41;;;13366:8;13334:41;;;;;;:::i;:::-;;;;;;;;13075:307;;;:::o;6424:305::-;6574:28;6584:4;6590:2;6594:7;6574:9;:28::i;:::-;6620:47;6643:4;6649:2;6653:7;6662:4;6620:22;:47::i;:::-;6612:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6424:305;;;;:::o;3319:92::-;3370:13;3395:9;;;;;;;;;;;;;;3319:92;:::o;415:696:13:-;471:13;520:14;557:1;537:17;548:5;537:10;:17::i;:::-;:21;520:38;;572:20;606:6;595:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;572:41;;627:11;753:6;749:2;745:15;737:6;733:28;726:35;;788:280;795:4;788:280;;;819:5;;;;;;;;958:8;953:2;946:5;942:14;937:30;932:3;924:44;1012:2;1003:11;;;;;;:::i;:::-;;;;;1045:1;1036:5;:10;1032:21;;;1048:5;;1032:21;788:280;;;1088:6;1081:13;;;;;415:696;;;:::o;1005:222:7:-;1107:4;1145:35;1130:50;;;:11;:50;;;;:90;;;;1184:36;1208:11;1184:23;:36::i;:::-;1130:90;1123:97;;1005:222;;;:::o;7256:126:4:-;7321:4;7373:1;7344:31;;:17;7353:7;7344:8;:17::i;:::-;:31;;;;7337:38;;7256:126;;;:::o;1244:251:17:-;1239:19:3;:17;:19::i;:::-;1432:56:17::1;1459:4;1465:2;1469:7;1478:9;1432:26;:56::i;:::-;1244:251:::0;;;;:::o;16800:153:4:-;;;;;:::o;3718:479:0:-;3806:22;3814:4;3820:7;3806;:22::i;:::-;3801:390;;3989:28;4009:7;3989:19;:28::i;:::-;4088:38;4116:4;4108:13;;4123:2;4088:19;:38::i;:::-;3896:252;;;;;;;;;:::i;:::-;;;;;;;;;;;;;3844:336;;;;;;;;;;;:::i;:::-;;;;;;;;3801:390;3718:479;;:::o;1945:106:3:-;2011:8;:6;:8::i;:::-;2003:41;;;;;;;;;;;;:::i;:::-;;;;;;;;;1945:106::o;8460:309:4:-;8584:18;8590:2;8594:7;8584:5;:18::i;:::-;8633:53;8664:1;8668:2;8672:7;8681:4;8633:22;:53::i;:::-;8612:150;;;;;;;;;;;;:::i;:::-;;;;;;;;;8460:309;;;:::o;1767:106:3:-;1837:8;:6;:8::i;:::-;1836:9;1828:38;;;;;;;;;;;;:::i;:::-;;;;;;;;;1767:106::o;14151:831:4:-;14300:4;14320:15;:2;:13;;;:15::i;:::-;14316:660;;;14371:2;14355:36;;;14392:12;:10;:12::i;:::-;14406:4;14412:7;14421:4;14355:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;14351:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14610:1;14593:6;:13;:18;14589:321;;;14635:60;;;;;;;;;;:::i;:::-;;;;;;;;14589:321;14862:6;14856:13;14847:6;14843:2;14839:15;14832:38;14351:573;14486:41;;;14476:51;;;:6;:51;;;;14469:58;;;;;14316:660;14961:4;14954:11;;14151:831;;;;;;;:::o;9889:890:16:-;9942:7;9961:14;9978:1;9961:18;;10026:6;10017:5;:15;10013:99;;10061:6;10052:15;;;;;;:::i;:::-;;;;;10095:2;10085:12;;;;10013:99;10138:6;10129:5;:15;10125:99;;10173:6;10164:15;;;;;;:::i;:::-;;;;;10207:2;10197:12;;;;10125:99;10250:6;10241:5;:15;10237:99;;10285:6;10276:15;;;;;;:::i;:::-;;;;;10319:2;10309:12;;;;10237:99;10362:5;10353;:14;10349:96;;10396:5;10387:14;;;;;;:::i;:::-;;;;;10429:1;10419:11;;;;10349:96;10471:5;10462;:14;10458:96;;10505:5;10496:14;;;;;;:::i;:::-;;;;;10538:1;10528:11;;;;10458:96;10580:5;10571;:14;10567:96;;10614:5;10605:14;;;;;;:::i;:::-;;;;;10647:1;10637:11;;;;10567:96;10689:5;10680;:14;10676:64;;10724:1;10714:11;;;;10676:64;10766:6;10759:13;;;9889:890;;;:::o;1570:300:4:-;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;2112:890:7:-;2283:61;2310:4;2316:2;2320:12;2334:9;2283:26;:61::i;:::-;2371:1;2359:9;:13;2355:219;;;2500:63;;;;;;;;;;:::i;:::-;;;;;;;;2355:219;2584:15;2602:12;2584:30;;2645:1;2629:18;;:4;:18;;;2625:183;;;2663:40;2695:7;2663:31;:40::i;:::-;2625:183;;;2732:2;2724:10;;:4;:10;;;2720:88;;2750:47;2783:4;2789:7;2750:32;:47::i;:::-;2720:88;2625:183;2835:1;2821:16;;:2;:16;;;2817:179;;;2853:45;2890:7;2853:36;:45::i;:::-;2817:179;;;2925:4;2919:10;;:2;:10;;;2915:81;;2945:40;2973:2;2977:7;2945:27;:40::i;:::-;2915:81;2817:179;2273:729;2112:890;;;;:::o;2102:149:13:-;2160:13;2192:52;2220:4;2204:22;;311:2;2192:52;;:11;:52::i;:::-;2185:59;;2102:149;;;:::o;1513:437::-;1588:13;1613:19;1658:1;1649:6;1645:1;:10;;;;:::i;:::-;:14;;;;:::i;:::-;1635:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1613:47;;1670:15;:6;1677:1;1670:9;;;;;;;;:::i;:::-;;;;;:15;;;;;;;;;;;1695;:6;1702:1;1695:9;;;;;;;;:::i;:::-;;;;;:15;;;;;;;;;;;1725:9;1750:1;1741:6;1737:1;:10;;;;:::i;:::-;:14;;;;:::i;:::-;1725:26;;1720:128;1757:1;1753;:5;1720:128;;;1791:8;1808:3;1800:5;:11;1791:21;;;;;;;:::i;:::-;;;;;1779:6;1786:1;1779:9;;;;;;;;:::i;:::-;;;;;:33;;;;;;;;;;;1836:1;1826:11;;;;;1760:3;;;;:::i;:::-;;;1720:128;;;;1874:1;1865:5;:10;1857:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;1936:6;1922:21;;;1513:437;;;;:::o;9091:920:4:-;9184:1;9170:16;;:2;:16;;;;9162:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9242:16;9250:7;9242;:16::i;:::-;9241:17;9233:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9302:48;9331:1;9335:2;9339:7;9348:1;9302:20;:48::i;:::-;9446:16;9454:7;9446;:16::i;:::-;9445:17;9437:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9854:1;9837:9;:13;9847:2;9837:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9895:2;9876:7;:16;9884:7;9876:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9938:7;9934:2;9913:33;;9930:1;9913:33;;;;;;;;;;;;9957:47;9985:1;9989:2;9993:7;10002:1;9957:19;:47::i;:::-;9091:920;;:::o;1175:320:10:-;1235:4;1487:1;1465:7;:19;;;:23;1458:30;;1175:320;;;:::o;829:155:14:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;15698:396:4:-;15882:1;15870:9;:13;15866:222;;;15919:1;15903:18;;:4;:18;;;15899:85;;15960:9;15941;:15;15951:4;15941:15;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;15899:85;16015:1;16001:16;;:2;:16;;;15997:81;;16054:9;16037;:13;16047:2;16037:13;;;;;;;;;;;;;;;;:26;;;;;;;:::i;:::-;;;;;;;;15997:81;15866:222;15698:396;;;;:::o;3708:161:7:-;3811:10;:17;;;;3784:15;:24;3800:7;3784:24;;;;;;;;;;;:44;;;;3838:10;3854:7;3838:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3708:161;:::o;4486:970::-;4748:22;4798:1;4773:22;4790:4;4773:16;:22::i;:::-;:26;;;;:::i;:::-;4748:51;;4809:18;4830:17;:26;4848:7;4830:26;;;;;;;;;;;;4809:47;;4974:14;4960:10;:28;4956:323;;5004:19;5026:12;:18;5039:4;5026:18;;;;;;;;;;;;;;;:34;5045:14;5026:34;;;;;;;;;;;;5004:56;;5108:11;5075:12;:18;5088:4;5075:18;;;;;;;;;;;;;;;:30;5094:10;5075:30;;;;;;;;;;;:44;;;;5224:10;5191:17;:30;5209:11;5191:30;;;;;;;;;;;:43;;;;4990:289;4956:323;5372:17;:26;5390:7;5372:26;;;;;;;;;;;5365:33;;;5415:12;:18;5428:4;5415:18;;;;;;;;;;;;;;;:34;5434:14;5415:34;;;;;;;;;;;5408:41;;;4567:889;;4486:970;;:::o;5744:1061::-;5993:22;6038:1;6018:10;:17;;;;:21;;;;:::i;:::-;5993:46;;6049:18;6070:15;:24;6086:7;6070:24;;;;;;;;;;;;6049:45;;6416:19;6438:10;6449:14;6438:26;;;;;;;;:::i;:::-;;;;;;;;;;6416:48;;6500:11;6475:10;6486;6475:22;;;;;;;;:::i;:::-;;;;;;;;;:36;;;;6610:10;6579:15;:28;6595:11;6579:28;;;;;;;;;;;:41;;;;6748:15;:24;6764:7;6748:24;;;;;;;;;;;6741:31;;;6782:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5815:990;;;5744:1061;:::o;3296:217::-;3380:14;3397:20;3414:2;3397:16;:20::i;:::-;3380:37;;3454:7;3427:12;:16;3440:2;3427:16;;;;;;;;;;;;;;;:24;3444:6;3427:24;;;;;;;;;;;:34;;;;3500:6;3471:17;:26;3489:7;3471:26;;;;;;;;;;;:35;;;;3370:143;3296:217;;:::o;7:75:18:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:118::-;5025:24;5043:5;5025:24;:::i;:::-;5020:3;5013:37;4938:118;;:::o;5062:222::-;5155:4;5193:2;5182:9;5178:18;5170:26;;5206:71;5274:1;5263:9;5259:17;5250:6;5206:71;:::i;:::-;5062:222;;;;:::o;5290:619::-;5367:6;5375;5383;5432:2;5420:9;5411:7;5407:23;5403:32;5400:119;;;5438:79;;:::i;:::-;5400:119;5558:1;5583:53;5628:7;5619:6;5608:9;5604:22;5583:53;:::i;:::-;5573:63;;5529:117;5685:2;5711:53;5756:7;5747:6;5736:9;5732:22;5711:53;:::i;:::-;5701:63;;5656:118;5813:2;5839:53;5884:7;5875:6;5864:9;5860:22;5839:53;:::i;:::-;5829:63;;5784:118;5290:619;;;;;:::o;5915:77::-;5952:7;5981:5;5970:16;;5915:77;;;:::o;5998:122::-;6071:24;6089:5;6071:24;:::i;:::-;6064:5;6061:35;6051:63;;6110:1;6107;6100:12;6051:63;5998:122;:::o;6126:139::-;6172:5;6210:6;6197:20;6188:29;;6226:33;6253:5;6226:33;:::i;:::-;6126:139;;;;:::o;6271:329::-;6330:6;6379:2;6367:9;6358:7;6354:23;6350:32;6347:119;;;6385:79;;:::i;:::-;6347:119;6505:1;6530:53;6575:7;6566:6;6555:9;6551:22;6530:53;:::i;:::-;6520:63;;6476:117;6271:329;;;;:::o;6606:118::-;6693:24;6711:5;6693:24;:::i;:::-;6688:3;6681:37;6606:118;;:::o;6730:222::-;6823:4;6861:2;6850:9;6846:18;6838:26;;6874:71;6942:1;6931:9;6927:17;6918:6;6874:71;:::i;:::-;6730:222;;;;:::o;6958:474::-;7026:6;7034;7083:2;7071:9;7062:7;7058:23;7054:32;7051:119;;;7089:79;;:::i;:::-;7051:119;7209:1;7234:53;7279:7;7270:6;7259:9;7255:22;7234:53;:::i;:::-;7224:63;;7180:117;7336:2;7362:53;7407:7;7398:6;7387:9;7383:22;7362:53;:::i;:::-;7352:63;;7307:118;6958:474;;;;;:::o;7438:329::-;7497:6;7546:2;7534:9;7525:7;7521:23;7517:32;7514:119;;;7552:79;;:::i;:::-;7514:119;7672:1;7697:53;7742:7;7733:6;7722:9;7718:22;7697:53;:::i;:::-;7687:63;;7643:117;7438:329;;;;:::o;7773:116::-;7843:21;7858:5;7843:21;:::i;:::-;7836:5;7833:32;7823:60;;7879:1;7876;7869:12;7823:60;7773:116;:::o;7895:133::-;7938:5;7976:6;7963:20;7954:29;;7992:30;8016:5;7992:30;:::i;:::-;7895:133;;;;:::o;8034:468::-;8099:6;8107;8156:2;8144:9;8135:7;8131:23;8127:32;8124:119;;;8162:79;;:::i;:::-;8124:119;8282:1;8307:53;8352:7;8343:6;8332:9;8328:22;8307:53;:::i;:::-;8297:63;;8253:117;8409:2;8435:50;8477:7;8468:6;8457:9;8453:22;8435:50;:::i;:::-;8425:60;;8380:115;8034:468;;;;;:::o;8508:117::-;8617:1;8614;8607:12;8631:117;8740:1;8737;8730:12;8754:180;8802:77;8799:1;8792:88;8899:4;8896:1;8889:15;8923:4;8920:1;8913:15;8940:281;9023:27;9045:4;9023:27;:::i;:::-;9015:6;9011:40;9153:6;9141:10;9138:22;9117:18;9105:10;9102:34;9099:62;9096:88;;;9164:18;;:::i;:::-;9096:88;9204:10;9200:2;9193:22;8983:238;8940:281;;:::o;9227:129::-;9261:6;9288:20;;:::i;:::-;9278:30;;9317:33;9345:4;9337:6;9317:33;:::i;:::-;9227:129;;;:::o;9362:307::-;9423:4;9513:18;9505:6;9502:30;9499:56;;;9535:18;;:::i;:::-;9499:56;9573:29;9595:6;9573:29;:::i;:::-;9565:37;;9657:4;9651;9647:15;9639:23;;9362:307;;;:::o;9675:154::-;9759:6;9754:3;9749;9736:30;9821:1;9812:6;9807:3;9803:16;9796:27;9675:154;;;:::o;9835:410::-;9912:5;9937:65;9953:48;9994:6;9953:48;:::i;:::-;9937:65;:::i;:::-;9928:74;;10025:6;10018:5;10011:21;10063:4;10056:5;10052:16;10101:3;10092:6;10087:3;10083:16;10080:25;10077:112;;;10108:79;;:::i;:::-;10077:112;10198:41;10232:6;10227:3;10222;10198:41;:::i;:::-;9918:327;9835:410;;;;;:::o;10264:338::-;10319:5;10368:3;10361:4;10353:6;10349:17;10345:27;10335:122;;10376:79;;:::i;:::-;10335:122;10493:6;10480:20;10518:78;10592:3;10584:6;10577:4;10569:6;10565:17;10518:78;:::i;:::-;10509:87;;10325:277;10264:338;;;;:::o;10608:943::-;10703:6;10711;10719;10727;10776:3;10764:9;10755:7;10751:23;10747:33;10744:120;;;10783:79;;:::i;:::-;10744:120;10903:1;10928:53;10973:7;10964:6;10953:9;10949:22;10928:53;:::i;:::-;10918:63;;10874:117;11030:2;11056:53;11101:7;11092:6;11081:9;11077:22;11056:53;:::i;:::-;11046:63;;11001:118;11158:2;11184:53;11229:7;11220:6;11209:9;11205:22;11184:53;:::i;:::-;11174:63;;11129:118;11314:2;11303:9;11299:18;11286:32;11345:18;11337:6;11334:30;11331:117;;;11367:79;;:::i;:::-;11331:117;11472:62;11526:7;11517:6;11506:9;11502:22;11472:62;:::i;:::-;11462:72;;11257:287;10608:943;;;;;;;:::o;11557:474::-;11625:6;11633;11682:2;11670:9;11661:7;11657:23;11653:32;11650:119;;;11688:79;;:::i;:::-;11650:119;11808:1;11833:53;11878:7;11869:6;11858:9;11854:22;11833:53;:::i;:::-;11823:63;;11779:117;11935:2;11961:53;12006:7;11997:6;11986:9;11982:22;11961:53;:::i;:::-;11951:63;;11906:118;11557:474;;;;;:::o;12037:180::-;12085:77;12082:1;12075:88;12182:4;12179:1;12172:15;12206:4;12203:1;12196:15;12223:320;12267:6;12304:1;12298:4;12294:12;12284:22;;12351:1;12345:4;12341:12;12372:18;12362:81;;12428:4;12420:6;12416:17;12406:27;;12362:81;12490:2;12482:6;12479:14;12459:18;12456:38;12453:84;;;12509:18;;:::i;:::-;12453:84;12274:269;12223:320;;;:::o;12549:220::-;12689:34;12685:1;12677:6;12673:14;12666:58;12758:3;12753:2;12745:6;12741:15;12734:28;12549:220;:::o;12775:366::-;12917:3;12938:67;13002:2;12997:3;12938:67;:::i;:::-;12931:74;;13014:93;13103:3;13014:93;:::i;:::-;13132:2;13127:3;13123:12;13116:19;;12775:366;;;:::o;13147:419::-;13313:4;13351:2;13340:9;13336:18;13328:26;;13400:9;13394:4;13390:20;13386:1;13375:9;13371:17;13364:47;13428:131;13554:4;13428:131;:::i;:::-;13420:139;;13147:419;;;:::o;13572:248::-;13712:34;13708:1;13700:6;13696:14;13689:58;13781:31;13776:2;13768:6;13764:15;13757:56;13572:248;:::o;13826:366::-;13968:3;13989:67;14053:2;14048:3;13989:67;:::i;:::-;13982:74;;14065:93;14154:3;14065:93;:::i;:::-;14183:2;14178:3;14174:12;14167:19;;13826:366;;;:::o;14198:419::-;14364:4;14402:2;14391:9;14387:18;14379:26;;14451:9;14445:4;14441:20;14437:1;14426:9;14422:17;14415:47;14479:131;14605:4;14479:131;:::i;:::-;14471:139;;14198:419;;;:::o;14623:169::-;14763:21;14759:1;14751:6;14747:14;14740:45;14623:169;:::o;14798:366::-;14940:3;14961:67;15025:2;15020:3;14961:67;:::i;:::-;14954:74;;15037:93;15126:3;15037:93;:::i;:::-;15155:2;15150:3;15146:12;15139:19;;14798:366;;;:::o;15170:419::-;15336:4;15374:2;15363:9;15359:18;15351:26;;15423:9;15417:4;15413:20;15409:1;15398:9;15394:17;15387:47;15451:131;15577:4;15451:131;:::i;:::-;15443:139;;15170:419;;;:::o;15595:232::-;15735:34;15731:1;15723:6;15719:14;15712:58;15804:15;15799:2;15791:6;15787:15;15780:40;15595:232;:::o;15833:366::-;15975:3;15996:67;16060:2;16055:3;15996:67;:::i;:::-;15989:74;;16072:93;16161:3;16072:93;:::i;:::-;16190:2;16185:3;16181:12;16174:19;;15833:366;;;:::o;16205:419::-;16371:4;16409:2;16398:9;16394:18;16386:26;;16458:9;16452:4;16448:20;16444:1;16433:9;16429:17;16422:47;16486:131;16612:4;16486:131;:::i;:::-;16478:139;;16205:419;;;:::o;16630:230::-;16770:34;16766:1;16758:6;16754:14;16747:58;16839:13;16834:2;16826:6;16822:15;16815:38;16630:230;:::o;16866:366::-;17008:3;17029:67;17093:2;17088:3;17029:67;:::i;:::-;17022:74;;17105:93;17194:3;17105:93;:::i;:::-;17223:2;17218:3;17214:12;17207:19;;16866:366;;;:::o;17238:419::-;17404:4;17442:2;17431:9;17427:18;17419:26;;17491:9;17485:4;17481:20;17477:1;17466:9;17462:17;17455:47;17519:131;17645:4;17519:131;:::i;:::-;17511:139;;17238:419;;;:::o;17663:234::-;17803:34;17799:1;17791:6;17787:14;17780:58;17872:17;17867:2;17859:6;17855:15;17848:42;17663:234;:::o;17903:366::-;18045:3;18066:67;18130:2;18125:3;18066:67;:::i;:::-;18059:74;;18142:93;18231:3;18142:93;:::i;:::-;18260:2;18255:3;18251:12;18244:19;;17903:366;;;:::o;18275:419::-;18441:4;18479:2;18468:9;18464:18;18456:26;;18528:9;18522:4;18518:20;18514:1;18503:9;18499:17;18492:47;18556:131;18682:4;18556:131;:::i;:::-;18548:139;;18275:419;;;:::o;18700:231::-;18840:34;18836:1;18828:6;18824:14;18817:58;18909:14;18904:2;18896:6;18892:15;18885:39;18700:231;:::o;18937:366::-;19079:3;19100:67;19164:2;19159:3;19100:67;:::i;:::-;19093:74;;19176:93;19265:3;19176:93;:::i;:::-;19294:2;19289:3;19285:12;19278:19;;18937:366;;;:::o;19309:419::-;19475:4;19513:2;19502:9;19498:18;19490:26;;19562:9;19556:4;19552:20;19548:1;19537:9;19533:17;19526:47;19590:131;19716:4;19590:131;:::i;:::-;19582:139;;19309:419;;;:::o;19734:180::-;19782:77;19779:1;19772:88;19879:4;19876:1;19869:15;19903:4;19900:1;19893:15;19920:174;20060:26;20056:1;20048:6;20044:14;20037:50;19920:174;:::o;20100:366::-;20242:3;20263:67;20327:2;20322:3;20263:67;:::i;:::-;20256:74;;20339:93;20428:3;20339:93;:::i;:::-;20457:2;20452:3;20448:12;20441:19;;20100:366;;;:::o;20472:419::-;20638:4;20676:2;20665:9;20661:18;20653:26;;20725:9;20719:4;20715:20;20711:1;20700:9;20696:17;20689:47;20753:131;20879:4;20753:131;:::i;:::-;20745:139;;20472:419;;;:::o;20897:228::-;21037:34;21033:1;21025:6;21021:14;21014:58;21106:11;21101:2;21093:6;21089:15;21082:36;20897:228;:::o;21131:366::-;21273:3;21294:67;21358:2;21353:3;21294:67;:::i;:::-;21287:74;;21370:93;21459:3;21370:93;:::i;:::-;21488:2;21483:3;21479:12;21472:19;;21131:366;;;:::o;21503:419::-;21669:4;21707:2;21696:9;21692:18;21684:26;;21756:9;21750:4;21746:20;21742:1;21731:9;21727:17;21720:47;21784:131;21910:4;21784:131;:::i;:::-;21776:139;;21503:419;;;:::o;21928:148::-;22030:11;22067:3;22052:18;;21928:148;;;;:::o;22082:377::-;22188:3;22216:39;22249:5;22216:39;:::i;:::-;22271:89;22353:6;22348:3;22271:89;:::i;:::-;22264:96;;22369:52;22414:6;22409:3;22402:4;22395:5;22391:16;22369:52;:::i;:::-;22446:6;22441:3;22437:16;22430:23;;22192:267;22082:377;;;;:::o;22465:435::-;22645:3;22667:95;22758:3;22749:6;22667:95;:::i;:::-;22660:102;;22779:95;22870:3;22861:6;22779:95;:::i;:::-;22772:102;;22891:3;22884:10;;22465:435;;;;;:::o;22906:224::-;23046:34;23042:1;23034:6;23030:14;23023:58;23115:7;23110:2;23102:6;23098:15;23091:32;22906:224;:::o;23136:366::-;23278:3;23299:67;23363:2;23358:3;23299:67;:::i;:::-;23292:74;;23375:93;23464:3;23375:93;:::i;:::-;23493:2;23488:3;23484:12;23477:19;;23136:366;;;:::o;23508:419::-;23674:4;23712:2;23701:9;23697:18;23689:26;;23761:9;23755:4;23751:20;23747:1;23736:9;23732:17;23725:47;23789:131;23915:4;23789:131;:::i;:::-;23781:139;;23508:419;;;:::o;23933:223::-;24073:34;24069:1;24061:6;24057:14;24050:58;24142:6;24137:2;24129:6;24125:15;24118:31;23933:223;:::o;24162:366::-;24304:3;24325:67;24389:2;24384:3;24325:67;:::i;:::-;24318:74;;24401:93;24490:3;24401:93;:::i;:::-;24519:2;24514:3;24510:12;24503:19;;24162:366;;;:::o;24534:419::-;24700:4;24738:2;24727:9;24723:18;24715:26;;24787:9;24781:4;24777:20;24773:1;24762:9;24758:17;24751:47;24815:131;24941:4;24815:131;:::i;:::-;24807:139;;24534:419;;;:::o;24959:175::-;25099:27;25095:1;25087:6;25083:14;25076:51;24959:175;:::o;25140:366::-;25282:3;25303:67;25367:2;25362:3;25303:67;:::i;:::-;25296:74;;25379:93;25468:3;25379:93;:::i;:::-;25497:2;25492:3;25488:12;25481:19;;25140:366;;;:::o;25512:419::-;25678:4;25716:2;25705:9;25701:18;25693:26;;25765:9;25759:4;25755:20;25751:1;25740:9;25736:17;25729:47;25793:131;25919:4;25793:131;:::i;:::-;25785:139;;25512:419;;;:::o;25937:237::-;26077:34;26073:1;26065:6;26061:14;26054:58;26146:20;26141:2;26133:6;26129:15;26122:45;25937:237;:::o;26180:366::-;26322:3;26343:67;26407:2;26402:3;26343:67;:::i;:::-;26336:74;;26419:93;26508:3;26419:93;:::i;:::-;26537:2;26532:3;26528:12;26521:19;;26180:366;;;:::o;26552:419::-;26718:4;26756:2;26745:9;26741:18;26733:26;;26805:9;26799:4;26795:20;26791:1;26780:9;26776:17;26769:47;26833:131;26959:4;26833:131;:::i;:::-;26825:139;;26552:419;;;:::o;26977:180::-;27025:77;27022:1;27015:88;27122:4;27119:1;27112:15;27146:4;27143:1;27136:15;27163:173;27303:25;27299:1;27291:6;27287:14;27280:49;27163:173;:::o;27342:402::-;27502:3;27523:85;27605:2;27600:3;27523:85;:::i;:::-;27516:92;;27617:93;27706:3;27617:93;:::i;:::-;27735:2;27730:3;27726:12;27719:19;;27342:402;;;:::o;27750:167::-;27890:19;27886:1;27878:6;27874:14;27867:43;27750:167;:::o;27923:402::-;28083:3;28104:85;28186:2;28181:3;28104:85;:::i;:::-;28097:92;;28198:93;28287:3;28198:93;:::i;:::-;28316:2;28311:3;28307:12;28300:19;;27923:402;;;:::o;28331:967::-;28713:3;28735:148;28879:3;28735:148;:::i;:::-;28728:155;;28900:95;28991:3;28982:6;28900:95;:::i;:::-;28893:102;;29012:148;29156:3;29012:148;:::i;:::-;29005:155;;29177:95;29268:3;29259:6;29177:95;:::i;:::-;29170:102;;29289:3;29282:10;;28331:967;;;;;:::o;29304:170::-;29444:22;29440:1;29432:6;29428:14;29421:46;29304:170;:::o;29480:366::-;29622:3;29643:67;29707:2;29702:3;29643:67;:::i;:::-;29636:74;;29719:93;29808:3;29719:93;:::i;:::-;29837:2;29832:3;29828:12;29821:19;;29480:366;;;:::o;29852:419::-;30018:4;30056:2;30045:9;30041:18;30033:26;;30105:9;30099:4;30095:20;30091:1;30080:9;30076:17;30069:47;30133:131;30259:4;30133:131;:::i;:::-;30125:139;;29852:419;;;:::o;30277:166::-;30417:18;30413:1;30405:6;30401:14;30394:42;30277:166;:::o;30449:366::-;30591:3;30612:67;30676:2;30671:3;30612:67;:::i;:::-;30605:74;;30688:93;30777:3;30688:93;:::i;:::-;30806:2;30801:3;30797:12;30790:19;;30449:366;;;:::o;30821:419::-;30987:4;31025:2;31014:9;31010:18;31002:26;;31074:9;31068:4;31064:20;31060:1;31049:9;31045:17;31038:47;31102:131;31228:4;31102:131;:::i;:::-;31094:139;;30821:419;;;:::o;31246:98::-;31297:6;31331:5;31325:12;31315:22;;31246:98;;;:::o;31350:168::-;31433:11;31467:6;31462:3;31455:19;31507:4;31502:3;31498:14;31483:29;;31350:168;;;;:::o;31524:360::-;31610:3;31638:38;31670:5;31638:38;:::i;:::-;31692:70;31755:6;31750:3;31692:70;:::i;:::-;31685:77;;31771:52;31816:6;31811:3;31804:4;31797:5;31793:16;31771:52;:::i;:::-;31848:29;31870:6;31848:29;:::i;:::-;31843:3;31839:39;31832:46;;31614:270;31524:360;;;;:::o;31890:640::-;32085:4;32123:3;32112:9;32108:19;32100:27;;32137:71;32205:1;32194:9;32190:17;32181:6;32137:71;:::i;:::-;32218:72;32286:2;32275:9;32271:18;32262:6;32218:72;:::i;:::-;32300;32368:2;32357:9;32353:18;32344:6;32300:72;:::i;:::-;32419:9;32413:4;32409:20;32404:2;32393:9;32389:18;32382:48;32447:76;32518:4;32509:6;32447:76;:::i;:::-;32439:84;;31890:640;;;;;;;:::o;32536:141::-;32592:5;32623:6;32617:13;32608:22;;32639:32;32665:5;32639:32;:::i;:::-;32536:141;;;;:::o;32683:349::-;32752:6;32801:2;32789:9;32780:7;32776:23;32772:32;32769:119;;;32807:79;;:::i;:::-;32769:119;32927:1;32952:63;33007:7;32998:6;32987:9;32983:22;32952:63;:::i;:::-;32942:73;;32898:127;32683:349;;;;:::o;33038:240::-;33178:34;33174:1;33166:6;33162:14;33155:58;33247:23;33242:2;33234:6;33230:15;33223:48;33038:240;:::o;33284:366::-;33426:3;33447:67;33511:2;33506:3;33447:67;:::i;:::-;33440:74;;33523:93;33612:3;33523:93;:::i;:::-;33641:2;33636:3;33632:12;33625:19;;33284:366;;;:::o;33656:419::-;33822:4;33860:2;33849:9;33845:18;33837:26;;33909:9;33903:4;33899:20;33895:1;33884:9;33880:17;33873:47;33937:131;34063:4;33937:131;:::i;:::-;33929:139;;33656:419;;;:::o;34081:180::-;34129:77;34126:1;34119:88;34226:4;34223:1;34216:15;34250:4;34247:1;34240:15;34267:348;34307:7;34330:20;34348:1;34330:20;:::i;:::-;34325:25;;34364:20;34382:1;34364:20;:::i;:::-;34359:25;;34552:1;34484:66;34480:74;34477:1;34474:81;34469:1;34462:9;34455:17;34451:105;34448:131;;;34559:18;;:::i;:::-;34448:131;34607:1;34604;34600:9;34589:20;;34267:348;;;;:::o;34621:305::-;34661:3;34680:20;34698:1;34680:20;:::i;:::-;34675:25;;34714:20;34732:1;34714:20;:::i;:::-;34709:25;;34868:1;34800:66;34796:74;34793:1;34790:81;34787:107;;;34874:18;;:::i;:::-;34787:107;34918:1;34915;34911:9;34904:16;;34621:305;;;;:::o;34932:171::-;34971:3;34994:24;35012:5;34994:24;:::i;:::-;34985:33;;35040:4;35033:5;35030:15;35027:41;;;35048:18;;:::i;:::-;35027:41;35095:1;35088:5;35084:13;35077:20;;34932:171;;;:::o;35109:182::-;35249:34;35245:1;35237:6;35233:14;35226:58;35109:182;:::o;35297:366::-;35439:3;35460:67;35524:2;35519:3;35460:67;:::i;:::-;35453:74;;35536:93;35625:3;35536:93;:::i;:::-;35654:2;35649:3;35645:12;35638:19;;35297:366;;;:::o;35669:419::-;35835:4;35873:2;35862:9;35858:18;35850:26;;35922:9;35916:4;35912:20;35908:1;35897:9;35893:17;35886:47;35950:131;36076:4;35950:131;:::i;:::-;35942:139;;35669:419;;;:::o;36094:182::-;36234:34;36230:1;36222:6;36218:14;36211:58;36094:182;:::o;36282:366::-;36424:3;36445:67;36509:2;36504:3;36445:67;:::i;:::-;36438:74;;36521:93;36610:3;36521:93;:::i;:::-;36639:2;36634:3;36630:12;36623:19;;36282:366;;;:::o;36654:419::-;36820:4;36858:2;36847:9;36843:18;36835:26;;36907:9;36901:4;36897:20;36893:1;36882:9;36878:17;36871:47;36935:131;37061:4;36935:131;:::i;:::-;36927:139;;36654:419;;;:::o;37079:178::-;37219:30;37215:1;37207:6;37203:14;37196:54;37079:178;:::o;37263:366::-;37405:3;37426:67;37490:2;37485:3;37426:67;:::i;:::-;37419:74;;37502:93;37591:3;37502:93;:::i;:::-;37620:2;37615:3;37611:12;37604:19;;37263:366;;;:::o;37635:419::-;37801:4;37839:2;37828:9;37824:18;37816:26;;37888:9;37882:4;37878:20;37874:1;37863:9;37859:17;37852:47;37916:131;38042:4;37916:131;:::i;:::-;37908:139;;37635:419;;;:::o;38060:191::-;38100:4;38120:20;38138:1;38120:20;:::i;:::-;38115:25;;38154:20;38172:1;38154:20;:::i;:::-;38149:25;;38193:1;38190;38187:8;38184:34;;;38198:18;;:::i;:::-;38184:34;38243:1;38240;38236:9;38228:17;;38060:191;;;;:::o;38257:180::-;38305:77;38302:1;38295:88;38402:4;38399:1;38392:15;38426:4;38423:1;38416:15",
	"source": "pragma solidity ^0.8.9;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/security/Pausable.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\nimport \"@openzeppelin/contracts/access/AccessControl.sol\";\n\ncontract GameToken is ERC721, ERC721Enumerable, Pausable, AccessControl {\n   \n       using Counters for Counters.Counter;\n\n    bytes32 public constant PAUSER_ROLE = keccak256(\"PAUSER_ROLE\");\n    bytes32 public constant MINTER_ROLE = keccak256(\"MINTER_ROLE\");\n    Counters.Counter private _tokenIdCounter;\n\n    constructor() ERC721(\"Game Token\", \"GAME\") {\n        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);\n        _grantRole(PAUSER_ROLE, msg.sender);\n        _grantRole(MINTER_ROLE, msg.sender);\n    }\n\n    function pause() public onlyRole(PAUSER_ROLE) {\n        _pause();\n    }\n\n    function unpause() public onlyRole(PAUSER_ROLE) {\n        _unpause();\n    }\n\n    function safeMint(address to) public onlyRole(MINTER_ROLE) {\n        uint256 tokenId = _tokenIdCounter.current();\n        _tokenIdCounter.increment();\n        _safeMint(to, tokenId);\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)\n        internal\n        whenNotPaused\n        override(ERC721, ERC721Enumerable)\n    {\n        super._beforeTokenTransfer(from, to, tokenId, batchSize);\n    }\n\n    // The following functions are overrides required by Solidity.\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721Enumerable, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n\n    function getOwnerByIndex(uint256 index) public view returns (address) {\n        require(index < totalSupply(), \"Invalid token index\");\n        uint256 tokenId = tokenByIndex(index);\n        return ownerOf(tokenId);\n    }\n    \n    function getTokenIdByOwner(address owner, uint256 index) public view returns (uint256) {\n        require(index < balanceOf(owner), \"Invalid token index\");\n        return tokenOfOwnerByIndex(owner, index);\n    }\n\n    function getTokenIdByIndex(uint256 index) public view returns (uint256) {\n        require(index < totalSupply(), \"Invalid token index\");\n        return tokenByIndex(index);\n    }\n\n}",
	"sourcePath": "/home/zois/TowerDefenseNFTs/contracts/GameToken.sol",
	"ast": {
	  "absolutePath": "project:/contracts/GameToken.sol",
	  "exportedSymbols": {
		"AccessControl": [
		  315
		],
		"Address": [
		  2430
		],
		"Context": [
		  2452
		],
		"Counters": [
		  2526
		],
		"ERC165": [
		  2725
		],
		"ERC721": [
		  1554
		],
		"ERC721Enumerable": [
		  2042
		],
		"GameToken": [
		  3820
		],
		"IAccessControl": [
		  388
		],
		"IERC165": [
		  2737
		],
		"IERC721": [
		  1670
		],
		"IERC721Enumerable": [
		  2073
		],
		"IERC721Metadata": [
		  2100
		],
		"IERC721Receiver": [
		  1688
		],
		"Math": [
		  3602
		],
		"Ownable": [
		  501
		],
		"Pausable": [
		  609
		],
		"Strings": [
		  2701
		]
	  },
	  "id": 3821,
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 3604,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".9"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "0:23:17"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
		  "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
		  "id": 3605,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 1555,
		  "src": "25:57:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
		  "file": "@openzeppelin/contracts/access/Ownable.sol",
		  "id": 3606,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 502,
		  "src": "83:52:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/security/Pausable.sol",
		  "file": "@openzeppelin/contracts/security/Pausable.sol",
		  "id": 3607,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 610,
		  "src": "136:55:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
		  "file": "@openzeppelin/contracts/utils/Counters.sol",
		  "id": 3608,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 2527,
		  "src": "192:52:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
		  "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
		  "id": 3609,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 2043,
		  "src": "245:78:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
		  "file": "@openzeppelin/contracts/access/AccessControl.sol",
		  "id": 3610,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 3821,
		  "sourceUnit": 316,
		  "src": "324:58:17",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 3611,
				"name": "ERC721",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 1554,
				"src": "406:6:17"
			  },
			  "id": 3612,
			  "nodeType": "InheritanceSpecifier",
			  "src": "406:6:17"
			},
			{
			  "baseName": {
				"id": 3613,
				"name": "ERC721Enumerable",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2042,
				"src": "414:16:17"
			  },
			  "id": 3614,
			  "nodeType": "InheritanceSpecifier",
			  "src": "414:16:17"
			},
			{
			  "baseName": {
				"id": 3615,
				"name": "Pausable",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 609,
				"src": "432:8:17"
			  },
			  "id": 3616,
			  "nodeType": "InheritanceSpecifier",
			  "src": "432:8:17"
			},
			{
			  "baseName": {
				"id": 3617,
				"name": "AccessControl",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 315,
				"src": "442:13:17"
			  },
			  "id": 3618,
			  "nodeType": "InheritanceSpecifier",
			  "src": "442:13:17"
			}
		  ],
		  "canonicalName": "GameToken",
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 3820,
		  "linearizedBaseContracts": [
			3820,
			315,
			609,
			2042,
			2073,
			1554,
			2100,
			1670,
			2725,
			2737,
			388,
			2452
		  ],
		  "name": "GameToken",
		  "nameLocation": "393:9:17",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "id": 3622,
			  "libraryName": {
				"id": 3619,
				"name": "Counters",
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2526,
				"src": "475:8:17"
			  },
			  "nodeType": "UsingForDirective",
			  "src": "469:36:17",
			  "typeName": {
				"id": 3621,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 3620,
				  "name": "Counters.Counter",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 2458,
				  "src": "488:16:17"
				},
				"referencedDeclaration": 2458,
				"src": "488:16:17",
				"typeDescriptions": {
				  "typeIdentifier": "t_struct$_Counter_$2458_storage_ptr",
				  "typeString": "struct Counters.Counter"
				}
			  }
			},
			{
			  "constant": true,
			  "functionSelector": "e63ab1e9",
			  "id": 3627,
			  "mutability": "constant",
			  "name": "PAUSER_ROLE",
			  "nameLocation": "535:11:17",
			  "nodeType": "VariableDeclaration",
			  "scope": 3820,
			  "src": "511:62:17",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bytes32",
				"typeString": "bytes32"
			  },
			  "typeName": {
				"id": 3623,
				"name": "bytes32",
				"nodeType": "ElementaryTypeName",
				"src": "511:7:17",
				"typeDescriptions": {
				  "typeIdentifier": "t_bytes32",
				  "typeString": "bytes32"
				}
			  },
			  "value": {
				"arguments": [
				  {
					"hexValue": "5041555345525f524f4c45",
					"id": 3625,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "string",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "559:13:17",
					"typeDescriptions": {
					  "typeIdentifier": "t_stringliteral_65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a",
					  "typeString": "literal_string \"PAUSER_ROLE\""
					},
					"value": "PAUSER_ROLE"
				  }
				],
				"expression": {
				  "argumentTypes": [
					{
					  "typeIdentifier": "t_stringliteral_65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a",
					  "typeString": "literal_string \"PAUSER_ROLE\""
					}
				  ],
				  "id": 3624,
				  "name": "keccak256",
				  "nodeType": "Identifier",
				  "overloadedDeclarations": [],
				  "referencedDeclaration": 4294967288,
				  "src": "549:9:17",
				  "typeDescriptions": {
					"typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
					"typeString": "function (bytes memory) pure returns (bytes32)"
				  }
				},
				"id": 3626,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "functionCall",
				"lValueRequested": false,
				"names": [],
				"nodeType": "FunctionCall",
				"src": "549:24:17",
				"tryCall": false,
				"typeDescriptions": {
				  "typeIdentifier": "t_bytes32",
				  "typeString": "bytes32"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": true,
			  "functionSelector": "d5391393",
			  "id": 3632,
			  "mutability": "constant",
			  "name": "MINTER_ROLE",
			  "nameLocation": "603:11:17",
			  "nodeType": "VariableDeclaration",
			  "scope": 3820,
			  "src": "579:62:17",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bytes32",
				"typeString": "bytes32"
			  },
			  "typeName": {
				"id": 3628,
				"name": "bytes32",
				"nodeType": "ElementaryTypeName",
				"src": "579:7:17",
				"typeDescriptions": {
				  "typeIdentifier": "t_bytes32",
				  "typeString": "bytes32"
				}
			  },
			  "value": {
				"arguments": [
				  {
					"hexValue": "4d494e5445525f524f4c45",
					"id": 3630,
					"isConstant": false,
					"isLValue": false,
					"isPure": true,
					"kind": "string",
					"lValueRequested": false,
					"nodeType": "Literal",
					"src": "627:13:17",
					"typeDescriptions": {
					  "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
					  "typeString": "literal_string \"MINTER_ROLE\""
					},
					"value": "MINTER_ROLE"
				  }
				],
				"expression": {
				  "argumentTypes": [
					{
					  "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
					  "typeString": "literal_string \"MINTER_ROLE\""
					}
				  ],
				  "id": 3629,
				  "name": "keccak256",
				  "nodeType": "Identifier",
				  "overloadedDeclarations": [],
				  "referencedDeclaration": 4294967288,
				  "src": "617:9:17",
				  "typeDescriptions": {
					"typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
					"typeString": "function (bytes memory) pure returns (bytes32)"
				  }
				},
				"id": 3631,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "functionCall",
				"lValueRequested": false,
				"names": [],
				"nodeType": "FunctionCall",
				"src": "617:24:17",
				"tryCall": false,
				"typeDescriptions": {
				  "typeIdentifier": "t_bytes32",
				  "typeString": "bytes32"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 3635,
			  "mutability": "mutable",
			  "name": "_tokenIdCounter",
			  "nameLocation": "672:15:17",
			  "nodeType": "VariableDeclaration",
			  "scope": 3820,
			  "src": "647:40:17",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_struct$_Counter_$2458_storage",
				"typeString": "struct Counters.Counter"
			  },
			  "typeName": {
				"id": 3634,
				"nodeType": "UserDefinedTypeName",
				"pathNode": {
				  "id": 3633,
				  "name": "Counters.Counter",
				  "nodeType": "IdentifierPath",
				  "referencedDeclaration": 2458,
				  "src": "647:16:17"
				},
				"referencedDeclaration": 2458,
				"src": "647:16:17",
				"typeDescriptions": {
				  "typeIdentifier": "t_struct$_Counter_$2458_storage_ptr",
				  "typeString": "struct Counters.Counter"
				}
			  },
			  "visibility": "private"
			},
			{
			  "body": {
				"id": 3660,
				"nodeType": "Block",
				"src": "737:149:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3643,
						  "name": "DEFAULT_ADMIN_ROLE",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 27,
						  "src": "758:18:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  }
						},
						{
						  "expression": {
							"id": 3644,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "778:3:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 3645,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "778:10:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 3642,
						"name": "_grantRole",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 283,
						"src": "747:10:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
						  "typeString": "function (bytes32,address)"
						}
					  },
					  "id": 3646,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "747:42:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3647,
					"nodeType": "ExpressionStatement",
					"src": "747:42:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3649,
						  "name": "PAUSER_ROLE",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3627,
						  "src": "810:11:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  }
						},
						{
						  "expression": {
							"id": 3650,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "823:3:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 3651,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "823:10:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 3648,
						"name": "_grantRole",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 283,
						"src": "799:10:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
						  "typeString": "function (bytes32,address)"
						}
					  },
					  "id": 3652,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "799:35:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3653,
					"nodeType": "ExpressionStatement",
					"src": "799:35:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3655,
						  "name": "MINTER_ROLE",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3632,
						  "src": "855:11:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  }
						},
						{
						  "expression": {
							"id": 3656,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "868:3:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 3657,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "868:10:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bytes32",
							"typeString": "bytes32"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 3654,
						"name": "_grantRole",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 283,
						"src": "844:10:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
						  "typeString": "function (bytes32,address)"
						}
					  },
					  "id": 3658,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "844:35:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3659,
					"nodeType": "ExpressionStatement",
					"src": "844:35:17"
				  }
				]
			  },
			  "id": 3661,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "hexValue": "47616d6520546f6b656e",
					  "id": 3638,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "715:12:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_ebd19fbfd9cac099805799e53e1b6f0f0a4929dc86feba390ca3ff8715a405d0",
						"typeString": "literal_string \"Game Token\""
					  },
					  "value": "Game Token"
					},
					{
					  "hexValue": "47414d45",
					  "id": 3639,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "729:6:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_d13d8e3c8822ff4d0a39994f3616e22d61c97585cee7a1baf4e9a875726b5f15",
						"typeString": "literal_string \"GAME\""
					  },
					  "value": "GAME"
					}
				  ],
				  "id": 3640,
				  "kind": "baseConstructorSpecifier",
				  "modifierName": {
					"id": 3637,
					"name": "ERC721",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 1554,
					"src": "708:6:17"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "708:28:17"
				}
			  ],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3636,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "705:2:17"
			  },
			  "returnParameters": {
				"id": 3641,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "737:0:17"
			  },
			  "scope": 3820,
			  "src": "694:192:17",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3670,
				"nodeType": "Block",
				"src": "938:25:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 3667,
						"name": "_pause",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 592,
						"src": "948:6:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 3668,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "948:8:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3669,
					"nodeType": "ExpressionStatement",
					"src": "948:8:17"
				  }
				]
			  },
			  "functionSelector": "8456cb59",
			  "id": 3671,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "id": 3664,
					  "name": "PAUSER_ROLE",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 3627,
					  "src": "925:11:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes32",
						"typeString": "bytes32"
					  }
					}
				  ],
				  "id": 3665,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 3663,
					"name": "onlyRole",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 38,
					"src": "916:8:17"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "916:21:17"
				}
			  ],
			  "name": "pause",
			  "nameLocation": "901:5:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3662,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "906:2:17"
			  },
			  "returnParameters": {
				"id": 3666,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "938:0:17"
			  },
			  "scope": 3820,
			  "src": "892:71:17",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3680,
				"nodeType": "Block",
				"src": "1017:27:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 3677,
						"name": "_unpause",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 608,
						"src": "1027:8:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 3678,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1027:10:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3679,
					"nodeType": "ExpressionStatement",
					"src": "1027:10:17"
				  }
				]
			  },
			  "functionSelector": "3f4ba83a",
			  "id": 3681,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "id": 3674,
					  "name": "PAUSER_ROLE",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 3627,
					  "src": "1004:11:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes32",
						"typeString": "bytes32"
					  }
					}
				  ],
				  "id": 3675,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 3673,
					"name": "onlyRole",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 38,
					"src": "995:8:17"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "995:21:17"
				}
			  ],
			  "name": "unpause",
			  "nameLocation": "978:7:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3672,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "985:2:17"
			  },
			  "returnParameters": {
				"id": 3676,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1017:0:17"
			  },
			  "scope": 3820,
			  "src": "969:75:17",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3705,
				"nodeType": "Block",
				"src": "1109:129:17",
				"statements": [
				  {
					"assignments": [
					  3690
					],
					"declarations": [
					  {
						"constant": false,
						"id": 3690,
						"mutability": "mutable",
						"name": "tokenId",
						"nameLocation": "1127:7:17",
						"nodeType": "VariableDeclaration",
						"scope": 3705,
						"src": "1119:15:17",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 3689,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "1119:7:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 3694,
					"initialValue": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 3691,
						  "name": "_tokenIdCounter",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3635,
						  "src": "1137:15:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Counter_$2458_storage",
							"typeString": "struct Counters.Counter storage ref"
						  }
						},
						"id": 3692,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "current",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2470,
						"src": "1137:23:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$2458_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$2458_storage_ptr_$",
						  "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
						}
					  },
					  "id": 3693,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1137:25:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1119:43:17"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 3695,
						  "name": "_tokenIdCounter",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3635,
						  "src": "1172:15:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_struct$_Counter_$2458_storage",
							"typeString": "struct Counters.Counter storage ref"
						  }
						},
						"id": 3697,
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "increment",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2484,
						"src": "1172:25:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$2458_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$2458_storage_ptr_$",
						  "typeString": "function (struct Counters.Counter storage pointer)"
						}
					  },
					  "id": 3698,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1172:27:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3699,
					"nodeType": "ExpressionStatement",
					"src": "1172:27:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3701,
						  "name": "to",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3683,
						  "src": "1219:2:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 3702,
						  "name": "tokenId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3690,
						  "src": "1223:7:17",
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
						"id": 3700,
						"name": "_safeMint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  1104,
						  1133
						],
						"referencedDeclaration": 1104,
						"src": "1209:9:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 3703,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1209:22:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3704,
					"nodeType": "ExpressionStatement",
					"src": "1209:22:17"
				  }
				]
			  },
			  "functionSelector": "40d097c3",
			  "id": 3706,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "id": 3686,
					  "name": "MINTER_ROLE",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 3632,
					  "src": "1096:11:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes32",
						"typeString": "bytes32"
					  }
					}
				  ],
				  "id": 3687,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 3685,
					"name": "onlyRole",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 38,
					"src": "1087:8:17"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1087:21:17"
				}
			  ],
			  "name": "safeMint",
			  "nameLocation": "1059:8:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3684,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3683,
					"mutability": "mutable",
					"name": "to",
					"nameLocation": "1076:2:17",
					"nodeType": "VariableDeclaration",
					"scope": 3706,
					"src": "1068:10:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 3682,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1068:7:17",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1067:12:17"
			  },
			  "returnParameters": {
				"id": 3688,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1109:0:17"
			  },
			  "scope": 3820,
			  "src": "1050:188:17",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "baseFunctions": [
				1540,
				1880
			  ],
			  "body": {
				"id": 3731,
				"nodeType": "Block",
				"src": "1422:73:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3725,
						  "name": "from",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3708,
						  "src": "1459:4:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 3726,
						  "name": "to",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3710,
						  "src": "1465:2:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 3727,
						  "name": "tokenId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3712,
						  "src": "1469:7:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "id": 3728,
						  "name": "batchSize",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3714,
						  "src": "1478:9:17",
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
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 3722,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "1432:5:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_GameToken_$3820_$",
							"typeString": "type(contract super GameToken)"
						  }
						},
						"id": 3724,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "_beforeTokenTransfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 1880,
						"src": "1432:26:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256,uint256)"
						}
					  },
					  "id": 3729,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1432:56:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3730,
					"nodeType": "ExpressionStatement",
					"src": "1432:56:17"
				  }
				]
			  },
			  "id": 3732,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 3717,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 3716,
					"name": "whenNotPaused",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 536,
					"src": "1361:13:17"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1361:13:17"
				}
			  ],
			  "name": "_beforeTokenTransfer",
			  "nameLocation": "1253:20:17",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 3720,
				"nodeType": "OverrideSpecifier",
				"overrides": [
				  {
					"id": 3718,
					"name": "ERC721",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 1554,
					"src": "1392:6:17"
				  },
				  {
					"id": 3719,
					"name": "ERC721Enumerable",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2042,
					"src": "1400:16:17"
				  }
				],
				"src": "1383:34:17"
			  },
			  "parameters": {
				"id": 3715,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3708,
					"mutability": "mutable",
					"name": "from",
					"nameLocation": "1282:4:17",
					"nodeType": "VariableDeclaration",
					"scope": 3732,
					"src": "1274:12:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 3707,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1274:7:17",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 3710,
					"mutability": "mutable",
					"name": "to",
					"nameLocation": "1296:2:17",
					"nodeType": "VariableDeclaration",
					"scope": 3732,
					"src": "1288:10:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 3709,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1288:7:17",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 3712,
					"mutability": "mutable",
					"name": "tokenId",
					"nameLocation": "1308:7:17",
					"nodeType": "VariableDeclaration",
					"scope": 3732,
					"src": "1300:15:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3711,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1300:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 3714,
					"mutability": "mutable",
					"name": "batchSize",
					"nameLocation": "1325:9:17",
					"nodeType": "VariableDeclaration",
					"scope": 3732,
					"src": "1317:17:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3713,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1317:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1273:62:17"
			  },
			  "returnParameters": {
				"id": 3721,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1422:0:17"
			  },
			  "scope": 3820,
			  "src": "1244:251:17",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "baseFunctions": [
				60,
				703,
				1738
			  ],
			  "body": {
				"id": 3748,
				"nodeType": "Block",
				"src": "1729:60:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3745,
						  "name": "interfaceId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3734,
						  "src": "1770:11:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bytes4",
							"typeString": "bytes4"
						  }
						],
						"expression": {
						  "id": 3743,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "1746:5:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_GameToken_$3820_$",
							"typeString": "type(contract super GameToken)"
						  }
						},
						"id": 3744,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberName": "supportsInterface",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 60,
						"src": "1746:23:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
						  "typeString": "function (bytes4) view returns (bool)"
						}
					  },
					  "id": 3746,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1746:36:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"functionReturnParameters": 3742,
					"id": 3747,
					"nodeType": "Return",
					"src": "1739:43:17"
				  }
				]
			  },
			  "functionSelector": "01ffc9a7",
			  "id": 3749,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "supportsInterface",
			  "nameLocation": "1578:17:17",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 3739,
				"nodeType": "OverrideSpecifier",
				"overrides": [
				  {
					"id": 3736,
					"name": "ERC721",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 1554,
					"src": "1661:6:17"
				  },
				  {
					"id": 3737,
					"name": "ERC721Enumerable",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2042,
					"src": "1669:16:17"
				  },
				  {
					"id": 3738,
					"name": "AccessControl",
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 315,
					"src": "1687:13:17"
				  }
				],
				"src": "1652:49:17"
			  },
			  "parameters": {
				"id": 3735,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3734,
					"mutability": "mutable",
					"name": "interfaceId",
					"nameLocation": "1603:11:17",
					"nodeType": "VariableDeclaration",
					"scope": 3749,
					"src": "1596:18:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bytes4",
					  "typeString": "bytes4"
					},
					"typeName": {
					  "id": 3733,
					  "name": "bytes4",
					  "nodeType": "ElementaryTypeName",
					  "src": "1596:6:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_bytes4",
						"typeString": "bytes4"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1595:20:17"
			  },
			  "returnParameters": {
				"id": 3742,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3741,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 3749,
					"src": "1719:4:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 3740,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "1719:4:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1718:6:17"
			  },
			  "scope": 3820,
			  "src": "1569:220:17",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3774,
				"nodeType": "Block",
				"src": "1865:150:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 3760,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 3757,
							"name": "index",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 3751,
							"src": "1883:5:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<",
						  "rightExpression": {
							"arguments": [],
							"expression": {
							  "argumentTypes": [],
							  "id": 3758,
							  "name": "totalSupply",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1777,
							  "src": "1891:11:17",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								"typeString": "function () view returns (uint256)"
							  }
							},
							"id": 3759,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "1891:13:17",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "1883:21:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "496e76616c696420746f6b656e20696e646578",
						  "id": 3761,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1906:21:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  },
						  "value": "Invalid token index"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  }
						],
						"id": 3756,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1875:7:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 3762,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1875:53:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3763,
					"nodeType": "ExpressionStatement",
					"src": "1875:53:17"
				  },
				  {
					"assignments": [
					  3765
					],
					"declarations": [
					  {
						"constant": false,
						"id": 3765,
						"mutability": "mutable",
						"name": "tokenId",
						"nameLocation": "1946:7:17",
						"nodeType": "VariableDeclaration",
						"scope": 3774,
						"src": "1938:15:17",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 3764,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "1938:7:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 3769,
					"initialValue": {
					  "arguments": [
						{
						  "id": 3767,
						  "name": "index",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3751,
						  "src": "1969:5:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 3766,
						"name": "tokenByIndex",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1800,
						"src": "1956:12:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256) view returns (uint256)"
						}
					  },
					  "id": 3768,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1956:19:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "1938:37:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3771,
						  "name": "tokenId",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3765,
						  "src": "2000:7:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 3770,
						"name": "ownerOf",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 755,
						"src": "1992:7:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
						  "typeString": "function (uint256) view returns (address)"
						}
					  },
					  "id": 3772,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1992:16:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"functionReturnParameters": 3755,
					"id": 3773,
					"nodeType": "Return",
					"src": "1985:23:17"
				  }
				]
			  },
			  "functionSelector": "1b732d46",
			  "id": 3775,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getOwnerByIndex",
			  "nameLocation": "1804:15:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3752,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3751,
					"mutability": "mutable",
					"name": "index",
					"nameLocation": "1828:5:17",
					"nodeType": "VariableDeclaration",
					"scope": 3775,
					"src": "1820:13:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3750,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "1820:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1819:15:17"
			  },
			  "returnParameters": {
				"id": 3755,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3754,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 3775,
					"src": "1856:7:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 3753,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1856:7:17",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1855:9:17"
			  },
			  "scope": 3820,
			  "src": "1795:220:17",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3798,
				"nodeType": "Block",
				"src": "2112:123:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 3789,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 3785,
							"name": "index",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 3779,
							"src": "2130:5:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<",
						  "rightExpression": {
							"arguments": [
							  {
								"id": 3787,
								"name": "owner",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 3777,
								"src": "2148:5:17",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 3786,
							  "name": "balanceOf",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 727,
							  "src": "2138:9:17",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
								"typeString": "function (address) view returns (uint256)"
							  }
							},
							"id": 3788,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2138:16:17",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "2130:24:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "496e76616c696420746f6b656e20696e646578",
						  "id": 3790,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2156:21:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  },
						  "value": "Invalid token index"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  }
						],
						"id": 3784,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2122:7:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 3791,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2122:56:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3792,
					"nodeType": "ExpressionStatement",
					"src": "2122:56:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3794,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3777,
						  "src": "2215:5:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 3795,
						  "name": "index",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3779,
						  "src": "2222:5:17",
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
						"id": 3793,
						"name": "tokenOfOwnerByIndex",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1766,
						"src": "2195:19:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (address,uint256) view returns (uint256)"
						}
					  },
					  "id": 3796,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2195:33:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 3783,
					"id": 3797,
					"nodeType": "Return",
					"src": "2188:40:17"
				  }
				]
			  },
			  "functionSelector": "ea720f88",
			  "id": 3799,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getTokenIdByOwner",
			  "nameLocation": "2034:17:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3780,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3777,
					"mutability": "mutable",
					"name": "owner",
					"nameLocation": "2060:5:17",
					"nodeType": "VariableDeclaration",
					"scope": 3799,
					"src": "2052:13:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 3776,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2052:7:17",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 3779,
					"mutability": "mutable",
					"name": "index",
					"nameLocation": "2075:5:17",
					"nodeType": "VariableDeclaration",
					"scope": 3799,
					"src": "2067:13:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3778,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "2067:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2051:30:17"
			  },
			  "returnParameters": {
				"id": 3783,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3782,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 3799,
					"src": "2103:7:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3781,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "2103:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2102:9:17"
			  },
			  "scope": 3820,
			  "src": "2025:210:17",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 3818,
				"nodeType": "Block",
				"src": "2313:106:17",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 3810,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 3807,
							"name": "index",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 3801,
							"src": "2331:5:17",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<",
						  "rightExpression": {
							"arguments": [],
							"expression": {
							  "argumentTypes": [],
							  "id": 3808,
							  "name": "totalSupply",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1777,
							  "src": "2339:11:17",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								"typeString": "function () view returns (uint256)"
							  }
							},
							"id": 3809,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2339:13:17",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "2331:21:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "496e76616c696420746f6b656e20696e646578",
						  "id": 3811,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2354:21:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  },
						  "value": "Invalid token index"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_65a52d0b87e2cd113e321109ad15f46a63446df8147d715a12472ee130f4f403",
							"typeString": "literal_string \"Invalid token index\""
						  }
						],
						"id": 3806,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2323:7:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 3812,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2323:53:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 3813,
					"nodeType": "ExpressionStatement",
					"src": "2323:53:17"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 3815,
						  "name": "index",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 3801,
						  "src": "2406:5:17",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 3814,
						"name": "tokenByIndex",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1800,
						"src": "2393:12:17",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256) view returns (uint256)"
						}
					  },
					  "id": 3816,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2393:19:17",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 3805,
					"id": 3817,
					"nodeType": "Return",
					"src": "2386:26:17"
				  }
				]
			  },
			  "functionSelector": "49f202ff",
			  "id": 3819,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "getTokenIdByIndex",
			  "nameLocation": "2250:17:17",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 3802,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3801,
					"mutability": "mutable",
					"name": "index",
					"nameLocation": "2276:5:17",
					"nodeType": "VariableDeclaration",
					"scope": 3819,
					"src": "2268:13:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3800,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "2268:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2267:15:17"
			  },
			  "returnParameters": {
				"id": 3805,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 3804,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 3819,
					"src": "2304:7:17",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 3803,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "2304:7:17",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2303:9:17"
			  },
			  "scope": 3820,
			  "src": "2241:178:17",
			  "stateMutability": "view",
			  "virtual": false,
			  "visibility": "public"
			}
		  ],
		  "scope": 3821,
		  "src": "384:2038:17",
		  "usedErrors": []
		}
	  ],
	  "src": "0:2422:17"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.9+commit.e5eed63a.Emscripten.clang"
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
	  },
	  "1676749231356": {
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
		  "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			  }
			],
			"name": "OwnershipTransferred",
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
		  },
		  "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			  }
			],
			"name": "Paused",
			"type": "event"
		  },
		  "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			  }
			],
			"name": "Unpaused",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0x2BEB171baCeB2dD22eF220efaa0d891f545DB83A",
		"transactionHash": "0x8cdb02d89acfdb38cb5573185240f4b4ac7a6e3f5e1d73de1a7e3a4101514e22"
	  },
	  "1677100811752": {
		"events": {},
		"links": {},
		"address": "0x84ED7E42ec5c537B70a049C7983D774D6744Cff8",
		"transactionHash": "0xe5114b423f9ef44645fd04c180498d2acedc66972cce4f8a957c5e95ff6b9059"
	  }
	},
	"schemaVersion": "3.4.11",
	"updatedAt": "2023-02-22T22:25:31.182Z",
	"networkType": "ethereum",
	"devdoc": {
	  "kind": "dev",
	  "methods": {
		"approve(address,uint256)": {
		  "details": "See {IERC721-approve}."
		},
		"balanceOf(address)": {
		  "details": "See {IERC721-balanceOf}."
		},
		"getApproved(uint256)": {
		  "details": "See {IERC721-getApproved}."
		},
		"getRoleAdmin(bytes32)": {
		  "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
		},
		"grantRole(bytes32,address)": {
		  "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event."
		},
		"hasRole(bytes32,address)": {
		  "details": "Returns `true` if `account` has been granted `role`."
		},
		"isApprovedForAll(address,address)": {
		  "details": "See {IERC721-isApprovedForAll}."
		},
		"name()": {
		  "details": "See {IERC721Metadata-name}."
		},
		"ownerOf(uint256)": {
		  "details": "See {IERC721-ownerOf}."
		},
		"paused()": {
		  "details": "Returns true if the contract is paused, and false otherwise."
		},
		"renounceRole(bytes32,address)": {
		  "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event."
		},
		"revokeRole(bytes32,address)": {
		  "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event."
		},
		"safeTransferFrom(address,address,uint256)": {
		  "details": "See {IERC721-safeTransferFrom}."
		},
		"safeTransferFrom(address,address,uint256,bytes)": {
		  "details": "See {IERC721-safeTransferFrom}."
		},
		"setApprovalForAll(address,bool)": {
		  "details": "See {IERC721-setApprovalForAll}."
		},
		"symbol()": {
		  "details": "See {IERC721Metadata-symbol}."
		},
		"tokenByIndex(uint256)": {
		  "details": "See {IERC721Enumerable-tokenByIndex}."
		},
		"tokenOfOwnerByIndex(address,uint256)": {
		  "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
		},
		"tokenURI(uint256)": {
		  "details": "See {IERC721Metadata-tokenURI}."
		},
		"totalSupply()": {
		  "details": "See {IERC721Enumerable-totalSupply}."
		},
		"transferFrom(address,address,uint256)": {
		  "details": "See {IERC721-transferFrom}."
		}
	  },
	  "version": 1
	},
	"userdoc": {
	  "kind": "user",
	  "methods": {},
	  "version": 1
	}
  }