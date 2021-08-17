import React from 'react';
import { Progress } from 'antd';
import { Total, CardMaior, Texto, CardMenor } from './styles';

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
