import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Items1PageRoutingModule } from './items1-routing.module';

import { Items1Page } from './items1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Items1PageRoutingModule
  ],
  declarations: [Items1Page]
})
export class Items1PageModule {}
