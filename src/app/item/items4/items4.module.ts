import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Items4PageRoutingModule } from './items4-routing.module';

import { Items4Page } from './items4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Items4PageRoutingModule
  ],
  declarations: [Items4Page]
})
export class Items4PageModule {}
