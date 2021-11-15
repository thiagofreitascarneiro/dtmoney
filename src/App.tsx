import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'
import { useState } from "react";
import { createContext } from 'react';

import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from "./components/hooks/useTransactions";

Modal.setAppElement('#root'); // recomendado pela documentação pra falar 
                              // qual que é o elemento root para aplicação
                              // questão de acessibilidade.

export function App() {
  const [isNewTransaction, setIsNewTransaction] = useState(false);
  
  function handleOpenNewTransaction() {
      setIsNewTransaction(true)
  }

  function handlecloseNewTransaction() {
      setIsNewTransaction(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransaction}
        onRequestClose={handlecloseNewTransaction}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

