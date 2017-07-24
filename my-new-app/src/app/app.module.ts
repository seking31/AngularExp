import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'home', component: HomeComponent }
  // { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    JumboComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
