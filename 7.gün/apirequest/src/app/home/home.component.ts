import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

interface posts {
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.sdad";
  id: 1;
  imageId: 9;
  title: 'Testim';
  postsId: 1;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageSize = 8;
  page = 13;
  blogPosts: Array<posts> = [];

  constructor(private blogService: BlogService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => {
      this.blogPosts = res;
    });
  }
  openDialog(element: any, isOpen: boolean) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      width: '450px',
      data: { blog: element, isUpdate: isOpen },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.blogService.getPosts().subscribe((res) => {
        this.blogPosts = res;
      });
    });
  }
}
