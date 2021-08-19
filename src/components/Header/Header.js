import React from 'react';
import { Modal, InputNumber, DatePicker, Input, Form, Row, Col } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import novo from '../../assets/novo.svg';
import {Div, HistoricoButton, ImgLogo, NovoButton, ImgNovo } from './styles';


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
            <Modal 
                style={{ fontFamily: 'Poppins' }} 
                width="45rem" 
                title="Novo status report" 
                visible={isModalVisible} 
                okText="Salvar" 
                okButtonProps={{type: 'primary', shape: 'round'}} 
                onOk={handleOk} 
                cancelText="Cancelar" 
                cancelButtonProps={{type: 'text', danger: 'true'}} 
                onCancel={handleCancel}>
            <Form layout="vertical">
                <Row>
                    <Col span={6}>
                        <Form.Item label="Número da semana">
                            <InputNumber min={1} max={10} style={{ width: '95%' }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                    <Form.Item label="Prazo total">
                            <DatePicker.RangePicker style={{ width: '95%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item label="Prazo da sprint">
                            <DatePicker.RangePicker style={{ width: '95%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                    <Form.Item label="Json trello">
                        <Input placeholder="Selecione um arquivo.TXT"></Input>
                    </Form.Item>
                    <Form.Item label="Impedimentos e riscos da sprint">
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
            </Modal>
        </Div>
    )
}

export default Header;
