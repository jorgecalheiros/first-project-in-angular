import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllPostsComponent } from './list-all-posts/list-all-posts.component';

@NgModule({
  declarations: [ListAllPostsComponent],
  imports: [CommonModule],
  exports: [ListAllPostsComponent],
})
export class ComponentsModule {}
