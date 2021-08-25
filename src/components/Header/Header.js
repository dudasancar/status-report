import React from 'react';
import { Modal, InputNumber, DatePicker, Input, Form, Row, Col, Typography, Upload, message, Button } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import novo from '../../assets/novo.svg';
import {Div, ImgLogo, ImgNovo, Buttons, BtnCancelar, BtnSalvar, BtnHistorico, BtnNovo, BtnUpload } from './styles';
import locale from 'antd/es/date-picker/locale/pt_BR';
import { UploadOutlined } from '@ant-design/icons';



const { TextArea } = Input;
const { Title } = Typography;
const dateFormat = 'DD/MM/YYYY';
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };




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
            <BtnHistorico>
                <BrowserRouter>
                    <Link to="/historico" >
                        Histórico
                    </Link>
                </BrowserRouter>
            </BtnHistorico>
            <ImgLogo src={logo} />
            <BtnNovo type="primary" onClick={showModal}>Novo Status Report<ImgNovo src={novo} /></BtnNovo>
            <Modal 
                width="60rem"  
                visible={isModalVisible} 
                okText="Salvar" 
                okButtonProps={{type: 'primary', shape: 'round'}} 
                onOk={handleOk} 
                cancelText="Cancelar" 
                cancelButtonProps={{type: 'text', danger: 'true'}} 
                onCancel={handleCancel}>
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
                        <Upload {...props}>
                            <BtnUpload icon={<UploadOutlined />}><div>Selecione um arquivo TXT</div></BtnUpload>
                        </Upload>
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

export default Header;
