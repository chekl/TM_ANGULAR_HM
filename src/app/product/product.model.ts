import { ITag } from '../tag/tag.model';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: ITag[];
}

export class Product implements IProduct {
  name: string;
  description: string;
  price: number;
  tags: ITag[];
  id: string;

  constructor(
    name: string,
    description: string,
    price: number,
    tags: ITag[],
    id: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.id = id;
  }
}
