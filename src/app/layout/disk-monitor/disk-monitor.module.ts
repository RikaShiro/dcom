import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskMonitorComponent } from './disk-monitor.component';
import {DiskStatusComponent} from './disk-status/disk-status.component';
import {DistkTrainingComponent} from './distk-training/distk-training.component';
import {FaultForecastComponent} from './fault-forecast/fault-forecast.component';
import {DiskMonitorRoutesModule} from './disk-monitor-routes.module';
import {ShareModule} from '../../common/share.module';
import {NgxEchartsModule} from 'ngx-echarts';



@NgModule({
  declarations: [
    DiskMonitorComponent,
    DiskStatusComponent,
    DistkTrainingComponent,
    FaultForecastComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    ShareModule,
    DiskMonitorRoutesModule
  ]
})
export class DiskMonitorModule { }
