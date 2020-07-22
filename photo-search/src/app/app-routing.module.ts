import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoShowComponent } from './photo-show/photo-show.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoShowComponent
  },
  {
    path: '404',
    component: PhotoShowComponent
  },
  // Catch-All (NotFound) Route
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
