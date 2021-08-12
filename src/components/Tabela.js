import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const dataSource = [
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
      dataIndex: 'nome',
      key: 'nome',
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

  const Card = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;
  `;

  const TabelaStyle = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 60rem;
    height: 23rem;
    padding: 0.75rem;
  `;

const Tabela = () => {
    return (
        <Card>
        <TabelaStyle>
            <Table dataSource={dataSource} columns={columns} />
        </TabelaStyle>
        </Card>
    )
}

export default Tabela;
