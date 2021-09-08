import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header';
import Datas from '../../components/Datas/Datas';
import IndicadoresGerais from '../../components/IndicadoresGerais/IndicadoresGerais';
import IndicadoresPerformance from '../../components/IndicadoresPerformance/IndicadoresPerformance';
import PercentualEntrega from '../../components/PercentualEntrega/PercentualEntrega';
import Impeditivos from '../../components/Impeditivos/Impeditivos';
import Footer from '../../components/Footer/Footer';
import { DivHome, Titulo, Nefrostar, Separador, Semana, Historico } from './styles';
import { getProjectStatusReport } from '../../services/ListStatusReport';


const Projeto = (props) => {
    const [projectStatusReport, setProjectStatusReport] = useState();
    const id = props.match.params.id;
      useEffect(() => {
          getProjectStatusReport(id)
          .then((response) => {
            setProjectStatusReport(response)
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <>
            <Header />
            <DivHome>
                <Historico>Histórico</Historico>
                <Titulo>
                    <Semana>{projectStatusReport?.week}º Semana</Semana>
                    <Separador>/</Separador>
                    <Nefrostar>{projectStatusReport?.project}</Nefrostar>
                </Titulo>
                <Datas projectStatusReport={projectStatusReport} />
                <IndicadoresGerais projectStatusReport={projectStatusReport} />
                <IndicadoresPerformance projectStatusReport={projectStatusReport} />
                <PercentualEntrega  />
                <Impeditivos />
                <Footer />
            </DivHome>
        </>
    )
}

export default Projeto;
