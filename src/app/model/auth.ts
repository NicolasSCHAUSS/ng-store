export class Auth {
  constructor(
    public id: number,
    public email: string,
    public token: string,
    public roles: string [],
    public type: string) {
  }
}