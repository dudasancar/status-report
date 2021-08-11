import React from 'react'
import styled from 'styled-components';
import Datas from '../components/Datas';
import IndicadoresGerais from '../components/IndicadoresGerais';
import IndicadoresPerformance from '../components/IndicadoresPerformance';

const DivHome = styled.div`
    background: #F6F7F6;
`;

const Title = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2rem;
`;

const Nefrostar = styled.h2`
    margin-right: 0.75rem;
`;

const Separador = styled.h2`
    font-size: 1rem;
    margin-top: 0.25rem;
`;

const Semana = styled.h2`
    margin-left: 0.75rem;
    font-weight: bold;
`;


const Home = () => {
    return (
        <DivHome>
            <Title>
                <Nefrostar>Nefrostar</Nefrostar>
                <Separador>/</Separador>
                <Semana>2º Semana</Semana>
            </Title>
            <Datas />
            <IndicadoresGerais />
            <IndicadoresPerformance />
        </DivHome>
    )
}

export default Home;
