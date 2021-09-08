import React from 'react';
import { Cards, Card1, Prazo, Data, Card2, Sprint2, DiasRestantes } from './styles';




const Datas = (props) => {

    return (
        <>
            
            <Cards>
                <Card1>
                    <Prazo>Prazo total:</Prazo>
                    <Data>
                        {new Date(props.projectStatusReport?.dateStart).toLocaleDateString()} à {new Date(props.projectStatusReport?.dateEnd).toLocaleDateString()}
                    </Data>
                </Card1>
            </Cards>
            <Cards>
                <Card2>
                    <Sprint2>Sprint 2:</Sprint2>
                    <Data>
                        {new Date(props.projectStatusReport?.dateSprintStart).toLocaleDateString()} à {new Date(props.projectStatusReport?.dateSprintEnd).toLocaleDateString()}
                    </Data>
                </Card2>
                <Card2>
                    <DiasRestantes>Dias restantes do projeto:</DiasRestantes>
                    <Data>{props.projectStatusReport?.daysRemaining} dias</Data>
                </Card2>
            </Cards>
            
        </>
    )
}

export default Datas;
