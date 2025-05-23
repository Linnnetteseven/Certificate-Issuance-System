// src/utils/contractConfig.ts
import { ethers } from 'ethers';



export const AVALANCHE_FUJI_CONFIG = {
    chainId: '0xa869',
    chainName: 'Avalanche Fuji Testnet',
    nativeCurrency: {
        name: 'AVAX',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: ['https://avalanche-fuji.infura.io/v3/YOUR_INFURA_ID'],
    blockExplorerUrls: ['https://testnet.snowtrace.io/']
};
    // Contract details
export const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" //"0x0983Ef28Dc99E06D96f3a0CBCc4B3F74cd4404b0"; // Replace with your deployed contract address
export const CONTRACT_ABI = [
    // Replace with your contract's ABI

    {
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "OwnableInvalidOwner",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "OwnableUnauthorizedAccount",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "recipientName",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "issueDate",
					"type": "uint256"
				}
			],
			"name": "CertificateIssued",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "CertificateRevoked",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "isValid",
					"type": "bool"
				}
			],
			"name": "CertificateVerified",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "oldLimit",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "newLimit",
					"type": "uint256"
				}
			],
			"name": "GasLimitUpdated",
			"type": "event"
		},
		{
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
		{
			"inputs": [],
			"name": "gasLimit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_certificateId",
					"type": "uint256"
				}
			],
			"name": "getCertificate",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "id",
							"type": "uint256"
						},
						{
							"internalType": "string",
							"name": "recipientName",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "issueDate",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "isValid",
							"type": "bool"
						}
					],
					"internalType": "struct CertificateIssuanceSystem.Certificate",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_recipientName",
					"type": "string"
				}
			],
			"name": "issueCertificate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_certificateId",
					"type": "uint256"
				}
			],
			"name": "revokeCertificate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_newLimit",
					"type": "uint256"
				}
			],
			"name": "setGasLimit",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_certificateId",
                "type": "uint256"
            }
        ],
        "name": "verifyCertificate",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

