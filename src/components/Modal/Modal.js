import React, { useState } from 'react'
import { BtnNovo, ImgNovo, Buttons, BtnCancelar, BtnSalvar, BtnUpload, Texto } from '../Modal/styles';
import locale from 'antd/es/date-picker/locale/pt_BR';
import upload from '../../assets/upload.svg';
import { Modal, InputNumber, DatePicker, Input, Form, Row, Col, Typography, Upload, message } from 'antd';
import novo from '../../assets/novo.svg';
import { registerStatusReport } from '../../services/ListStatusReport';


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

const ModalHeader = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const [ week, setWeek ] = useState('');
    const [ date, setDate ] = useState('');
    const [ dateSprint, setDateSprint ] = useState('');
    const [ boardData, setBoardData ] = useState('');
    const [ comments, setComments ] = useState('');
    
    function handleChangeWeek(value) {
       setWeek(value);
    }

    function handleChangeDate(value) {
        setDate(value);
    }

    function handleChangeSprint(value) {
        setDateSprint(value);
    }

    function handleBoard(value) {
        setBoardData(value);
    }

    function handleComments(e) {
        setComments(e.target.value);
    }

    const onFinish = (event) => {
        event.preventDefault();
        registerStatusReport({week, date, dateSprint, boardData, comments})
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
      };
    return (
        <div>
            <BtnNovo 
                type="primary" 
                onClick={showModal}>
                    Novo Status Report
                <ImgNovo src={novo} alt="novo" />
            </BtnNovo>

            <Modal 
                width="60rem"  
                visible={isModalVisible} 
                onCancel={handleCancel}>
            <Title style={{fontSize: "1.2rem", paddingBottom: "1rem"}}>Novo status report</Title>
            <form 
            layout="vertical" 
            onSubmit={onFinish}>
                <Row>
                    <Col span={6}>
                        <Form.Item label="Número da semana">
                            <InputNumber 
                                min={1} max={10} 
                                style={{ width: '95%' }} 
                                value={week}
                                onChange={handleChangeWeek}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                    <Form.Item label="Prazo total">
                            <DatePicker.RangePicker 
                                format={dateFormat} 
                                locale={locale} 
                                value={date}
                                onChange={handleChangeDate}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item label="Prazo da sprint">
                            <DatePicker.RangePicker 
                                format={dateFormat} 
                                locale={locale} 
                                value={dateSprint}
                                onChange={handleChangeSprint}
                             />
                        </Form.Item>
                    </Col>
                </Row>
                
                    <Form.Item label="Json trello">
                        <Upload {...props}>
                            <BtnUpload value={boardData} onChange={handleBoard}>
                                <Texto>Selecione um arquivo TXT</Texto>
                                <div><img src={upload} /></div>
                            </BtnUpload>
                        </Upload>
                    </Form.Item>
                
                    <Form.Item label="Impedimentos e riscos da sprint">
                        <TextArea 
                            rows={4} 
                            style={{width: "55.5rem"}}  
                            value={comments}
                            onChange={handleComments}
                        />
                    </Form.Item>
                <Buttons>
                    <BtnCancelar type="text" onClick={handleCancel}>Cancelar</BtnCancelar>
                    <BtnSalvar type="primary" htmlType="submit">Salvar</BtnSalvar>
                </Buttons>
                </form>
            </Modal>
        </div>
    )
}

export default ModalHeader;
