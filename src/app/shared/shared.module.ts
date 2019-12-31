import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SideSectionComponent } from './components/side-section/side-section.component';


@NgModule({
  declarations: [NavbarComponent, SideSectionComponent],
  exports : [
    NavbarComponent,
    SideSectionComponent,
    HttpClientModule,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
