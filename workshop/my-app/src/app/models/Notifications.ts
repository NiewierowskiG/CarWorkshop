import { Client } from './Client';
import { Worker } from "./Worker";
export class Notifications {
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public get receiver(): Client {
    return this._receiver;
  }
  public set receiver(value: Client) {
    this._receiver = value;
  }
  public get sender(): Worker {
    return this._sender;
  }
  public set sender(value: Worker) {
    this._sender = value;
  }

  constructor(
    private _sender: Worker,
    private _receiver: Client,
    private _content: string
  ) { }
  toJSON() {
    return {
      sender: this.sender,
      receiver: this.receiver,
      content: this.content
      }
    };

}
