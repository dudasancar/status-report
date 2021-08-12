import React from 'react';
import { Progress } from 'antd';
import styled from 'styled-components';

const Total = styled.div`
    display: flex;
    justify-content: center;
`;

const CardMaior = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 65rem;
    height: 30rem;
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Texto = styled.div`
    display: flex;
    font-family: 'Poppins';
`;

const CardMenor = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 60rem;
    height: 23rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 1rem 1rem 1rem;
`;

const PercentualEntrega = () => {
    return (
        <Total>
            <CardMaior>
                <Texto>
                <h3>Percentual de entrega por requisito</h3>
                <p>Exibir parâmetros de horas</p>
                </Texto>
               
                <CardMenor>
                    <Progress percent={77} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={100} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={51} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={10} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={5} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={20} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={1} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                </CardMenor>
                
            </CardMaior>
        </Total>
    )
}

export default PercentualEntrega;
