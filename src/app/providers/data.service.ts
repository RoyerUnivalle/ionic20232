import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  public getEvents(query = {}): Observable<any> {
    return this.httpClient.get<any>('https://invessoft.com/api/eventos', { params: query });
  }
}
