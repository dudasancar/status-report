import React, {useEffect, useState} from 'react';
import HeaderHistorico from '../../components/HeaderHistorico/HeaderHistorico';
import Tabela from '../../components/Tabela/Tabela';
import { Select } from 'antd';
import { DivHistorico, Card, Titulo, Filtrar, Selects, Selectp } from './styles';
import { getListStatusReport } from '../../services/ListStatusReport';

const { Option } = Select;


const Historico = () => {
    const [listStatusReport, setListStatusReport] = useState();
      useEffect(() => {
          getListStatusReport()
          .then((response) => {
            setListStatusReport(response)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(listStatusReport)
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
                    <Tabela listStatusReport={listStatusReport} />
                </Card>
            </DivHistorico>
        </>
    )
}

export default Historico;
