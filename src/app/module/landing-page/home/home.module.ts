import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from './home.component';
import { PostComponent } from './components/post/post.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PostService } from '../../../services/post.service';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, PostComponent, TrendingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule  
  ],
})
export class HomeModule { }
