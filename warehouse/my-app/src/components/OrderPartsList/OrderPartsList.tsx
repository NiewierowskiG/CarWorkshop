import PartItem from "../PartItem/PartItem";
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ItemType} from "../types/ItemTypes";
import './OrderPartsList.css'

type OrderPartsListProps = {
    order: ItemType[];
    onSetOrder: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

const OrderPartsList: React.FC<OrderPartsListProps> = ({
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
                    ID:
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
                    Name:
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
                    Price:
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
                    Amount:
                </th>
            </tr>
            <PartItem
                onClick={handleAddItem}
                id={11}
                name="Apple"
                price={1.99}
                amount={5}
            />
            <PartItem onClick={handleAddItem} id={12} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={13} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={14} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={15} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={16} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={17} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={18} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={19} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={20} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={21} name="Orange" price={2.99} amount={3}/>
            <PartItem onClick={handleAddItem} id={22} name="Orange" price={2.99} amount={3}/>
        </table>
        </div>
        </div>
    );
};

export default OrderPartsList;
