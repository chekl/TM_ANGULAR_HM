import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITag } from '../tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private readonly _tags$: BehaviorSubject<ITag[]> = new BehaviorSubject<
    ITag[]
  >([]);
  public readonly tags$ = this._tags$.asObservable();

  public get tags(): ITag[] {
    return this._tags$.getValue();
  }

  private set tags(tags: ITag[]) {
    this._tags$.next(tags);
  }

  public setTags(tags: ITag[]): void {
    this.tags = tags;
  }

  public getTagById(id: string): ITag | undefined {
    return this.tags.find((tag) => tag.id === id);
  }

  public addTag(tag: ITag): void {
    this.tags = [...this.tags, tag];
  }

  public deleteTagById(id: string): void {
    this.tags = this.tags.filter((tag) => tag.id !== id);
  }

  public updateTag(newTag: ITag): void {
    this.tags.map((tag) => (tag.id === newTag.id ? (tag = newTag) : tag));
  }
}
