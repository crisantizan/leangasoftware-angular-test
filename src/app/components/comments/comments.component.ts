import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Comment } from '../../models/shared.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;

  /** prop to emit */
  @Output() lastCommentDate = new EventEmitter<string>();

  /** emit to paren that data has been received */
  @Output() loading = new EventEmitter<boolean>();

  public comments: Comment[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostComments(this.postId).subscribe(comments => {
      this.comments = comments;
      // stop parent progressbar
      this.loading.emit(false);
    });
  }

  /** generate classes for the HTML comment container */
  generateClasses(index: number) {
    return index + 1 !== this.comments.length ? 'comment border' : 'comment';
  }

  /** emit date to parent */
  handleClickEmitData() {
    const d = new Date();
    const [date, time] = [d.toDateString(), d.toTimeString().substr(0, 5)];
    this.lastCommentDate.emit(`${date} at ${time}`);
  }
}
