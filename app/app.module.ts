import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MessagesComponent} from './messages.component';
import {MessagesService} from './messages.service';

import {CoursesComponent} from './courses.component';
import {CourseService} from "./course.service";

import {AuthorsComponent} from './authors.component';
import {AuthorService} from './author.service'

import {SampleBindingComponent} from './samplebinding.component';

import {FavoriteComponent} from './favorite.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      MessagesComponent,
      CoursesComponent,
      AuthorsComponent,
      FavoriteComponent
      ],
  providers: [MessagesService, CourseService, AuthorService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
