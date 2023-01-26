import axios from 'axios';
import {ItemProps} from "../Item/ItemProps";
import {AUTH_TOKEN} from "../Config/Config";
import {ItemType} from "../types/ItemTypes";
import {OrderPost} from "../types/OrderPost";

export const postWithPayload = async (prop: OrderPost | ItemProps, propType: string,) => {
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