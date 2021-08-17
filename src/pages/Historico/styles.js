import styled from 'styled-components';
import { Select } from 'antd';

export const DivHistorico = styled.div`
    background: #F6F7F6;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 65rem;
    height: 35rem;
    padding: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: start;
`;

export const Titulo = styled.h3`
    font-family: 'Poppins';
    font-weight: bold;
    padding-bottom: 1rem;
`;

export const Filtrar = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
`;

export const Selects = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const SelectStyle = styled(Select)`
    width: 30rem;
`;