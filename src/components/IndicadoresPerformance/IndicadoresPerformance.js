import React from 'react';
import ajuda from '../../assets/ajuda.svg';
import { Titulo, Cards, Card1, Estimativah2, Estimativa, Card2, ImgAjuda, EstimativasPendentesh2, EstimativasPendentes, Card3, HorasConsumidash2, HorasConsumidas, DivTitulo, DivTitulo2 } from './styles';


const IndicadoresPerformance = () => {
    return (
        <>
        <DivTitulo>
            <DivTitulo2>
                <Titulo>Indicadores de performance da sprint</Titulo>
            </DivTitulo2>
        </DivTitulo>
        <Cards>
                <Card1>
                    <Estimativah2>65hr</Estimativah2>
                    <Estimativa>Estimativa da sprint</Estimativa>
                </Card1>
                <Card2>
                    <ImgAjuda src={ajuda} />
                    <EstimativasPendentesh2>33hr</EstimativasPendentesh2>
                    <EstimativasPendentes>Total de estimativas pendentes</EstimativasPendentes>
                </Card2>
                <Card3>
                    <HorasConsumidash2>33hr</HorasConsumidash2>
                    <HorasConsumidas>Total de horas consumidas</HorasConsumidas>
                </Card3>
        </Cards>
        </>
    )
}

export default IndicadoresPerformance;
