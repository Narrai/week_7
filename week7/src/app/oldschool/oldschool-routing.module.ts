import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielibComponent} from './movielib/movielib.component'
import { MovieComponent} from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovielibComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldschoolRoutingModule { }
