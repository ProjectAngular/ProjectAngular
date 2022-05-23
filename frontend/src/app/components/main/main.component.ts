import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var name:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isListCourse:boolean = false;
  isAddingCourse:boolean = false;
  isEditCourse:boolean = false;
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
  toAddingCourse(){
    this.setToFalse();
    this.isAddingCourse = !this.isAddingCourse;
  }
  toEditCourse(){
    this.setToFalse();
    this.isEditCourse = !this.isEditCourse;
  }
  toListCourse(){
    this.setToFalse();
    this.isListCourse = !this.isListCourse;
  }
  setToFalse(){
    this.isAddingCourse = false;
    this.isEditCourse = false;
    this.isListCourse = false;
  }
}
