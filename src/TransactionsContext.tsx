import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;  
};

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionsProvidersProps {
    children: ReactNode;
};

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    
    );
                                // children: desestruturando e 
                                // pegando o conteudo do componente.
export function TransactionsProvider({children }: TransactionsProvidersProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);


    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
}, []);

async function createTransaction(transactionInput: TransactionInput) {
   const response =  await api.post('/transactions', {
       ...transactionInput,
       createAt: new Date(),
   })
   const { transaction } = response.data;

   setTransactions([
       ...transactions,
       transaction,
   ]);

}

return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
    </TransactionsContext.Provider>
)

}