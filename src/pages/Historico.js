import React from 'react';
import HeaderHistorico from '../components/HeaderHistorico';
import { Select } from 'antd';
import styled from 'styled-components';
import Tabela from '../components/Tabela';

const { Option } = Select;

const DivHistorico = styled.div`
    background: #F6F7F6;
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
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

const Titulo = styled.h3`
    font-family: 'Poppins';
    font-weight: bold;
    padding-bottom: 1rem;
`;

const Filtrar = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
`;

const Selects = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SelectStyle = styled(Select)`
    width: 30rem;
`;




const Historico = () => {
    return (
        <>
            <HeaderHistorico />
            <DivHistorico>
                <Card>
                    <Titulo>Histórico</Titulo>
                    <Filtrar>Filtrar histórico por</Filtrar>
                    <Selects>
                        <SelectStyle placeholder="Nome do projeto">
                            <Option></Option>
                        </SelectStyle>
                        <SelectStyle placeholder="Semana">
                            <Option></Option>
                        </SelectStyle>
                    </Selects>
                    <Tabela />
                </Card>
            </DivHistorico>
        </>
    )
}

export default Historico;
