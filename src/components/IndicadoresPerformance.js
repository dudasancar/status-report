
import React from 'react';
import styled from 'styled-components';


const Cards = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const Card1 = styled.div`
    background: white;
    border: 2px solid #00BE7B;
    border-radius: 2rem;
    width: 21rem;
    height: 12rem;
    margin-right: 1rem;
`;

const Estimativah2 = styled.h2`
    padding-top: 2.5rem;
    color: #00BE7B;
    font-size: 2.8rem;
    margin: 0;
`;

const Estimativa = styled.p`
    color: #00BE7B;
`;

const Card2 = styled.div`
    background: white;
    border: 2px solid #F1A800;
    border-radius: 2rem;
    width: 21rem;
    height: 12rem;
    margin-right: 1rem;
`;

const EstimativasPendentesh2 = styled.h2`
    padding-top: 2.5rem;
    color: #F1A800;
    font-size: 2.8rem;
    margin: 0;
`;

const EstimativasPendentes = styled.p`
    color: #F1A800;
`;

const Card3 = styled.div`
    background: white;
    border: 2px solid #F63030;
    border-radius: 2rem;
    width: 21rem;
    height: 12rem;
`;

const HorasConsumidash2 = styled.h2`
    padding-top: 2.5rem;
    color: #F63030;
    font-size: 2.8rem;
    margin: 0;
`;

const HorasConsumidas = styled.p`
    color: #F63030;
`;

const IndicadoresPerformance = () => {
    return (
        <Cards>
                <Card1>
                    <Estimativah2>65hr</Estimativah2>
                    <Estimativa>Estimativa da sprint</Estimativa>
                </Card1>
                <Card2>
                    <EstimativasPendentesh2>33hr</EstimativasPendentesh2>
                    <EstimativasPendentes>Total de estimativas pendentes</EstimativasPendentes>
                </Card2>
                <Card3>
                    <HorasConsumidash2>33hr</HorasConsumidash2>
                    <HorasConsumidas>Total de horas consumidas</HorasConsumidas>
                </Card3>
        </Cards>
    )
}

export default IndicadoresPerformance;
