
import { TransactionProviderProps } from "./types"
import { useTransactionProvider } from './hooks'
import { TransactionContext } from "./TransactionContext"

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
    const { connectedAccount, isLoading, connectWallet, handleChange, handleSubmit } = useTransactionProvider();

    return (
        <TransactionContext.Provider value={{ connectedAccount, isLoading, connectWallet, handleChange, handleSubmit }}>
            {children}
        </TransactionContext.Provider>
    )
}
