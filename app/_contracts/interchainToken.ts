const abi = [
	{
		"inputs": [],
		"name": "interchainTokenId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "tokenId_",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "interchainTokenService",
		"outputs": [
			{
				"internalType": "address",
				"name": "service",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "destinationChain",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "recipient",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "metadata",
				"type": "bytes"
			}
		],
		"name": "interchainTransfer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "destinationChain",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "recipient",
				"type": "bytes"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "metadata",
				"type": "bytes"
			}
		],
		"name": "interchainTransferFrom",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
] as const;

export default abi;