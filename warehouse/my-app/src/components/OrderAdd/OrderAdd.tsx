// import React from "react";
// import Crud from "../Crud/Crud";
// import ErrorValidate from "../ErrorValidate/ErrorValidate";
// import { OrderProps } from "../Order/OrderProps";

// import ValueValidate from "../ValueValidate/ValueValidate";
// import {isValidDateFormat} from "../ValueValidate/utils/validators";
// import order from "../Order/Order";



// interface Props {
//     onOrderFromAdd: (order: OrderProps) => void;
//     idsList: number[];
// }

// interface State {
//     order: OrderProps
//     errors: string[];
// }

// class OrderAdd extends React.Component<Props, State> {
//     findBestID = (idsList: number[]): number => {
//         idsList.sort((a, b) => a - b);
//         let bestID = 1;
//         for (let id of idsList) {
//             if (id > bestID) {
//                 return bestID;
//             } else if (id === bestID) {
//                 bestID++;
//             }
//         }
//         return bestID;
//     }

//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             order: {
//                 id: this.findBestID(this.props.idsList),
//                 worker: {
//                     person: {
//                         id: 4,
//                         name: "",
//                         surname: '',
//                         telNr: 0,
//                         email: '1@w.a'
//                     },
//                     position: {
//                         name: "",
//                         canCreateClients: false,
//                         canCreateWorkers: false,
//                     },
//                     salary: 0,
//                 },
//                 date: '',
//                 title: '',
//                 status: 'DONE',
//             },
//             errors: [],
//         };
//     }


//     isValidId = (id: string | number): boolean => {
//         if (typeof id !== "string") {
//             return false;
//         }

//         if (Number(id) <= 0) {
//             return false;
//         }
//         if (this.props.idsList.includes(Number(id))) {
//             return false;
//         }
//         return true;
//     };

//     handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (true) {
//             const order = {
//                 id: this.findBestID(this.props.idsList),
//                 worker: {  //TODO change to dynamic
//                     person: {
//                         id: this.state.order.worker.person.id,
//                         name: "adam",
//                         surname: 'malysz',
//                         telNr: 0,
//                         email: 'a@a.pl'
//                     },
//                     position: {
//                         name: "spryciarz",
//                         canCreateClients: false,
//                         canCreateWorkers: false,
//                     },
//                     salary: 0,
//                 },
//                 date: this.state.order.date,
//                 title: this.state.order.title,
//                 status: this.state.order.status
//             };
//             this.props.onOrderFromAdd(order);
//         }
//         this.setState((prevState) => {
//             const updatedOrder = { ...prevState.order, id: this.findBestID(this.props.idsList) };
//             return { order: updatedOrder }
//         });
//     };

//     handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { id, value } = event.target;
//         if (id === "ID") {
//             this.setState((prevState) => ({
//                 order: {
//                     ...prevState.order,
//                     id: Number(value)
//                 }
//             }));
//         } else {
//             this.setState((prevState) => ({
//                 order: {
//                     ...prevState.order,
//                     [id.toLowerCase()]: value
//                 }
//             }));
//         }
//     };


//     render() {
//         const validateTitle = (value: string | number) => String(value).length === 0;
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="ID">ID</label>

//                     <input id="ID" type='number' value={this.state.order.id}
//                         onChange={this.handleChange} />
//                     <ValueValidate value={this.state.order.id} validationFunction={this.isValidId} errorMessage={"Nieprawidłowe ID"} />
//                     <br />
//                     <label htmlFor="Date">Date (YYYY-MM-DD Format)</label>
//                     <input id="Date" value={this.state.order.date} onChange={this.handleChange} />
//                     <ValueValidate value={this.state.order.date} validationFunction={isValidDateFormat} errorMessage={"Data musi być podana we właściwej formie"} />
//                     <br />
//                     <label htmlFor="Title">Title</label>
//                     <input id="Title" value={this.state.order.title} onChange={this.handleChange} />
//                     <ValueValidate value={this.state.order.title} validationFunction={validateTitle} errorMessage={"Tytuł musi zostać podany"} />
//                     <Crud prop={this.state.order} propType={'order'}/>

//                 </form>
//                 {!(this.state.errors.length === 0) && <ErrorValidate error={this.state.errors} />}
//             </div>
//         );
//     }
// }

// export default OrderAdd;
