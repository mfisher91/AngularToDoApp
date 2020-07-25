import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoComponent } from './todo/to-do.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  {
    path: 'todo',
    component: ToDoComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
