import styled from 'styled-components';
import { Button } from 'antd';

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
    width: 55.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Texto = styled.div`
    opacity: 0.5;
`;
