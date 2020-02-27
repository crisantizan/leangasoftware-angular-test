import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailComponent } from './post-detail.component';
import { PostDetailResolverService } from './post-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: PostDetailComponent,
    resolve: { post: PostDetailResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailRoutingModule {}
