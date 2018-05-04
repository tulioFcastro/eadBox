import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: any[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.fecthCourses(1).subscribe(
      (res) => {
        console.log(res);
        this.courses = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
