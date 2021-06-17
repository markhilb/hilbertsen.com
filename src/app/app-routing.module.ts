import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkusPageComponent } from './pages/profile-pages/markus-page/markus-page.component';
import { AndreasPageComponent } from './pages/profile-pages/andreas-page/andreas-page.component';
import { KristianPageComponent } from './pages/profile-pages/kristian-page/kristian-page.component';

const routes: Routes = [
  {
    path: '',
    component: MarkusPageComponent,
    data: { animation: 'markus' },
  },
  {
    path: 'markus',
    component: MarkusPageComponent,
    data: { animation: 'markus' },
  },
  {
    path: 'andreas',
    component: AndreasPageComponent,
    data: { animation: 'andreas' },
  },
  {
    path: 'kristian',
    component: KristianPageComponent,
    data: { animation: 'kristian' },
  },

  // Must be at the bottom
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
