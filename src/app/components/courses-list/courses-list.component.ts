import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from '../../services';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  dataSource: any;
  displayedColumns = ['logo_url', 'course_slug', 'category_slug', 'title'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.fecthCourses(1).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
