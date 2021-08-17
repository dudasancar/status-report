import React from 'react';
import { Modal, InputNumber, DatePicker, Input } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import novo from '../../assets/novo.svg';
import {Div, HistoricoButton, ImgLogo, NovoButton, ImgNovo, Linha1, Linha2} from './styles';


const { TextArea } = Input;




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
