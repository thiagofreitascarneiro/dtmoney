import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

import Modal from 'react-modal';
import ReactModal from 'react-modal';

interface HeaderProps {
    onOpenNewTransaction: () => void;
}


export function Header({ onOpenNewTransaction }: HeaderProps) {
   

    return (
        <Container>
            <Content>
                <img src={ logoImg } alt="" />
                <button type="button" onClick={onOpenNewTransaction}>
                    Nova transação 
                </button>
               
            </Content>
        </Container>
    )
}