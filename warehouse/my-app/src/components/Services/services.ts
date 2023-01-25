import axios from 'axios';
import {ItemProps} from "../Item/ItemProps";
import {OrderProps} from "../Order/OrderProps";
import {AUTH_TOKEN} from "../Config/Config";

export const postWithPayload = async (prop: OrderProps | ItemProps, propType: string,) => {
    try {
        console.log(propType + "   " + prop);
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        switch (propType) {
            case 'orders':
                await axios.post('http://localhost:8000/orders/', prop);
                break;
            case 'items':
                await axios.post('http://localhost:8000/items/', prop);
                break;
            default:
                console.log("Invalid prop type")
        }
    } catch (error) {
        console.error(error);
    }
};