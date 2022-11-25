import { Timestamp } from 'rxjs';
import { Worker } from './Worker';
import { Car } from './Car';
import { Client } from './Client';
export class Repair {


  constructor(
    private _client: Client,
    private _worker: Worker,
    private _car: Car,
    private _createTime: Timestamp<any>,
    private _endTime: Date,
    private _done: boolean,
    private _during: boolean,
    private _price: number
  ) { }
  public get price(): number {
    return this._price;
  }

  public get during(): boolean {
    return this._during;
  }

  public get done(): boolean {
    return this._done;
  }

  public get endTime(): Date {
    return this._endTime;
  }

  public get createTime(): Timestamp<any> {
    return this._createTime;
  }

  public get car(): Car {
    return this._car;
  }

  public get worker(): Worker {
    return this._worker;
  }

  public get client(): Client {
    return this._client;
  }

}

