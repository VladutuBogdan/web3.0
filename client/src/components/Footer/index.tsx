const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <h1 className='text-xl font-extrabold text-white'>Crypto Send</h1>
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap">
                    <p className="text-white p-2">CryptoSend</p>
                    <p className="text-white p-2">Tutorials</p>
                    <p className="text-white p-2">GitHub</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
