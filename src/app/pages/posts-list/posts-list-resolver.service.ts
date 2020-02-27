import { Injectable } from '@angular/core';
import { Post } from '../../models/shared.model';
import { Resolve } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { PostService } from '../../services/post.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsListResolverService implements Resolve<Post[]> {
  constructor(private service: PostService) {}

  resolve(): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.service.posts.pipe(
      catchError(err => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
