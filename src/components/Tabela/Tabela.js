import React from 'react';
import { Table } from 'antd';
import { Card, TabelaStyle } from './styles';


const Tabela = (props) => {


const data = [
  {
    key: '1',
    nome: 'Nefrostar',
    semana: '4º semana',
    inicio: '07/06/2021',
    final: '11/06/2021',
  },
  {
    key: '2',
    nome: 'Nefrostar',
    semana: '3º semana',
    inicio: '07/06/2021',
    final: '11/06/2021',
  },
  {
    key: '3',
    nome: 'Nefrostar',
    semana: '2º semana',
    inicio: '07/06/2021',
    final: '11/06/2021',
  },
  {
    key: '4',
    nome: 'Nefrostar',
    semana: '1º semana',
    inicio: '07/06/2021',
    final: '11/06/2021',
  },
];

const columns = [
  {
    title: 'Nome do projeto',
    dataIndex: `${props.listStatusReport && props.listStatusReport.project}`,
    key: `${props.listStatusReport && props.listStatusReport.project}`,
    render: text => <a href="/:id">{text}</a>,
  },
  {
    title: 'Semana',
    dataIndex: 'semana',
    key: 'semana',
  },
  {
    title: 'Início da sprint',
    dataIndex: 'inicio',
    key: 'inicio',
  },
  {
    title: 'Final da sprint',
    dataIndex: 'final',
    key: 'final',
  },
];

  return (
    <Card>
      <TabelaStyle>
        <Table dataSource={data} columns={columns} pagination={false} />
      </TabelaStyle>
    </Card>
  )
}

export default Tabela;
