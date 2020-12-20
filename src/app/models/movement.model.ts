export class Movement {

  public id: number;
  public date: Date;
  public account: string;
  public amount: number;
  public description: string;

  constructor(obj?: any) {
    this.id           = obj && obj.id || null;
    this.date         = obj && obj.date || null;
    this.account      = obj && obj.account || null;
    this.amount       = obj && obj.amount || null;
    this.description  = obj && obj.description || null;
  }
}

