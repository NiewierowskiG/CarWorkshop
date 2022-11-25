export class Position{

  constructor(
    private _name: string,
    private _canCreateClients: boolean,
    private _canCreateWorkers: boolean
  ) {}

  public get canCreateWorkers(): boolean {
    return this._canCreateWorkers;
  }

  public get canCreateClients(): boolean {
    return this._canCreateClients;
  }

  public get name(): string {
    return this._name;
  }

}
