import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Card1 = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 6rem; 
    width: 65rem;
    height: 3rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
`;

const Prazo = styled.p`
    color: #0098FA;
    margin-right: 0.25rem;
    padding-top: 0.65rem;
    font-family: 'Poppins';
    font-weight: bold;
`;

const Data = styled.p`
    font-family: 'Poppins';
    padding-top: 0.65rem;
`;

const Card2 = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 6rem; 
    width: 32rem;
    height: 3rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0.5rem;
`;

const Sprint2 = styled.p`
    color: #00BE7B;
    margin-right: 0.25rem;
    padding-top: 0.65rem;
    font-family: 'Poppins';
    font-weight: bold;
`;

const DiasRestantes = styled.p`
    color: #EE8020;
    margin-right: 0.25rem;
    padding-top: 0.65rem;
    font-family: 'Poppins';
    font-weight: bold;
`;


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
