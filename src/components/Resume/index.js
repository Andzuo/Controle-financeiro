import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles'
import {
    FaArrowAltCircleUp,
    FaArrowCircleDown,
    FaDollarSign
}
from "react-icons/fa";


const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeItem title={"Entrada"} Icon={FaArrowAltCircleUp} value={income}/>
            <ResumeItem title={"Saida"} Icon={FaArrowCircleDown} value={expense} />
            <ResumeItem title={"Total"} Icon={FaDollarSign} value={total} />
        </C.Container>
    )
}

export default Resume;