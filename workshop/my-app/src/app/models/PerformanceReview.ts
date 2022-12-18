import { Timestamp } from 'rxjs';
import { Worker } from "./Worker";

export class PerformanceReview{
  constructor(
    private _employer: Worker,
    private _employee: Worker,
    private _content: string,
    private _date: string
  ){}
  toJSON() {
    return {
      employer : this.employer,
      employee : this.employee,
      content : this.content,
      date : this.date
      }
    }
    public get date(): string {
      return this._date;
    }
    public set date(value: string) {
      this._date = value;
    }
    public get content(): string {
      return this._content;
    }
    public set content(value: string) {
      this._content = value;
    }
    public get employee(): Worker {
      return this._employee;
    }
    public set employee(value: Worker) {
      this._employee = value;
    }
    public get employer(): Worker {
      return this._employer;
    }
    public set employer(value: Worker) {
      this._employer = value;
    }
  }
