import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
  providers: [PostService]
})
export class TrendingComponent implements OnInit {
  posts = [];
  constructor(
    private postService: PostService
    ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((response) => {
      response = response.data.children.slice(0,3);
      this.posts = response;
    },err => {
      console.log(err)
    })
  }

}
