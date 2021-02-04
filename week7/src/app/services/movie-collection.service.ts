import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MovieHttpService } from './movie-http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {
  movieApi: MovieHttpService;
  // public movies = [];

  constructor(movieHttp: MovieHttpService) {
    this.movieApi = movieHttp;
  }

  get (): Observable<Movie[]> {
    return this.movieApi.get();
  }

  getOne(name: string){
    return this.movieApi.get();
  }
}
