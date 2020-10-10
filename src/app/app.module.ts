import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkusProfilePageComponent } from './pages/markus-profile-page/markus-profile-page.component';
import { AndreasProfilePageComponent } from './pages/andreas-profile-page/andreas-profile-page.component';
import { KristianProfilePageComponent } from './pages/kristian-profile-page/kristian-profile-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkusProfilePageComponent,
    AndreasProfilePageComponent,
    KristianProfilePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
