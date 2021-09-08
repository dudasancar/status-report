import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import {Div, ImgLogo, BtnHistorico } from './styles';
import ModalHeader from '../Modal/Modal';




const Header = () => {
    return (
        <Div>
            <BtnHistorico>
                <Link to="/">
                    Histórico
                </Link>
            </BtnHistorico>
            <ImgLogo src={logo} />
            <ModalHeader />
        </Div>
    )
}

export default Header;
