import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/index';
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'courses-grid',
  templateUrl: './courses-grid.component.html',
  styleUrls: ['./courses-grid.component.scss']
})
export class CoursesGridComponent implements OnInit {

  courses: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.fecthCourses(1).subscribe(
      (res) => {
        this.courses = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
