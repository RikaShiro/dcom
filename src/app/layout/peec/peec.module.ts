import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeecComponent } from './peec.component';
import { CostStatusComponent } from './cost-status/cost-status.component';
import { PeTrainingComponent } from './pe-training/pe-training.component';
import { PueComponent } from './pue/pue.component';
import {ShareModule} from '../../common/share.module';
import {PeecRoutesModule} from './peec-routes.module';
import {LinesChartComponent} from './cost-status/lines-chart/lines-chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {StackBarComponent} from './cost-status/stack-bar/stack-bar.component';
import {ThreeLineChartComponent} from './pue/three-line-chart/three-line-chart.component';



@NgModule({
  declarations: [
    PeecComponent,
    CostStatusComponent,
    PeTrainingComponent,
    PueComponent,
    LinesChartComponent,
    StackBarComponent,
    ThreeLineChartComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    NgxEchartsModule,
    PeecRoutesModule
  ]
})
export class PeecModule { }
