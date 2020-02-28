import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Comment } from '../../models/shared.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;

  /** indicates if comments are loading */
  public loading: boolean = true;

  public comments: Comment[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostComments(this.postId).subscribe(comments => {
      this.comments = comments;
      this.loading = false;
    });
  }

  /** generate classes for the HTML comment container */
  generateClasses(index: number) {
    return index + 1 !== this.comments.length ? 'comment border' : 'comment';
  }
}
