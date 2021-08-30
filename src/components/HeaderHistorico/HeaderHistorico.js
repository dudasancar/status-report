import React from 'react';
import { Link } from 'react-router-dom';
import voltar from '../../assets/voltar.svg';
import logo from '../../assets/logo.svg';
import {Div, ImgVoltar, ImgLogo, BtnVoltar } from './styles';
import ModalHeader from '../Modal/Modal';


const HeaderHistorico = () => {
    return (
        <Div>
            <BtnVoltar>
                <ImgVoltar src={voltar} />
                <Link to ="/">
                    Voltar
                </Link>
            </BtnVoltar>
            <ImgLogo src={logo} />
            <ModalHeader />
        </Div>
    )
}

export default HeaderHistorico;
