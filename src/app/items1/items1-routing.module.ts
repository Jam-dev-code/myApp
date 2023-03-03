import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items1Page } from './items1.page';

const routes: Routes = [
  {
    path: '',
    component: Items1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items1PageRoutingModule {}
