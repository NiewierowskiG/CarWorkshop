import PartItem from "../PartItem/PartItem";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ItemType} from "../types/ItemTypes";
import './OrderPartsList.css'
import {ItemProps} from "../Item/ItemProps";
import {postWithPayload} from "../Services/services";

type OrderPartsListProps = {
    items: ItemProps[];
    order: ItemType[];
    onSetOrder: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

const OrderPartsList: React.FC<OrderPartsListProps> = ({
                                                           items,
                                                           order,
                                                           onSetOrder,
                                                       }) => {
    const handleAddItem = (item: ItemType): void => onSetOrder([...order, item]);
    return (
        <div className="table-wrapper">
        <div className="table-scroll">
        <table
            className="table"
            style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                width: "100%",
            }}
        >
            <tr className="thead-dark">
                <th
                    style={{
                        width: "200px",
                        height: "50px",
                        border: "2px solid black",
                        textAlign: 'center',
                        backgroundColor: "lightgrey"
                    }}
                >
                    Nr. ID:
                </th>
                <th
                    style={{
                        width: "200px",
                        height: "50px",
                        border: "2px solid black",
                        textAlign: 'center',
                        backgroundColor: "lightgrey"
                    }}
                >
                    Nazwa części:
                </th>
                <th
                    style={{
                        width: "200px",
                        height: "50px",
                        border: "2px solid black",
                        textAlign: 'center',
                        backgroundColor: "lightgrey"
                    }}
                >
                    Cena (1 sztuka) :
                </th>
                <th
                    style={{
                        width: "200px",
                        height: "50px",
                        border: "2px solid black",
                        textAlign: 'center',
                        backgroundColor: "lightgrey"
                    }}
                >
                    Ilość:
                </th>
                <th
                    style={{
                        width: "200px",
                        height: "50px",
                        border: "2px solid black",
                        textAlign: 'center',
                        backgroundColor: "lightgrey"
                    }}
                >
                    Cena całkowita:
                </th>
            </tr>
            {items.map(item => (
                    <PartItem
                        onClick={handleAddItem}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        cost = {item.price * item.amount}
                    />
                ))}

        </table>
        </div>
        </div>
    );
};

export default OrderPartsList;

/*<PartItem onClick={handleAddItem} id={12} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={13} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={14} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={15} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={16} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={17} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={18} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={19} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={20} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={21} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={22} name="Orange" price={2.99} amount={3}/>*/