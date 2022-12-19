import React, { useState } from 'react';
import "./App.css"
import ErrorValidate from "./ErrorValidate";

interface Props {

}

interface State {
  items_count: number;
  date: string;
  title: string;
  errors: string[];
}

class OrderAdd extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        items_count: 0,
        date: '',
        title: '',
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

  validate =  (): boolean => {
      console.log("weszlo")
      let errors: string[] = [];
      if (Number(this.state.items_count) < 0){
          errors.push("Liczba przedmiotów nie może być ujemna")
      }
      console.log(typeof this.state.date)
      if (!this.isValidDateFormat(this.state.date)){
          errors.push("Data musi być podana we właściwej formie")
      }
      if (this.state.title.length === 0){
          errors.push("Tytuł musi zostać podany")
      }
      this.setState({ errors: errors });
      console.log(errors)
      if(errors.length === 0){
        return true;
      }
      else 
        return false;
  }


  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.validate()){

    }

  };

  handleItemCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ items_count: Number(event.target.value)});
    console.log(this.state['items_count']);
  };

  handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
  };

  handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="ItemCount">Item Count</label>
            <input id="ItemCount" value={this.state.items_count} onChange={this.handleItemCountChange} />
            <br/>
            <label htmlFor="Date (YYYY-MM-DD Format)">Date</label>
            <input id="Date" value={this.state.date} onChange={this.handleDateChange} />
            <br/>
            <label htmlFor="Title">Title</label>
            <input id="Title" value={this.state.title} onChange={this.handleTitleChange} />
            <button type="submit">Submit</button>
          </form>
          {!(this.state.errors.length === 0) && <ErrorValidate error={this.state.errors}/>}
      </div>
    );
  }
}

export default OrderAdd;
