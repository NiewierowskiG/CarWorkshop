import { Timestamp } from 'rxjs';

export class HoursWorked{


  constructor(
    private _worker: Worker,
    private _hours: number,
    private _startTime: string,
    private _endTime: string,
    private _addDate: string
  ) {}
  toJSON() {
    return {
      worker: this.worker,
      hours: this.hours,
      startTime: this.startTime,
      endTime: this.endTime,
      addDate: this.addDate
      }
    };
    public get endTime(): string {
      return this._endTime;
    }
    public set endTime(value: string) {
      this._endTime = value;
    }
  public get addDate(): string {
    return this._addDate;
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


