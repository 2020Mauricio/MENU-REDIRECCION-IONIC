import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosoPageRoutingModule } from './datoso-routing.module';

import { DatosoPage } from './datoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosoPageRoutingModule
  ],
  declarations: [DatosoPage]
})
export class DatosoPageModule {}
