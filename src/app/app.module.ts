import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './todo/to-do.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HomeComponent,
    ToDoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
