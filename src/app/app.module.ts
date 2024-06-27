import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AndreasPageComponent } from './pages/profile-pages/andreas-page/andreas-page.component';
import { KristianPageComponent } from './pages/profile-pages/kristian-page/kristian-page.component';
import { MarkusPageComponent } from './pages/profile-pages/markus-page/markus-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AndreasPageComponent,
    KristianPageComponent,
    MarkusPageComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
