import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsRoutingModule} from './comments-routing.module';
import { CommentsComponent  }  from './comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule
  ]
})
export class CommentsModule { }
