import styled from 'styled-components';
import { Divider } from 'antd';

export const DivTitulo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const DivTitulo2 = styled.div`
    width: 65rem;
    height: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Titulo = styled.h3`
    font-weight: bold;
    font-family: 'Poppins';
    display: flex;
    flex: 1;
`;

export const DivCard = styled.div`
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
background: white;
border: 2px solid #EFF2F0;
border-radius: 1.5rem;
width: 65rem;
height: 12rem;
display: flex;
justify-content: space-around;
`;

export const Previstoh2 = styled.h2`
color: #005F9C;
font-family: 'Poppins';
font-size: 3rem;
margin-bottom: 0;
padding-top: 3rem;
`;

export const Previsto = styled.p`
display: flex;
flex-wrap: nowrap;
justify-content: center;
color: #005F9C;
font: medium Poppins;
font-size: 0.8rem;
`;

export const Realizadoh2 = styled.h2`
color: #03714A;
font-family: 'Poppins';
font-size: 3rem;
margin-bottom: 0;
padding-top: 3rem;
`;

export const Realizado = styled.p`
display: flex;
flex-wrap: nowrap;
justify-content: center;
color: #03714A;
font-family: 'Poppins';
font-size: 0.8rem;
`;

export const Performanceh2 = styled.h2`
color: #F1A800;
font-family: 'Poppins';
font-size: 3rem;
margin-bottom: 0;
padding-top: 3rem;
`;

export const Performance = styled.p`
display: flex;
flex-wrap: nowrap;
justify-content: center;
color: #F1A800;
font-family: 'Poppins';
font-size: 0.8rem;
`;

export const Separador = styled(Divider)`
width: 2rem;
height: 4.5rem;
margin-top: 1.5rem;
`;

export const BadgeStyle = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
padding-top: 3rem;
text-align: start;
`;