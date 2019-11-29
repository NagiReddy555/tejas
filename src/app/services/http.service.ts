import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }


  getPosts(){
    return this.http.get<any>(this.baseurl);
  }

  createPosts(post){
    return this.http.post<any>(this.baseurl,post);
  }


  updatePosts(post){
    return this.http.put<any>(this.baseurl,post);
  }


  removePosts(post){
    return this.http.delete<any>(this.baseurl);
  }
}
