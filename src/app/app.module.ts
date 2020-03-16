import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Material UI Components */
import { DemoMaterialModule } from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { FavoritepageComponent } from './components/favoritepage/favoritepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HttpClientModule }    from '@angular/common/http';

// Configurations for all routes .
const appRoutes: Routes = [
  { path: '', component: SearchpageComponent },
  { path: 'favorites', component: FavoritepageComponent },
  { path: 'aboutme', component: AboutmeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchpageComponent,
    FavoritepageComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
