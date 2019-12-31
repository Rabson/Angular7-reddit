import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommentService } from '../../../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService]
})
export class CommentsComponent implements OnInit, AfterViewInit  {
  postComments= [];
  headCoomment = {
    data : {
      created :'',
      thumbnail: '',
      title: '',
      permalink: '',
      num_comments: '',
      author:''
    }
  }
  constructor(
    private commentService: CommentService, 
    private router: ActivatedRoute,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this.GetComments(`${params.param1}/${params.param2}/${params.param3}/${params.param4}/${params.param5}`);
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(28,28,28,.9)';
  }


  GetComments(paramLink) {
    this.commentService.getCommet(paramLink).subscribe((response) => {
      this.headCoomment = response[0].data.children[0];
      this.postComments.push(response[1])
    },err =>{
      console.log(err)
    })
  }

  TimeFromNow(time) {
    time = parseInt(time) * 1000;
    return moment(time).fromNow();
  }

}
