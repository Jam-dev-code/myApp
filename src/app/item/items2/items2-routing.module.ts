import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items2Page } from './items2.page';

const routes: Routes = [
  {
    path: '',
    component: Items2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items2PageRoutingModule {}
