import React from 'react';
import styled from 'styled-components';
import { Divider, List, Typography } from 'antd';

const IndicadoresGerais = () => {

    const Titulo = styled.h3`
        text-align: justify;
        font-weight: bold;
        font-family: 'Poppins';
    `;

    const Div = styled.div`
        display: flex;
        justify-content: center;
    `;

    const Card = styled.div`
        background: white;
        border: 2px solid #EFF2F0;
        border-radius: 1.5rem;
        width: 65rem;
        height: 8rem;
        display: flex;
        justify-content: space-around;
    `;

    const Previstoh2 = styled.h2`
        color: #005F9C;
        font-family: 'Poppins';
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Previsto = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #005F9C;
        font: medium Poppins;
        font-size: 0.8rem;
    `;

    const Realizadoh2 = styled.h2`
        color: #03714A;
        font-family: 'Poppins';
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Realizado = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #03714A;
        font-family: 'Poppins';
        font-size: 0.8rem;
    `;

    const Performanceh2 = styled.h2`
        color: #F1A800;
        font-family: 'Poppins';
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Performance = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #F1A800;
        font-family: 'Poppins';
        font-size: 0.8rem;
    `;

    const Separador = styled(Divider)`
        width: 2rem;
        height: 4.5rem;
        margin-top: 1.5rem;
    `;

    const ListStyle = styled(List)`
        position: initial;
    `;




    const data = [
        '>= 0.95',
        '>= 0.85',
        '< 0.85',
    ];
    
    return (
        <div>
            <Titulo>Indicadores gerais do projeto</Titulo>
            <Div>
                <Card>
                    <div>
                        <Previstoh2>40%</Previstoh2>
                        <Previsto>Previsto</Previsto>
                    </div>
                    <Separador type="vertical" />
                    <div>
                        <Realizadoh2>33.84%</Realizadoh2>
                        <Realizado>Realizado</Realizado>
                    </div>
                    <Separador type="vertical" />
                    <div>
                        <Performanceh2>0,90</Performanceh2>
                        <Performance>Performance</Performance>
                    </div>
                    
                    <ListStyle
                        size="small"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                              <Typography.Text type="success">•</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                
                </Card>
            </Div>
        </div>
    )
}

export default IndicadoresGerais;
