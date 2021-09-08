import React from 'react';
import { Table } from 'antd';
import { Card, TabelaStyle } from './styles';
import { Link } from 'react-router-dom';


const Tabela = (props) => {

const data = props.listStatusReport;

const columns = [
  {
    title: 'Nome do projeto',
    dataIndex: 'project',
    key: 'project',
    render: (text, record) => <Link to={'/statusReport/' + record.id}>{text}</Link>,
  },
  {
    title: 'Semana',
    dataIndex: 'week',
    key: 'week',
    render: text => <p>{text}º semana</p>, 
  },
  {
    title: 'Início da sprint',
    dataIndex: 'dateSprintStart',
    key: 'dateSprintStart',
    render: dateSprintStart => new Date(dateSprintStart).toLocaleDateString('pt-BR'),
  },
  {
    title: 'Final da sprint',
    dataIndex: 'dateSprintEnd',
    key: 'dateSprintEnd',
    render: dateSprintEnd => new Date(dateSprintEnd).toLocaleDateString('pt-BR'),
  },
];

  return (
    <Card>
      <TabelaStyle>
        <Table dataSource={data} columns={columns} pagination={false} scroll={{ y: 240 }} />
      </TabelaStyle>
    </Card>
  )
}

export default Tabela;
