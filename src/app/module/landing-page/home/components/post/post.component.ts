import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { Post, Data } from '../../../../../shared/models/post.model';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {
  Posts = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.GetPosts();
  }

  GetPosts() {
    this.postService.getPosts().subscribe((response :Post) => {
      this.Posts = response.data.children;
      console.log(this.Posts);
    }, err => {
      console.log(err)
    })
  }
  
  TimeFromNow(time) {
    time = parseInt(time) * 1000;
    return (moment(time).fromNow());
  }

}
