import React from 'react';
import { Progress, Switch } from 'antd';
import { Total, CardMaior, Texto, CardMenor, Porcentagem, Dados, Horas, Horas1, Horas2, Horas3, Horas4, Horas5, Horas6 } from './styles';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import PoligonoVerde from '../../assets/PoligonoVerde.svg';
import PoligonoVermelho from '../../assets/PoligonoVermelho.svg';

const PercentualEntrega = () => {
    const [aparecer, setAparecer] = React.useState(true);


    const Aparecer = () => {
        aparecer ? setAparecer(false) : setAparecer(true);
    }

    return (
        <Total>
            <CardMaior>
                <Texto>
                <h3>Percentual de entrega por requisito</h3>
                <p>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                        onClick={Aparecer}
                    />
                    Exibir parâmetros de horas
                </p>
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
                      
                    <Progress percent={77} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Cadastro de usuário (77%)</Dados>
                    {aparecer&& (<Horas>M28h / m32h <img src={PoligonoVermelho}/> / R56h <img src={PoligonoVermelho}/></Horas>)}
                        
                    <Progress percent={100} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Login (100%)</Dados>
                    {aparecer&& (<Horas1>M28h / m12h <img src={PoligonoVerde}/> / R26h <img src={PoligonoVerde}/></Horas1>)}

                    <Progress percent={51} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Gestão de documentos (51%)</Dados>
                    {aparecer&& (<Horas2>M28h / m12h <img src={PoligonoVerde}/> / R56h <img src={PoligonoVermelho}/></Horas2>)} 

                    <Progress percent={10} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Lorem ipsum dolor (10%)</Dados>
                    {aparecer&& (<Horas3>M28h / m12h <img src={PoligonoVerde}/> / R56h <img src={PoligonoVermelho}/></Horas3>)} 

                    <Progress percent={5} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Dolor ipsum (5%)</Dados>
                    {aparecer&& (<Horas4>M28h / m12h <img src={PoligonoVerde}/> / R56h <img src={PoligonoVermelho}/></Horas4>)}

                    <Progress percent={20} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Ipsum dolor (20%)</Dados>
                    {aparecer&& (<Horas5>M28h / m12h <img src={PoligonoVerde}/> / R5h</Horas5>)} 

                    <Progress percent={1} showInfo={false} trailColor="#F6F7F6" strokeColor="#0A56A2" strokeWidth={25} />
                    <Dados>Lorem dolor (0%)</Dados>
                    {aparecer&& (<Horas6>M28h</Horas6>)} 
                    
                    
                </CardMenor>
                
            </CardMaior>
        </Total>
    )
}

export default PercentualEntrega;
