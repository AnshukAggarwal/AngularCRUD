import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  //postDatasubject = new Subject<any>();
  //allpostsSubject = new Subject<any>();

  // onAddNewPost(postData:{ title: string; content: string }){
  //   this.http.post('https://angular-http-practice-b377a-default-rtdb.firebaseio.com/posts.json',postData)
  //   .subscribe((data)=>{
  //     this.postDatasubject.next(postData)
  //     console.log(postData)
  //   })
  // }

  onAddNewPost(postData:{ title: string; content: string }){
    return this.http.post('https://angular-http-practice-b377a-default-rtdb.firebaseio.com/posts.json',postData)
  }

  ongetAllPosts(){
    return this.http.get('https://angular-http-practice-b377a-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(res=> {
      // const postsArray=[]
      // for (let item of Object.values(res)){
      //   postsArray.push({...item, id: Object.keys(res)[0]})
      // }
      // console.log(postsArray)
      //console.log(Object.values(res));
      return Object.values(res)
    }))

  }

  onDeleteAllPosts(){
    return this.http.delete('https://angular-http-practice-b377a-default-rtdb.firebaseio.com/posts.json')
  }

}

