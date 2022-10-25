import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoopCacheComponent } from './coop-cache.component';
import { DataStatusComponent } from './data-status/data-status.component';
import { CoopCacheRoutesModule } from './coop-cache-routes.module';
import { ShareModule } from '../../common/share.module';
import { CoopTrainingComponent } from './coop-training/coop-training.component';
import { CacheStrategyComponent } from './cache-strategy/cache-strategy.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SymbolLineComponent } from './coop-training/symbol-line/symbol-line.component';
import { FlowLineComponent } from './coop-training/flow-line/flow-line.component';
import { LineChartVComponent } from './cache-strategy/line-chart-v/line-chart-v.component';

@NgModule({
  declarations: [
    CoopCacheComponent,
    DataStatusComponent,
    CoopTrainingComponent,
    CacheStrategyComponent,
    SymbolLineComponent,
    FlowLineComponent,
    LineChartVComponent
  ],
  imports: [CommonModule, ShareModule, CoopCacheRoutesModule, NgxEchartsModule],
})
export class CoopCacheModule {}
