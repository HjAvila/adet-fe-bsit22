import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts = [
    { title: 'Post One', description: 'Sample description for post one.' },
    { title: 'Post Two', description: 'Sample description for post two.' },
    { title: 'Post Three', description: 'Sample description for post three.' }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}

