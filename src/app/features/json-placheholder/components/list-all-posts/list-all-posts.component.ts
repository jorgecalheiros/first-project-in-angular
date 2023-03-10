import { ApiJsonplaceholderService } from './../../../../shared/services/api-jsonplaceholder/api-jsonplaceholder.service';
import { Component } from '@angular/core';
import { Post } from 'src/app/shared/types/post';

@Component({
  selector: 'app-list-all-posts',
  templateUrl: './list-all-posts.component.html',
  styleUrls: ['./list-all-posts.component.css'],
})
export class ListAllPostsComponent {
  listPosts: Post[] = [];
  constructor(private service: ApiJsonplaceholderService) {
    this.getAllPosts();
  }

  getAllPosts() {
    this.service.getAllPosts().subscribe((posts) => (this.listPosts = posts));
  }
}
