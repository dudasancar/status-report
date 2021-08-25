import React from 'react'
import Datas from '../../components/Datas/Datas';
import IndicadoresGerais from '../../components/IndicadoresGerais/IndicadoresGerais';
import IndicadoresPerformance from '../../components/IndicadoresPerformance/IndicadoresPerformance';
import PercentualEntrega from '../../components/PercentualEntrega/PercentualEntrega';
import Impeditivos from '../../components/Impeditivos/Impeditivos';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { DivHome, Titulo, Nefrostar, Separador, Semana } from './styles';



const Home = () => {
    return (
        <>
        <Header />
            <DivHome>
                <Titulo>
                    <Nefrostar>Nefrostar</Nefrostar>
                    <Separador>/</Separador>
                    <Semana>2º Semana</Semana>
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
