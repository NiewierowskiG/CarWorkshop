import { Timestamp } from 'rxjs';

export class HoursWorked{

  constructor(
    private _worker: Worker,
    private _hours: number,
    private _startTime: Timestamp<any>,
    private _startEnd: Timestamp<any>,
    private _addDate: Timestamp<any>
  ) {}
  public get addDate(): Timestamp<any> {
    return this._addDate;
  }
  public get startEnd(): Timestamp<any> {
    return this._startEnd;
  }

  public get startTime(): Timestamp<any> {
    return this._startTime;
  }

  public get hours(): number {
    return this._hours;
  }

  public get worker(): Worker {
    return this._worker;
  }

}


