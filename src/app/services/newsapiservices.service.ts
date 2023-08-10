import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }
  // news api url
  newsApiUrl = "https://newsapi.org/v2/everything?q=tesla&from=2023-07-10&sortBy=publishedAt&apiKey=f3e5b87c8f484116b9543a3fd2a81cdb";
  //topheading 
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
