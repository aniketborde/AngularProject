import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class DataReadService {
  constructor(private http: HttpClient) { }
  sendData(data: any): Observable<any> {
    return <Observable<any>>this.http.post("http://localhost:5400/login", data);
  }
}
