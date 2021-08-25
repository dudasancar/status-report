import styled from 'styled-components';

export const DivHistorico = styled.div`
    background: #F6F7F6;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    background: white;
    border: 2px solid #EFF2F0;
    border-radius: 1.5rem;
    width: 65rem;
    height: 35rem;
    padding: 1.2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: start;
`;

export const Titulo = styled.h3`
    font-family: 'Poppins';
    font-weight: bold;
    padding-bottom: 1rem;
`;

export const Filtrar = styled.p`
    font-family: 'Poppins';
    font-weight: bold;
`;

export const Selects = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 2rem;
    padding-right: 2rem;
    div.ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
        border-top-right-radius: 1.6rem;
        border-bottom-right-radius: 1.6rem;
        border: 2px solid #EFF2F0;
        width: 20rem;
        height: 3rem;
        padding-top: 0.5rem;
    }
`;

export const Selectp = styled.p`
    background: #F6F7F6;
    border-top-left-radius: 1.6rem;
    border-bottom-left-radius: 1.6rem;
    border: 2px solid #EFF2F0;
    width: 11rem;
    height: 3rem;
    text-align: center;
    padding-top: 0.7rem;
    opacity: 0.5;
    font-weight: bold;
`;