export interface ITag {
  id: string;
  title: string;
  color: string;
}

export class Tag implements ITag {
  id: string;

  title: string;
  color: string;

  constructor(title: string, color: string, id: string) {
    this.id = id;
    this.color = color;
    this.title = title;
  }
}
