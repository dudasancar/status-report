import React from 'react';
import { Cards, Card1, Prazo, Data, Card2, Sprint2, DiasRestantes } from './styles';




const Datas = () => {
    return (
        <>
            
            <Cards>
                <Card1>
                    <Prazo>Prazo total:</Prazo>
                    <Data>01/05/2021 à 30/06/2021</Data>
                </Card1>
            </Cards>
            <Cards>
                <Card2>
                    <Sprint2>Sprint 2:</Sprint2>
                    <Data>07/06/2021 à 30/06/2021</Data>
                </Card2>
                <Card2>
                    <DiasRestantes>Dias restantes do projeto:</DiasRestantes>
                    <Data>10 dias úteis</Data>
                </Card2>
            </Cards>
            
        </>
    )
}

export default Datas;
