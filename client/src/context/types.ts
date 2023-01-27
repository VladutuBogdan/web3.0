export interface TransactionProviderProps { 
    children: JSX.Element;
}

export interface TransactionValues {
    connectedAccount?: string;
    isLoading: boolean;
    connectWallet: () => void;
    handleChange: (e: any, name: string) => void;
    handleSubmit: (e: any) => void;
}
