import { Component, OnInit } from '@angular/core';
import { CoursesService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eadbox test';

  constructor(private coursesService: CoursesService) {

  }
  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.fecthCourses(1).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
