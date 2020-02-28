import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail.component';
import { MaterialModule } from '../../material.module';
import { CommentsComponent } from '../../components/comments/comments.component';

@NgModule({
  declarations: [PostDetailComponent, CommentsComponent],
  imports: [CommonModule, PostDetailRoutingModule, MaterialModule],
})
export class PostDetailModule {}
