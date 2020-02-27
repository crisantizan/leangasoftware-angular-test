import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/shared.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public post: Post;

  ngOnInit(): void {
    this.route.data.subscribe((data: { post: Post }) => {
      this.post = data.post;
    });
  }
}
