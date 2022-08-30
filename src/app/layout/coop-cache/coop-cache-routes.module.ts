import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoopCacheComponent} from './coop-cache.component';
import {DataStatusComponent} from './data-status/data-status.component';
import {CoopTrainingComponent} from './coop-training/coop-training.component';
import {CacheStrategyComponent} from './cache-strategy/cache-strategy.component';

const routerConfig: Routes = [{
  path: '',
  component: CoopCacheComponent,
  children: [
    {
      path: 'data-status',
      component: DataStatusComponent,
    },
    {
      path: 'coop-training',
      component: CoopTrainingComponent,
    },
    {
      path: 'cache-strategy',
      component: CacheStrategyComponent,
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
export class CoopCacheRoutesModule {

}
