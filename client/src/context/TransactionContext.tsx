import { createContext } from 'react';

import { TransactionValues } from './types';

const defaultValueContext = {
    connectedAccount: undefined,
    isLoading: false,
    connectWallet: () => {},
    handleSubmit: () => {},
    handleChange: () => {}
}

export const TransactionContext =  createContext<TransactionValues>(defaultValueContext);
