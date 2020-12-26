export class User {

  public email: string;
  public name: string;
  public surname: string;

  constructor(obj?: any) {
    this.email = obj && obj.email || null;
    this.name = obj && obj.name || null;
    this.surname = obj && obj.surname || null;
  }
}
