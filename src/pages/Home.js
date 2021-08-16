import React from 'react'
import styled from 'styled-components';
import Datas from '../components/Datas/Datas';
import IndicadoresGerais from '../components/IndicadoresGerais';
import IndicadoresPerformance from '../components/IndicadoresPerformance';
import PercentualEntrega from '../components/PercentualEntrega';
import Impeditivos from '../components/Impeditivos';
import { Typography } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import Header from '../components/Header';

const { Title } = Typography;

const DivHome = styled.div`
    background: #F6F7F6;
`;

const Titulo = styled.div`
    font-family: 'Poppins';
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 2rem;
`;

const Nefrostar = styled(Title)`
    margin-right: 0.75rem;
    margin-bottom: 0;
    margin-top: 2.2rem;
`;

const Separador = styled(Title)`
    font-size: 1rem;
    margin-top: 0.25rem;
`;

const Semana = styled(Title)`
    margin-left: 0.75rem;
    font-weight: bold;
`;


const Home = () => {
    return (
        <>
            <Header />
            <DivHome>
                <Titulo>
                    <Nefrostar level={2}>Nefrostar</Nefrostar>
                    <Separador level={2}>/</Separador>
                    <Semana level={2}>2º Semana</Semana>
                </Titulo>
                <Datas />
                <IndicadoresGerais />
                <IndicadoresPerformance />
                <PercentualEntrega />
                <Impeditivos />
                <Footer />
            </DivHome>
        </>
    )
}

export default Home;
