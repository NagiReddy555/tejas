import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // users :any[];
  //  private base_url="https://api.github.com/users"
  //    constructor(private http:HttpClient) {
  //      this.http.get<any>(this.base_url).subscribe(data =>{
  //        this.users=data;
  //    })



// emailAddress;
// constructor(private email: EmailService){
//   this.emailAddress=this.email.getEmails();

// }



//   posts :any[];
// private base_url="https://jsonplaceholder.typicode.com/posts"
//   constructor(private http:HttpClient) {
//     this.http.get<any>(this.base_url).subscribe(data =>{
//       this.posts=data;
//     })
//   }


//http service
constructor(private http:HttpService){
}
posts:any[];
ngOnInit() {
    this.http.getPosts().subscribe(post =>{
      console.log(post);
      this.posts=post});
}
}




    // window.fetch(this.base_path).then(data =>{
    //   data.json().then(item =>{
    //     console.log(item)

    //   }).catch(err =>console.log(err))
    // }).catch(err => console.log(err))

  











  //  addPost(input:HTMLInputElement){
  //    let post:any={title:input.value};
  //    input.value="";
  //    this.http.post<any>(this.base_url,post).subscribe(res=>{
  //      post.id=res.id;
  //      this.posts.splice(0,0,post)
  //      console.log(res);
  //    })
  // }
  // removePost(post){
  //   this.http.delete(`${this.base_url}/ ${post.id}`).subscribe(()=>{
  //     let index=this.posts.indexOf(post);
  //     this.posts.splice(index,1);
  //   });
  // }
