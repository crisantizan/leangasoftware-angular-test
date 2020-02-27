import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../../models/shared.model';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostService } from '../../services/post.service';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolverService implements Resolve<Post> {
  constructor(private service: PostService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Post | Observable<Post> | Promise<Post> {
    const id = Number(route.paramMap.get('postId'));
    return this.service.getOne(id).pipe(
      catchError(err => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
