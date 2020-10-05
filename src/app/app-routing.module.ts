import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkusProfilePageComponent } from './pages/markus-profile-page/markus-profile-page.component';
import { AndreasProfilePageComponent } from './pages/andreas-profile-page/andreas-profile-page.component';
import { KristianProfilePageComponent } from './pages/kristian-profile-page/kristian-profile-page.component';
import { FourOFourPageComponent } from './pages/four-ofour-page/four-ofour-page.component';

const routes: Routes = [
  { path: '', component: MarkusProfilePageComponent },
  { path: 'markus', component: MarkusProfilePageComponent },
  { path: 'andreas', component: AndreasProfilePageComponent },
  { path: 'kristian', component: KristianProfilePageComponent },
  { path: '404', component: FourOFourPageComponent },

  // Must be at the bottom
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
