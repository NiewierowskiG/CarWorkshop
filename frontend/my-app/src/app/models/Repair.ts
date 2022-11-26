import { Timestamp } from 'rxjs';
import { Worker } from './Worker';
import { Car } from './Car';
import { Client } from './Client';
export class Repair {

  constructor(
    private _client: Client,
    private _worker: Worker,
    private _car: Car,
    private _createTime: String,
    private _endTime: String,
    private _done: boolean,
    private _during: boolean,
    private _price: number
  ) { }
  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get during(): boolean {
    return this._during;
  }
  public set during(value: boolean) {
    this._during = value;
  }
  public get done(): boolean {
    return this._done;
  }
  public set done(value: boolean) {
    this._done = value;
  }
  public get endTime(): String {
    return this._endTime;
  }
  public set endTime(value: String) {
    this._endTime = value;
  }
  public get car(): Car {
    return this._car;
  }
  public set car(value: Car) {
    this._car = value;
  }
  public get worker(): Worker {
    return this._worker;
  }
  public set worker(value: Worker) {
    this._worker = value;
  }
  public get createTime(): String {
    return this._createTime;
  }
  public set createTime(value: String) {
    this._createTime = value;
  }
}

