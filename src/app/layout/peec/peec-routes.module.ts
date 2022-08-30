import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PeecComponent} from './peec.component';
import {CostStatusComponent} from './cost-status/cost-status.component';
import {PeTrainingComponent} from './pe-training/pe-training.component';
import {PueComponent} from './pue/pue.component';

const routerConfig: Routes = [{
  path: '',
  component: PeecComponent,
  children: [
    {
      path: 'cost-status',
      component: CostStatusComponent,
    },
    {
      path: 'pe-training',
      component: PeTrainingComponent,
    },
    {
      path: 'pue',
      component: PueComponent,
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
export class PeecRoutesModule {

}
