import React from 'react';
import { Progress, Checkbox } from 'antd';
import { Total, CardMaior, Texto, CardMenor, Porcentagem } from './styles';

const PercentualEntrega = () => {
    return (
        <Total>
            <CardMaior>
                <Texto>
                <h3>Percentual de entrega por requisito</h3>
                <p><Checkbox></Checkbox>Exibir parâmetros de horas</p>
                </Texto>
               
                <CardMenor>
                    <Porcentagem>
                        <p>0%</p>
                        <p>10%</p>
                        <p>20%</p>
                        <p>30%</p>
                        <p>40%</p>
                        <p>50%</p>
                        <p>60%</p>
                        <p>70%</p>
                        <p>80%</p>
                        <p>90%</p>
                        <p>100%</p>
                    </Porcentagem>
                    <Progress percent={77} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={100} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={51} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={10} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={5} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={20} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                    <Progress percent={1} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" />
                </CardMenor>
                
            </CardMaior>
        </Total>
    )
}

export default PercentualEntrega;
