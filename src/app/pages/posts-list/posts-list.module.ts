import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [PostsListComponent],
  imports: [CommonModule, PostsListRoutingModule, MaterialModule],
})
export class PostsListModule {}
