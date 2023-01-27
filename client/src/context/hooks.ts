import { useEffect, useState } from 'react';
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const useTransactionProvider = () => {
    const [connectedAccount, setConnectedAccount] = useState('');
    const [formData, setFormData] = useState({ 
        addressTo: '',
        amount: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: e.target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const { addressTo, amount, message } = formData;

        if (!addressTo || !amount || !message) return;

        sendTransaction();
    }

    const isWalletConnected = async () => {
        try {
            if (!window?.ethereum) return alert('Please install metamask');

            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    
            if (accounts.length > 0) {
                setConnectedAccount(accounts[0]);
            } else {
                console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);
            
            throw new Error('No ethereum object');
        }
    }

    const connectWallet = async () => {
        try {
            if (!window?.ethereum) return alert('Please install metamask');

            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            setConnectedAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }
    }

    const sendTransaction = async () => {
        try {
            if (!window?.ethereum) return alert('Please install metamask');

            const { addressTo, amount, message } = formData;

            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    gas: '0x5208', // hex = 21000 GWEI
                    value: parsedAmount._hex
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message);

            setIsLoading(true);

            console.log(`Loading: ${transactionHash.hash}`);

            await transactionHash.wait();

            setIsLoading(false);

            console.log(`Success: ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            const allTransactions = await transactionContract.getAllTransactions();

            console.log(transactionCount.toNumber(), allTransactions);
        } catch (error) {
            console.log(error);

            throw new Error('No ethereum object');
        }
    }

    useEffect(() => {
        isWalletConnected();
    }, [])

    return {
        connectedAccount,
        isLoading,
        connectWallet,
        handleChange,
        handleSubmit
    }
}
