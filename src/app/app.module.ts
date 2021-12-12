import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './components/navbar/home-nav/home-nav.component';
import { HomeComponent } from './components/home/home.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { ExerciseNavComponent } from './components/navbar/exercise-nav/exercise-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    HomeComponent,
    ExerciseComponent,
    ExerciseNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
