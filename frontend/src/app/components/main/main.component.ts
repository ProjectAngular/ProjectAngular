import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var name:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isMain:boolean = true;
  isAddingCourse:boolean = false;
  isRegister:boolean = false;
  isHistory:boolean = false;
  isDrop:boolean = false;
  isListCourse:boolean = false;
  isListCourseTeacher:boolean = false;
  isListCourseStudent:boolean = false;
  constructor() {

  }

  ngOnInit(): void {
    this.sidebar();;
    this.scrollFunction();
  }

  sidebar(){
    let body:any = document.querySelector('.main-content'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");
    toggle.addEventListener("click" , () =>{
      sidebar.classList.toggle("close");
    })
  }
  scrollFunction() {
    let toTopButton:any = document.getElementById("toTopBtn");
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block";
      } else {
        toTopButton.style.display = "none";
      }
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  toMain() {
    this.setToFalse();
    this.isMain = !this.isMain;
  }
  toHistory(){
    this.setToFalse();
    this.isHistory = !this.isHistory;
  }
  toDrop(){
    this.setToFalse();
    this.isDrop = !this.isDrop;
  }
  toRegister(){
    this.setToFalse();
    this.isRegister = !this.isRegister;
  }
  toAddingCourse(){
    this.setToFalse();
    this.isAddingCourse = !this.isAddingCourse;
  }
  toListCourse(){
    this.setToFalse();
    this.isListCourse = !this.isListCourse;
  }
  toListCourseStudent(){
    this.setToFalse();
    this.isListCourseStudent = !this.isListCourseStudent;
  }
  toListCourseTeacher(){
    this.setToFalse();
    this.isListCourseTeacher = !this.isListCourseTeacher;
  }
  setToFalse(){
    this.isMain = false;
    this.isHistory = false;
    this.isDrop = false;
    this.isAddingCourse = false;
    this.isRegister = false;
    this.isListCourse = false;
    this.isListCourseStudent= false;
    this.isListCourseTeacher = false;
  }
}
