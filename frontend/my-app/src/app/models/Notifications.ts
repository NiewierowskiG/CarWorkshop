import { Client } from './Client';
import { Worker } from "./Worker";
export class Notifications {

  constructor(
    private _sender: Worker,
    private _receiver: Client,
    private _content: string
  ) { }
  public get content(): string {
    return this._content;
  }

  public get receiver(): Client {
    return this._receiver;
  }

  public get sender(): Worker {
    return this._sender;
  }

}
