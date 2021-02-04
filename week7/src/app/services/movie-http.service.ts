import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from "src/app/models/movie";
import { Observable } from 'rxjs';
import { IMovie } from '../IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieHttpService {

  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;

   }

    get(): Observable<Movie[]>{
      return  this.http.get<Movie[]>('assets/movie.json');
   }
}
