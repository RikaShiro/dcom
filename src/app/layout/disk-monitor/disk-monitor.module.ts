import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskMonitorComponent } from './disk-monitor.component';
import {DiskStatusComponent} from './disk-status/disk-status.component';
import {DistkTrainingComponent} from './distk-training/distk-training.component';
import {FaultForecastComponent} from './fault-forecast/fault-forecast.component';
import {DiskMonitorRoutesModule} from './disk-monitor-routes.module';
import {ShareModule} from '../../common/share.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {OneBarComponent} from './disk-status/one-bar/one-bar.component';
import {TrendLineComponent} from './disk-status/trend-line/trend-line.component';
import {DiskLineChartComponent} from './distk-training/disk-line-chart/disk-line-chart.component';
import {DiskLineStepComponent} from './distk-training/disk-line-step/disk-line-step.component';



@NgModule({
  declarations: [
    DiskMonitorComponent,
    DiskStatusComponent,
    DistkTrainingComponent,
    FaultForecastComponent,
    OneBarComponent,
    TrendLineComponent,
    DiskLineChartComponent,
    DiskLineStepComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ShareModule,
    DiskMonitorRoutesModule
  ]
})
export class DiskMonitorModule { }
