import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkusProfilePageComponent } from './pages/markus-profile-page/markus-profile-page.component';
import { AndreasProfilePageComponent } from './pages/andreas-profile-page/andreas-profile-page.component';
import { KristianProfilePageComponent } from './pages/kristian-profile-page/kristian-profile-page.component';

const routes: Routes = [
  { path: '', component: MarkusProfilePageComponent },
  { path: 'markus', component: MarkusProfilePageComponent },
  { path: 'andreas', component: AndreasProfilePageComponent },
  { path: 'kristian', component: KristianProfilePageComponent },

  // Must be at the bottom
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
