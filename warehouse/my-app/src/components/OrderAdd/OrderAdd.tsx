import React from 'react';
import "../App/App.module.css"
import ErrorValidate from "../ErrorValidate/ErrorValidate";
import { OrderProps } from '../Order/OrderProps';
import ValueValidate from "../ValueValidate/ValueValidate";
import Crud from '../Crud/Crud';


interface Props {
    onOrderFromAdd: (order: OrderProps) => void;
    idsList: number[];
}

interface State {
    id: number;
    items_count: number;
    date: string;
    title: string;
    status: string;
    errors: string[];
}

class OrderAdd extends React.Component<Props, State> {
    findBestID = (idsList: number[]): number => {
        idsList.sort((a, b) => a - b);
        let bestID = 1;
        for (let id of idsList) {
            if (id > bestID) {
                return bestID;
            } else if (id === bestID) {
                bestID++;
            }
        }
        return bestID;
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            id: this.findBestID(this.props.idsList),
            items_count: 1,
            date: '',
            title: '',
            status: '',
            errors: [],
        };
    }

    isValidDateFormat = (dateString: string | number): boolean => {
        if (typeof dateString !== 'string') {
            return true;
        }
        const dateParts = dateString.split('-');
        if (dateParts.length !== 3) {
            return true;
        }
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        if (
            !Number.isInteger(year) ||
            !Number.isInteger(month) ||
            !Number.isInteger(day)
        ) {
            return true;
        }
        if (month < 1 || month > 12) {
            return true;
        }
        if (day < 1 || day > 31) {
            return true;
        }
        return false;
    };
    isValidId = (id: string | number): boolean => {
        if (typeof id !== "string") {
            return false;
        }

        if (Number(id) <= 0) {
            return false;
        }
        if (this.props.idsList.includes(Number(id))) {
            return false;
        }
        return true;
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (true) {
            const order = {
                id: this.findBestID(this.props.idsList),
                items_count: this.state.items_count,
                date: this.state.date,
                title: this.state.title,
                status: this.state.status
            };
            this.props.onOrderFromAdd(order);
        }
        this.setState({ id: this.findBestID(this.props.idsList) });
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        if (id === "ID" || id === "items_count") {
            this.setState({
                ...this.state,
                [id.toLowerCase()]: Number(value),
            })
        } else {
            this.setState({
                ...this.state,
                [id.toLowerCase()]: value,
            });
        }

    };



    render() {
        const validateTitle = (value: string | number) => String(value).length === 0;
        const validateitems_count = (value: number | string) => Number(value) < 0;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="ID">ID</label>
                    <input id="ID" type='number' value={this.state.id}
                        onChange={this.handleChange} />
                    <ValueValidate value={this.state.id} validationFunction={this.isValidId} errorMessage={"Nieprawidłowe ID"} />
                    <br />
                    <label htmlFor="items_count">Item Count</label>
                    <input id="items_count" type='number' value={this.state.items_count}
                        onChange={this.handleChange} />
                    <ValueValidate value={this.state.items_count} validationFunction={validateitems_count} errorMessage={"Liczba przedmiotów nie może być ujemna"} />
                    <br />
                    <label htmlFor="Date">Date (YYYY-MM-DD Format)</label>
                    <input id="Date" value={this.state.date} onChange={this.handleChange} />
                    <ValueValidate value={this.state.date} validationFunction={this.isValidDateFormat} errorMessage={"Data musi być podana we właściwej formie"} />
                    <br />
                    <label htmlFor="Title">Title</label>
                    <input id="Title" value={this.state.title} onChange={this.handleChange} />
                    <ValueValidate value={this.state.title} validationFunction={validateTitle} errorMessage={"Tytuł musi zostać podany"} />
                    <Crud order={this.state} />
                </form>
                {!(this.state.errors.length === 0) && <ErrorValidate error={this.state.errors} />}
            </div>
        );
    }
}

export default OrderAdd;
