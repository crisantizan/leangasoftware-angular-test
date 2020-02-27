import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post, Comment } from '../models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly baseUrl = environment.API_URI;
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

  /** get all posts */
  public getAll() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
}
