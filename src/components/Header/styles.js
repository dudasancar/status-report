import styled from 'styled-components';
import { Button } from 'antd';

export const Div = styled.div`
    background: black;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

export const BtnHistorico = styled(Button)`
    color: #00FFA5;
    border: 2px solid #00FFA5;
    border-radius: 3rem;
    background: black 0% 0% no-repeat;
    width: 8rem;
    height: 2rem;
    margin-top: 0.65rem;
`;

export const ImgLogo = styled.img`
    width: 8rem;
`;