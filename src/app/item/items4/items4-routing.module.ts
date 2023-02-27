import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items4Page } from './items4.page';

const routes: Routes = [
  {
    path: '',
    component: Items4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items4PageRoutingModule {}
