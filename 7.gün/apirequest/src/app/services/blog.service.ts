import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseService {
  a = 5;
  constructor(private base: BaseService) {
    super(base.http);
  }
  public getPosts() {
    return this.base.getReq('/posts');
  }
  public putRequest(data: any) {
    return this.base.putReq(`/posts/${data.id}`, data);
  }
}
