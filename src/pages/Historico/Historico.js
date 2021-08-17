import React from 'react';
import HeaderHistorico from '../../components/HeaderHistorico/HeaderHistorico';
import Tabela from '../../components/Tabela/Tabela';
import { Select } from 'antd';
import { DivHistorico, Card, Titulo, Filtrar, Selects, SelectStyle } from './styles';

const { Option } = Select;


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
