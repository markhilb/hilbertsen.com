import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkusProfilePageComponent } from './pages/markus-profile-page/markus-profile-page.component';
import { AndreasProfilePageComponent } from './pages/andreas-profile-page/andreas-profile-page.component';
import { KristianProfilePageComponent } from './pages/kristian-profile-page/kristian-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: MarkusProfilePageComponent,
    data: { animation: 'markus' },
  },
  {
    path: 'markus',
    component: MarkusProfilePageComponent,
    data: { animation: 'markus' },
  },
  // {
  //   path: 'andreas',
  //   component: AndreasProfilePageComponent,
  //   data: { animation: 'andreas' },
  // },
  // {
  //   path: 'kristian',
  //   component: KristianProfilePageComponent,
  //   data: { animation: 'kristian' },
  // },

  // Must be at the bottom
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
