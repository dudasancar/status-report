import React from 'react';
import { Badge } from 'antd';
import { Titulo, DivCard, Card, Previstoh2, Previsto, Separador, Realizadoh2, Realizado, Performanceh2, Performance, BadgeStyle, DivTitulo, DivTitulo2 } from './styles';

const IndicadoresGerais = () => {   
    return (
        <>
            <DivTitulo>
                <DivTitulo2>
                    <Titulo>Indicadores gerais do projeto</Titulo>
                </DivTitulo2>
            </DivTitulo>
            <DivCard>
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
                <BadgeStyle>
                    <Badge status="success" text=">= 0.95" />
                    <Badge status="warning" text=">= 0.85" />
                    <Badge status="error" text="< 0.85" />
                </BadgeStyle>  

                </Card>
            </DivCard>
        </>
    )
}

export default IndicadoresGerais;
