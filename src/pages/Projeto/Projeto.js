import React from 'react'
import HeaderProjeto from '../../components/HeaderProjeto/HeaderProjeto';
import Datas from '../../components/Datas/Datas';
import IndicadoresGerais from '../../components/IndicadoresGerais/IndicadoresGerais';
import IndicadoresPerformance from '../../components/IndicadoresPerformance/IndicadoresPerformance';
import PercentualEntrega from '../../components/PercentualEntrega/PercentualEntrega';
import Impeditivos from '../../components/Impeditivos/Impeditivos';
import Footer from '../../components/Footer/Footer';
import { DivHome, Titulo, Nefrostar, Separador, Semana, Historico } from './styles';


const Projeto = () => {
    return (
        <>
            <HeaderProjeto />
            <DivHome>
                <Historico>Histórico</Historico>
                <Titulo>
                    <Semana>2º Semana</Semana>
                    <Separador>/</Separador>
                    <Nefrostar>Nefrostar</Nefrostar>
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

export default Projeto;
