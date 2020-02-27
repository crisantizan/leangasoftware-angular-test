import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, pipe } from 'rxjs';
import { Post, Comment } from '../models/shared.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl = environment.API_URI;
  /* caching posts */
  private posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {}

  public getPostComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${this.baseUrl}/comments?postId=${postId}`,
    );
  }

  /** get one post */
  public getOne(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${postId}`);
  }

  /** get all post, load from api one time */
  get posts(): Observable<Post[]> {
    if (!this.posts$) {
      this.posts$ = this.getAll().pipe(shareReplay(1));
    }

    return this.posts$;
  }

  /** get all posts */
  private getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}
