import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeecComponent } from './peec.component';
import { CostStatusComponent } from './cost-status/cost-status.component';
import { PeTrainingComponent } from './pe-training/pe-training.component';
import { PueComponent } from './pue/pue.component';
import {ShareModule} from '../../common/share.module';
import {PeecRoutesModule} from './peec-routes.module';



@NgModule({
  declarations: [
    PeecComponent,
    CostStatusComponent,
    PeTrainingComponent,
    PueComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PeecRoutesModule
  ]
})
export class PeecModule { }
