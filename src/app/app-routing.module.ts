import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts-list/posts-list.module').then(
        m => m.PostsListModule,
      ),
  },
  {
    path: 'post/:postId',
    loadChildren: () =>
      import('./pages/post-detail/post-detail.module').then(
        m => m.PostDetailModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
