export class Article {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public image: Blob,
    public stock: number,
    public price: number) {
  }
}