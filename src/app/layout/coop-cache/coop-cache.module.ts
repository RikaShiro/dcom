import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoopCacheComponent } from './coop-cache.component';
import {DataStatusComponent} from './data-status/data-status.component';
import {CoopCacheRoutesModule} from './coop-cache-routes.module';
import {ShareModule} from '../../common/share.module';
import {CoopTrainingComponent} from './coop-training/coop-training.component';
import {CacheStrategyComponent} from './cache-strategy/cache-strategy.component';



@NgModule({
  declarations: [
    CoopCacheComponent,
    DataStatusComponent,
    CoopTrainingComponent,
    CacheStrategyComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    CoopCacheRoutesModule
  ]
})
export class CoopCacheModule { }
