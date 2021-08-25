import styled from 'styled-components';
import { Button } from 'antd';

export const Div = styled.div`
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

export const BtnHistorico = styled(Button)`
    color: #00FFA5;
    border: 2px solid #00FFA5;
    border-radius: 3rem;
    background: black 0% 0% no-repeat padding-box;
    width: 8rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

export const ImgLogo = styled.img`
    width: 8rem;
`;

export const BtnNovo = styled(Button)`
    color: white;
    background: #0064FA;
    border-radius: 3rem;
    border: 2px solid #0064FA;
    width: 12rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

export const ImgNovo = styled.img`
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const BtnCancelar = styled(Button)`
    color: #F63030;
`;

export const BtnSalvar = styled(Button)`
    background: #00BE7B;
    width: 8rem;
    border-radius: 6rem;
    border: #00BE7B;
`;

export const BtnUpload = styled(Button)`
    border-radius: 0.6rem;
    height: 2.5rem;
`;
