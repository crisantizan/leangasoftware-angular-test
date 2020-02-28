import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/shared.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public post: Post;

  /** date received from the comment component */
  public lastCommentDate = '';

  /** display progressbar */
  public showProgressBar: boolean = true;

  ngOnInit(): void {
    this.route.data.subscribe((data: { post: Post }) => {
      this.post = data.post;
    });
  }

  get labelLastComment() {
    return this.lastCommentDate || 'today';
  }

  /** event received from the comment component */
  handleGetLastCommentDate(date: string) {
    this.lastCommentDate = date;
  }

  /** event received from the comment component */
  handleLoadingComments(loading: boolean) {
    this.showProgressBar = loading;
  }

  /** go to home page */
  handleClickBack() {
    this.showProgressBar = true;
    this.router.navigate(['/posts']);
  }
}
