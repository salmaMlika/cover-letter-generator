import { Routes } from '@angular/router';
import { HeroPage } from './hero-page/hero-page';
import { CoverForm } from './cover-form/cover-form';

export const routes: Routes = [
  { path: '', component: HeroPage },
  { path: 'generate', component: CoverForm },
];
