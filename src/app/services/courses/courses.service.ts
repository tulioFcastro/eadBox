import { Injectable } from '@angular/core';
const Package = require('../../../../package.json');
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {
  properties;
  baseUrl;

  constructor(public http: HttpClient) {
    this.properties = Package;
    this.baseUrl = this.properties['apiUrl'];
  }

  fecthCourses(page = 0): Observable<any> {
    let header = new HttpHeaders();
    header.append('accept', 'application/json');

    let resourceUrl = `${this.baseUrl}/courses`;
    if (page) {
      resourceUrl+= '?page=' + page;
    }
    return this.http.get<any>(resourceUrl);
  }

}
