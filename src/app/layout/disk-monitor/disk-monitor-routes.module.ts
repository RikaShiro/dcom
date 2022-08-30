import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DiskMonitorComponent} from './disk-monitor.component';
import {DiskStatusComponent} from './disk-status/disk-status.component';
import {DistkTrainingComponent} from './distk-training/distk-training.component';
import {FaultForecastComponent} from './fault-forecast/fault-forecast.component';

const routerConfig: Routes = [{
  path: '',
  component: DiskMonitorComponent,
  children: [
    {
      path: 'disk-status',
      component: DiskStatusComponent,
    },
    {
      path: 'disk-training',
      component: DistkTrainingComponent,
    },
    {
      path: 'fault',
      component: FaultForecastComponent,
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class DiskMonitorRoutesModule {

}
