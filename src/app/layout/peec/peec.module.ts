import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeecComponent } from './peec.component';
import { CostStatusComponent } from './cost-status/cost-status.component';
import { PeTrainingComponent } from './pe-training/pe-training.component';
import { PueComponent } from './pue/pue.component';
import {ShareModule} from '../../common/share.module';
import {PeecRoutesModule} from './peec-routes.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {StackBarComponent} from './cost-status/stack-bar/stack-bar.component';
import {ThreeLineChartComponent} from './pue/three-line-chart/three-line-chart.component';
import {PeecBarComponent} from './cost-status/peec-bar/peec-bar.component';
import {PeLineChartComponent} from './pe-training/pe-line-chart/pe-line-chart.component';
import {SensitivityLineComponent} from './pue/sensitivity-line/sensitivity-line.component';



@NgModule({
  declarations: [
    PeecComponent,
    CostStatusComponent,
    PeTrainingComponent,
    PueComponent,
    StackBarComponent,
    ThreeLineChartComponent,
    PeecBarComponent,
    PeLineChartComponent,
    SensitivityLineComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    NgxEchartsModule,
    PeecRoutesModule
  ]
})
export class PeecModule { }
