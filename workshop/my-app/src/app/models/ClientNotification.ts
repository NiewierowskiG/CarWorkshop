import { Repair } from './Repair';
import { Timestamp } from 'rxjs';
export class ClientNotification {

  constructor(
    private _content: string,
    private _data: string,
    private _repair: Repair
  ) { }
  toJSON() {
    return {
      content: this.content,
      data: this.data,
      repair: this.repair
      }
    };
  public get repair(): Repair {
    return this._repair;
  }

  public get data(): string {
    return this._data;
  }

  public get content(): string {
    return this._content;
  }

}
