import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components Here
import { HomeComponent } from './home/home';
import { GuideComponent } from './guide/guide';
import { DetailsComponent } from './details/details';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

class AppRoot {}

@NgModule({
  imports: [RouterModule.forRoot([
    // Pages
    { path: 'home', component: HomeComponent },
    { path: 'guide', component: GuideComponent },
    { path: 'details', component: DetailsComponent },

    // Defaults
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }

  ])],
  exports: [RouterModule]
})

class RoutingModule { }

@NgModule({
  declarations: [
    HomeComponent,
    GuideComponent,
    DetailsComponent,
    AppRoot
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})

export class AppModule { }
