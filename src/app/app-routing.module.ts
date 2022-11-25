import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent, CharactersComponent, LocationComponent } from './components';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'character/:id', component: CharacterComponent},
  {path: 'character/location/:id', component: LocationComponent},

  {path: '**', component: CharactersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
