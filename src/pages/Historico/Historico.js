import React from 'react';
import HeaderHistorico from '../../components/HeaderHistorico/HeaderHistorico';
import Tabela from '../../components/Tabela/Tabela';
import { Select } from 'antd';
import { DivHistorico, Card, Titulo, Filtrar, Selects, Selectp } from './styles';
import seta from '../../assets/seta.svg';

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
                        <Selectp>Nome projeto</Selectp>
                        <Select style={{width: "25rem"}} placeholder="Nome do projeto">
                            <Option></Option>
                        </Select>
                        <Selectp>Semana</Selectp>
                        <Select style={{width: "25rem"}} placeholder="Semana">
                            <Option></Option>
                        </Select>
                    </Selects>
                    <Tabela />
                </Card>
            </DivHistorico>
        </>
    )
}

export default Historico;
