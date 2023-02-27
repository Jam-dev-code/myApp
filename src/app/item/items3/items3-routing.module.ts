import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Items3Page } from './items3.page';

const routes: Routes = [
  {
    path: '',
    component: Items3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Items3PageRoutingModule {}
