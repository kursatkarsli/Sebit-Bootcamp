import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css'],
})
export class BlogDialogComponent implements OnInit {
  element: any = {};
  isUpdate = false;
  title = '';
  body = '';
  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<BlogDialogComponent>,
    private blogService: BlogService
  ) {
    this.element = data.blog;
    this.isUpdate = data.isUpdate;
    this.form.patchValue({
      title: data.blog.title,
      body: data.blog.body,
    });
  }
  handleSubmit(e: any) {
    e.preventDefault();

    const data = {
      id: this.element.id,
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      userId: this.element.userId,
      imageId: this.element.imageId,
    };
    this.blogService
      .putRequest(data)
      .subscribe((res) => console.log('SUBS', res));
  }
  handleClose() {
    this.dialogRef.close();
  }
  handleChangeTitle(event: any) {
    this.title = event.target.value;
  }
  handleChangeBody(event: any) {
    this.body = event.target.value;
  }

  ngOnInit(): void {}
}
