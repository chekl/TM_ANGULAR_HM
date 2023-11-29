import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TagsService } from '../services/tags.service';
import { ITag } from '../tag.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  public tags$: Observable<ITag[]> = this.tagsService.tags$;

  constructor(private router: Router, private tagsService: TagsService) {}

  public navigateToCreate(): void {
    this.router.navigate(['create-tag']);
  }

  public navigateToProducts(): void {
    this.router.navigate(['']);
  }

  public navigateToEdit(id: string): void {
    this.router.navigate(['edit-tag', id]);
  }

  public deleteTagById(id: string): void {
    this.tagsService.deleteTagById(id);
  }
}
