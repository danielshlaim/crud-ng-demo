import { Injectable } from '@angular/core';
import { Course } from '../interfaces/Course';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  


  constructor(private http:HttpClient) {
    // this.courses = [
    //   {id:1,name:'Course1',desc:'this is course no 1',isActive:true,price:100,updatedAt: new Date('2022-04-07'),},
    //   {id:2,name:'Course2',desc:'this is course no 2',isActive:false,price:200,updatedAt: new Date('2022-04-07'),},
    // ];
   }


  getCourses(){
    return this.http.get('http://localhost:3000/courses');
  }
}
