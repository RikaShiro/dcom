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
import { DoubleYaxisChartComponent } from './data-status/double-yaxis-chart/double-yaxis-chart.component';
import { LineChartNoSliderComponent } from './data-status/line-chart-no-slider/line-chart-no-slider.component';
import { LineChartSliderComponent } from './cache-strategy/line-chart-slider/line-chart-slider.component';

@NgModule({
  declarations: [
    CoopCacheComponent,
    DataStatusComponent,
    CoopTrainingComponent,
    CacheStrategyComponent,
    SymbolLineComponent,
    FlowLineComponent,
    DoubleYaxisChartComponent,
    LineChartNoSliderComponent,
    LineChartSliderComponent
  ],
  imports: [CommonModule, ShareModule, CoopCacheRoutesModule, NgxEchartsModule],
})
export class CoopCacheModule {}
