import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie'
import { MovieCollectionService } from 'src/app/services/movie-collection.service';


@Component({
  selector: 'ui-movielib',
  templateUrl: './movielib.component.html',
  styleUrls: ['./movielib.component.css']
})
export class MovielibComponent implements OnInit {
  movieCollection: Observable<Movie[]>;


  constructor(movies: MovieCollectionService ) {
    this.movieCollection = movies.get();
   }

  ngOnInit(): void {

  }

}
