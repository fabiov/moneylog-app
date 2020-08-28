export class Movement {

  public id: number;
  public amount: number;
  public description: string;
  public date: Date;

  constructor(id: number, amount: number, description: string, date: Date) {

    this.id = id;
    this.amount = amount;
    this.description = description;
    this.date = date;
  }
}
