import React from 'react';
import { Button, Modal, InputNumber, DatePicker, Input } from 'antd';
import styled from 'styled-components';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../assets/logo.svg';
import novo from '../assets/novo.svg';


const { TextArea } = Input;

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

const ImgLogo = styled.img`
    width: 8rem;
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

const ImgNovo = styled.img`
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
`;

const Linha1 = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Linha2 = styled.div`
    display: flex;
`;


const Header = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
        <Div>
            <HistoricoButton>
                <BrowserRouter>
                    <Link to="/historico" >
                        Histórico
                    </Link>
                </BrowserRouter>
            </HistoricoButton>
            <ImgLogo src={logo} />
            <NovoButton type="primary" onClick={showModal}>Novo Status Report<ImgNovo src={novo} /></NovoButton>
            <Modal width="50rem" title="Novo status report" visible={isModalVisible} okText="Salvar" onOk={handleOk} cancelText="Cancelar" onCancel={handleCancel}>
                <Linha1>
                    <p>Número da semana</p> 
                    <p>Prazo total</p>
                    <p>Prazo da sprint</p>
                </Linha1>
                <Linha2>
                    <InputNumber min={1} max={10} />
                    <DatePicker.RangePicker style={{ width: '40%' }} />
                    <DatePicker.RangePicker style={{ width: '40%' }} />
                </Linha2>
                <p>Impedimentos e Riscos da Sprint</p>
                <TextArea rows={4} />
            </Modal>
        </Div>
    )
}

export default Header;
