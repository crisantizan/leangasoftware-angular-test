import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/shared.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  /** columns to display in datatable component */
  public displayedColumns = ['id', 'title', 'action'];
  public dataSource: MatTableDataSource<Post>;

  /** indicates if post are loading */
  public loading = false;

  /** display backdrop the first time when post are loaded */
  public pageLoading = true;

  /** datatable paginator */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /* datatable sort */
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.route.data.subscribe((data: { posts: Post[] }) => {
      this.pageLoading = false;
      this.dataSource = new MatTableDataSource(data.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  /** go to full data of post */
  goToSinglePost(postId: number) {
    // show progress bar
    this.loading = true;
    this.router.navigate(['/post', postId]);
  }
}
