import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITag, Tag } from '../tag.model';
import { UUID } from 'angular2-uuid';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrl: './tag-form.component.scss',
})
export class TagFormComponent implements OnInit {
  public newTag: ITag = new Tag('', '', UUID.UUID());
  public isEdit: boolean = false;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      const editTag = this.tagsService.getTagById(id);

      if (editTag) {
        this.newTag = editTag;
        this.isEdit = true;
      }
    }
  }

  constructor(
    private router: Router,
    private tagsService: TagsService,
    private activatedRoute: ActivatedRoute
  ) {}

  public navigateBack(): void {
    this.router.navigate(['tags']);
  }

  public updateTag(): void {
    this.tagsService.updateTag(this.newTag);
    this.navigateBack();
  }
  public addTag(): void {
    this.tagsService.addTag(this.newTag);
    this.navigateBack();
  }
}
