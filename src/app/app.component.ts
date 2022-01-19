import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  private newPostSub:Subscription
  private allpostsSub: Subscription

  constructor(private http: HttpClient, private postsService:PostsService) {}

  ngOnInit() {
    this.getSavedPosts()
  }

  // onCreatePost(postData:{ title: string; content: string }) {
  //   this.postsService.onAddNewPost(postData)
  //   this.newPostSub= this.postsService.postDatasubject.subscribe(()=>{
  //     console.log(postData)
  //     this.loadedPosts.push(postData)
  //     //console.log(this.loadedPosts)
  //   })
  // }

  onCreatePost(postData:{ title: string; content: string }) {
    this.postsService.onAddNewPost(postData).subscribe((data)=>{
      this.loadedPosts.push(postData)
    })
  }

  onFetchPosts() {
      this.getSavedPosts()
  }

  onClearPosts() {
    this.postsService.onDeleteAllPosts().subscribe(()=>this.loadedPosts=[])
  }

  getSavedPosts(){
      this.postsService.ongetAllPosts()
      .subscribe(data=> this.loadedPosts = data)
      // this.allpostsSub=this.postsService.allpostsSubject.subscribe(data=>{
      //   console.log(data)
      //   this.loadedPosts=data
      // })
  }

  ngOnDestroy(): void {
      this.newPostSub.unsubscribe()
      this.allpostsSub.unsubscribe()
  }
}
