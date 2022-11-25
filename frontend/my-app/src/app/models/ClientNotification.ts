import { Repair } from './Repair';
import { Timestamp } from 'rxjs';
export class ClientNotification {

  constructor(
    private _content: string,
    private _data: Timestamp<any>,
    private _repair: Repair
  ) { }
  public get repair(): Repair {
    return this._repair;
  }

  public get data(): Timestamp<any> {
    return this._data;
  }

  public get content(): string {
    return this._content;
  }

}
