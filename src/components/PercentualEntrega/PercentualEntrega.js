/* eslint-disable no-lone-blocks */
import React from "react";
import { Progress, Switch } from "antd";
import {
  Total,
  CardMaior,
  Texto,
  CardMenor,
  Porcentagem,
  Dados,
  Horas,
} from "./styles";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import PoligonoVerde from "../../assets/PoligonoVerde.svg";
import PoligonoVermelho from "../../assets/PoligonoVermelho.svg";

const PercentualEntrega = (props) => {
  const [aparecer, setAparecer] = React.useState(true);

  const Aparecer = () => {
    aparecer ? setAparecer(false) : setAparecer(true);
  };

  //const epics = props?.projectStatusReport?.epics;
  return (
    <Total>
      <CardMaior>
        <Texto>
          <h3>Percentual de entrega por requisito</h3>
          <p>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
              onClick={Aparecer}
            />
            Exibir parâmetros de horas
          </p>
        </Texto>

        <CardMenor>
          <Porcentagem>
            <p>0%</p>
            <p>10%</p>
            <p>20%</p>
            <p>30%</p>
            <p>40%</p>
            <p>50%</p>
            <p>60%</p>
            <p>70%</p>
            <p>80%</p>
            <p>90%</p>
            <p>100%</p>
          </Porcentagem>
          {props?.projectStatusReport?.epics.map((epic) => 
          <>
          <Progress
            percent={77}
            showInfo={false}
            trailColor="#F6F7F6"
            strokeColor="#0A56A2"
            strokeWidth={25}
          />
            <Dados>{epic.name}</Dados>
          {aparecer && (
            <Horas>
              M28h / m32h <img src={PoligonoVermelho} alt="poligono vermelho" />{" "}
              / R56h <img src={PoligonoVermelho} alt="poligono vermelho" />
            </Horas>
          )}
          </>
          )}
        </CardMenor>
      </CardMaior>
    </Total>
  );
};

export default PercentualEntrega;
