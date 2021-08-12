import React from 'react';
import { Button, Image } from 'antd';
import styled from 'styled-components';



const Div = styled.div`
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

const HistoricoButton = styled(Button)`
    color: #00FFA5;
    border: 2px solid #00FFA5;
    border-radius: 3rem;
    background: black 0% 0% no-repeat padding-box;
    width: 8rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

const NovoButton = styled(Button)`
    color: white;
    background: #0064FA;
    border-radius: 3rem;
    border: 2px solid #0064FA;
    width: 12rem;
    height: 2rem;
    margin-top: 0.65rem;
`;


const Header = () => {
    return (
        <Div>
            <HistoricoButton>Histórico</HistoricoButton>
            <Image src="../assets/status.report.svg" />
            <NovoButton type="primary">Novo Status Report<Image src="../assets/novo.svg" /></NovoButton>
        </Div>
    )
}

export default Header;
