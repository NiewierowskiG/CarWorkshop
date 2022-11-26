import { Timestamp } from 'rxjs';

export class HoursWorked{

  constructor(
    private _worker: Worker,
    private _hours: number,
    private _startTime: string,
    private _startEnd: string,
    private _addDate: string
  ) {}
  public get addDate(): string {
    return this._addDate;
  }
  public get startEnd(): string {
    return this._startEnd;
  }

  public get startTime(): string {
    return this._startTime;
  }

  public get hours(): number {
    return this._hours;
  }

  public get worker(): Worker {
    return this._worker;
  }

}


