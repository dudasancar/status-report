import React from 'react';
import { Modal, InputNumber, DatePicker, Input, Form, Row, Col, Typography } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import voltar from '../../assets/voltar.svg';
import logo from '../../assets/logo.svg';
import novo from '../../assets/novo.svg';
import {Div, ImgVoltar, ImgLogo, ImgNovo, Buttons, BtnCancelar, BtnSalvar, BtnNovo, BtnVoltar } from './styles';
import locale from 'antd/es/date-picker/locale/pt_BR';


const { TextArea } = Input;
const { Title } = Typography;
const dateFormat = 'DD/MM/YYYY';

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
            <BtnVoltar type="default" shape="round">
                <ImgVoltar src={voltar} />
                <BrowserRouter>
                    <Link to ="/">
                         Voltar
                    </Link>
                </BrowserRouter>
            </BtnVoltar>
            <ImgLogo src={logo} />
            <BtnNovo type="primary" onClick={showModal}>Novo Status Report<ImgNovo src={novo} /></BtnNovo>
            
            <Modal 
                width="60rem" 
                visible={isModalVisible}>
            <Title style={{fontSize: "1.2rem", paddingBottom: "1rem"}}>Novo status report</Title>
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
                                <DatePicker.RangePicker format={dateFormat} locale={locale} />
                            </Form.Item>
                        </Col>
                    <Col span={9}>
                        <Form.Item label="Prazo da sprint">
                            <DatePicker.RangePicker format={dateFormat} locale={locale} />
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
                <Buttons>
                    <BtnCancelar type="text" onClick={handleCancel}>Cancelar</BtnCancelar>
                    <BtnSalvar type="primary" onClick={handleOk}>Salvar</BtnSalvar>
                </Buttons>
            </Modal>
        </Div>
    )
}

export default HeaderHistorico;
