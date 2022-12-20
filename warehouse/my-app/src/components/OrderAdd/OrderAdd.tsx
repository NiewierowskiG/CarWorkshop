import React from 'react';
import "../App/App.module.css"
import ErrorValidate from "../ErrorValidate/ErrorValidate";
import { OrderProps } from '../Order/OrderProps';


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

    isValidDateFormat = (dateString: string): boolean => {
        if (typeof dateString !== 'string') {
            return false;
        }
        const dateParts = dateString.split('-');
        if (dateParts.length !== 3) {
            return false;
        }
        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        if (
            !Number.isInteger(year) ||
            !Number.isInteger(month) ||
            !Number.isInteger(day)
        ) {
            return false;
        }
        if (month < 1 || month > 12) {
            return false;
        }
        if (day < 1 || day > 31) {
            return false;
        }
        return true;
    };
    isValidId = (id: number): boolean => {
        if (typeof id !== "number") {
            return false;
        }
        if (id <= 0) {
            return false;
        }
        if (this.props.idsList.includes(id)) {
            return false;
        }
        return true;
    };

    validate = (): boolean => {
        let errors: string[] = [];
        if (Number(this.state.items_count) <= 0) {
            errors.push("Liczba przedmiotów nie może być ujemna ani równa 0")
        }
        console.log(typeof this.state.date)
        if (!this.isValidDateFormat(this.state.date)) {
            errors.push("Data musi być podana we właściwej formie")
        }
        if (this.state.title.length === 0) {
            errors.push("Tytuł musi zostać podany")
        }
        if (!this.isValidId(this.state.id)) {
            errors.push("Nieprawidłowe ID")
        }
        this.setState({ errors: errors });
        console.log(errors)
        if (errors.length === 0) {
            return true;
        } else
            return false;
    }


    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (this.validate()) {
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

    handleItemCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ items_count: Number(event.target.value) });
    };

    handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: event.target.value });
    };

    handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ title: event.target.value });
    };
    handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ id: Number(event.target.value) });
    };

    handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;

        if (name === 'id' || name === 'items_count') {
            this.setState({
                id: Number(value)
            });
        }
        else {
            this.setState({
                [name]: value
            });
        }


    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="ID">ID</label>
                    <input id="ID" type='number' value={this.state.id}
                        onChange={this.handleIdChange} />
                    <br />
                    <label htmlFor="ItemCount">Item Count</label>
                    <input id="ItemCount" type='number' value={this.state.items_count}
                        onChange={this.handleItemCountChange} />
                    <br />
                    <label htmlFor="Date (YYYY-MM-DD Format)">Date</label>
                    <input id="Date" value={this.state.date} onChange={this.handleData} />
                    <br />
                    <label htmlFor="Title">Title</label>
                    <input id="Title" value={this.state.title} onChange={this.handleTitleChange} />
                    <button type="submit">Submit</button>
                </form>
                {!(this.state.errors.length === 0) && <ErrorValidate error={this.state.errors} />}
            </div>
        );
    }
}

export default OrderAdd;
