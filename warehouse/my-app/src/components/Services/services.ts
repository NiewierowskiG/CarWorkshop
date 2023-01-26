import {ItemProps} from "../Item/ItemProps";
import {AUTH_TOKEN} from "../Config/Config";
import {OrderPost} from "../types/OrderPost";
import axios from "axios";

export const postWithPayload = async (prop: OrderPost | ItemProps, propType: string,) => {
    try {
        //console.log(propType + "   " + prop);
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
export const putItem = async (prop: ItemProps) => {
    try {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // eslint-disable-next-line no-useless-concat
        console.log("url: " + 'http://localhost:8000/items/' + prop.id)
        await axios.put('http://localhost:8000/items/' + prop.id, prop);
    } catch (error) {
        console.error(error)
    }
}
export const deleteItem = async(prop: ItemProps) => {
    try{
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // eslint-disable-next-line no-useless-concat
        console.log("url: " + 'http://localhost:8000/items/' + prop.id)
        await axios.delete('http://localhost:8000/items/' + prop.id);
    }catch(error){
        console.log(error)
    }
}
export const fetchOrders = async () => {
    try {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        const response = await axios.get("http://localhost:8000/orders/");
        //console.log("hejo " + response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const fetchItems = async () => {
    try {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        const response = await axios.get("http://localhost:8000/items/");
        //console.log("hejo " + response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}