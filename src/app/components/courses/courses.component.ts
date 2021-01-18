import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses;
  public serverAddress;
  constructor(private services: AppService) { }

  ngOnInit(): void {
    this.serverAddress=this.services.serverAddress;
    this.services.getAll({}, 'courses/courses').subscribe(courses => this.courses = courses)
  }

  buy(event){
    let el = document.getElementById(event.currentTarget.attributes.title.value);
    el.classList.add('clicked');
  }
  remove(event){

    let el = document.getElementById(event.currentTarget.attributes.title.value);
    el.classList.remove('clicked');
  }
}
