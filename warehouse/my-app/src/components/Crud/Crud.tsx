import React from 'react';
import './Crud.module.css';
import {OrderProps} from '../Order/OrderProps';

import {ItemProps} from "../Item/ItemProps";
import { AUTH_TOKEN } from '../Config/Config';
import axios from 'axios';



interface CrudProps {
    prop: OrderProps | ItemProps
    propType: string;
}


const Crud: React.FunctionComponent<CrudProps> = ({propType, prop}) => {
    const handleSubmit = async () => {
        try {
            //console.log(propType + "   " + prop);
            axios.defaults.headers.common['Authorization'] =AUTH_TOKEN;
            switch (propType) {
                case 'order':
                    await axios.post('http://localhost:8000/orders/', prop);
                    break;
                case 'item':
                    await axios.post('http://localhost:8000/items/', prop);
                    break;
                default:
                    console.log("Invalid prop type")
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button type="submit" onClick={handleSubmit}>
            Submit
        </button>
    );
}


export default Crud;
