import React from 'react';
import styled from 'styled-components';
import { Divider, List, Typography } from 'antd';

const IndicadoresGerais = () => {

    const Title = styled.h3`
        display: flex;
        justify-content: initial;
        margin-left: 10.5rem;
        font-weight: bold;
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
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Previsto = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #005F9C;
        font-weight: bold;
    `;

    const Realizadoh2 = styled.h2`
        color: #03714A;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Realizado = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #03714A;
        font-weight: bold;
    `;

    const Performanceh2 = styled.h2`
        color: #F1A800;
        font-weight: bold;
        font-size: 3rem;
        margin-bottom: 0;
        padding-top: 0.75rem;
    `;

    const Performance = styled.p`
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        color: #F1A800;
        font-weight: bold;
    `;

    const Separador = styled(Divider)`
        width: 2rem;
        height: 4.5rem;
        margin-top: 1.5rem;
    `;

    const ListStyle = styled.div`
        display: flex;
        flex-wrap: wrap;
    `;




    const data = [
        '>= 0.95',
    ];
    const data1 = [
        '>= 0.85',
    ];
    const data2 = [
        '< 0.85',
    ];
    return (
        <div>
            <Title>Indicadores gerais do projeto</Title>
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
                    <ListStyle>
                    <List
                        size="small"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                              <Typography.Text type="success">•</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                    <List
                        size="small"
                        dataSource={data1}
                        renderItem={item => (
                            <List.Item>
                              <Typography.Text type="warning">•</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                    <List
                        size="small"
                        dataSource={data2}
                        renderItem={item => (
                            <List.Item>
                              <Typography.Text type="danger">•</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </ListStyle>
                </Card>
            </Div>
        </div>
    )
}

export default IndicadoresGerais;
