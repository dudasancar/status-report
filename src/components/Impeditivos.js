import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';


const Total = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const CardMaior = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 65rem;
    height: 16rem;
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Titulo = styled.h3`
    font-weight: bold;
    font-family: 'Poppins';
    display: flex;
    flex: 1;
`;


const CardMenor = styled.div`
    background: #EFF2F0;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 63rem;
    height: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.5rem;
`;

const Paragrafo = styled.p`
    text-align: start;
    font-family: 'Poppins';
    font-size: 0.75rem;
`;

const PercentualEntrega = () => {
    return (
        <Total>
            <CardMaior>
                
                <Titulo>Impeditivos/riscos da sprint</Titulo>
                
               
                <CardMenor>
                    <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragrafo>
                </CardMenor>
                
            </CardMaior>
        </Total>
    )
}

export default PercentualEntrega;
