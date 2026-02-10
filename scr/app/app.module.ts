import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [BrowserModule],
  bootstrap: [PostsComponent]
})
export class AppModule {}

