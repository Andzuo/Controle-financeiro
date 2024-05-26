import React from 'react';
import * as C from './style';
import { 
    FaArrowAltCircleUp,
    FaArrowAltCircleDown,
    FaTrash
} from "react-icons/fa"

const GridItem = ({item, onDelete}) => {
    return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (
                    <FaArrowAltCircleDown color="red" />
                ) : (
                    <FaArrowAltCircleUp color="green" />
                )}
            </C.Td>
            <C.Td alignCenter>
            <C.button>
                <FaTrash onClick={() => onDelete(item.id)}/>
            </C.button>
            </C.Td>
        </C.Tr>
    )
}

export default GridItem;
