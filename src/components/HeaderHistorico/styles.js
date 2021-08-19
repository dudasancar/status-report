import styled from "styled-components";
import { Button } from "antd";

export const Div = styled.div`
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

export const VoltarButton = styled(Button)`
    color: black;
    border: 2px solid #00FFA5;
    border-radius: 3rem;
    background: #00FFA5 0% 0% no-repeat padding-box;
    width: 8rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

export const ImgVoltar = styled.img`
    margin-right: 0.5rem;
    margin-bottom: 0.2rem;
`;

export const ImgLogo = styled.img`
    width: 8rem;
`;

export const NovoButton = styled(Button)`
    color: white;
    background: #0064FA;
    border-radius: 3rem;
    border: 2px solid #0064FA;
    width: 12rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

export const ImgNovo = styled.img`
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
`;
