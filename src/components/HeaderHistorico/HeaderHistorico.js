import React from 'react';
import { Modal, InputNumber, DatePicker, Input } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import voltar from '../../assets/voltar.svg';
import logo from '../../assets/logo.svg';
import novo from '../../assets/novo.svg';
import {Div, VoltarButton, ImgVoltar, ImgLogo, NovoButton, ImgNovo } from './styles';
import { Form, Row, Col } from 'antd';


const { TextArea } = Input;


const HeaderHistorico = () => {
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
            <VoltarButton type="default" shape="round">
                <ImgVoltar src={voltar} />
                <BrowserRouter>
                    <Link to ="/">
                         Voltar
                    </Link>
                </BrowserRouter>
            </VoltarButton>
            <ImgLogo src={logo} />
            <NovoButton type="primary" onClick={showModal}>Novo Status Report<ImgNovo src={novo} /></NovoButton>
            <Modal 
                style={{ fontFamily: 'Poppins'}} 
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

export default HeaderHistorico;
