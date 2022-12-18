export class Position{


  constructor(
    private _name: string,
    private _canCreateClients: boolean,
    private _canCreateWorkers: boolean
  ) {}

  toJSON() {
    return {
      name: this.name,
      canCreateClients: this.canCreateClients,
      canCreateWorkers: this.canCreateWorkers,
    };
  }

  public get canCreateWorkers(): boolean {
    return this._canCreateWorkers;
  }
  public set canCreateWorkers(value: boolean) {
    this._canCreateWorkers = value;
  }
  public get canCreateClients(): boolean {
    return this._canCreateClients;
  }
  public set canCreateClients(value: boolean) {
    this._canCreateClients = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
