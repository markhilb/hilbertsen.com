import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkusProfilePageComponent } from './pages/markus-profile-page/markus-profile-page.component';
import { AndreasProfilePageComponent } from './pages/andreas-profile-page/andreas-profile-page.component';
import { KristianProfilePageComponent } from './pages/kristian-profile-page/kristian-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkusProfilePageComponent,
    AndreasProfilePageComponent,
    KristianProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
