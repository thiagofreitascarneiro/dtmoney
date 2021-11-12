import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'
import { useState } from "react";

import { NewTransactionModal } from './components/NewTransactionModal'

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
    <>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransaction}
        onRequestClose={handlecloseNewTransaction}
      />

      <GlobalStyle />
    </>
  );
}

