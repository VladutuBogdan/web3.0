import { useContext } from 'react';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Input, Loader } from '../';
import { TransactionContext } from '../../context/TransactionContext';
import { shortenAddress } from '../../utils/functions';

const Crypto = () => {
    const { connectedAccount, isLoading, connectWallet, handleChange, handleSubmit } = useContext(TransactionContext);

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col md:mr-10'>
                    <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
                        Send Crypto <br /> across the world
                    </h1> 
                    <p className='text-left mt-5 text-white font-light md: w-9/12 w-11/12 text-base'> 
                        Explore the crypto world.
                    </p>

                    {
                        !connectedAccount && (
                            <button type="button" onClick={connectWallet} className="my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                                <span className='text-white text-base font-semibold'>Connect Wallet</span>
                            </button>
                        )
                    }

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className='rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Reliability
                        </div>
                        <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Security
                        </div>
                        <div className='sm:rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Ethereum
                        </div>
                        <div className='sm:rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Web 3.0
                        </div>
                        <div className='min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Low Fees
                        </div>
                        <div className='rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
                    <div className='p-3 justify-end items-start flex-column rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism'>
                        <div className='flex justify-between flex-col w-full h-full'>
                            <div className='flex justify-between items-start'>
                                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className='text-white font-light text-sm'>
                                    {
                                        connectedAccount ?  shortenAddress(connectedAccount) : '...'
                                    }
                                </p>
                                <p className='text-white font-semibold text-lg mt-1'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                        <Input placeholder="Address To" name="addressTo" type="text" onChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" onChange={handleChange} />
                        <Input placeholder="Enter message" name="message" type="text" onChange={handleChange} />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounder-full cursor-pointer">
                                Send Now
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crypto;
