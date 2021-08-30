import styled from "styled-components";
import { Button } from "antd";

export const Div = styled.div`
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

export const BtnVoltar = styled(Button)`
    color: black;
    border: 2px solid #00FFA5;
    border-radius: 3rem;
    background: #00FFA5 0% 0% no-repeat;
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

