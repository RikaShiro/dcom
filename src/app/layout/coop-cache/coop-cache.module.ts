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
import { DoubleYAxesComponent } from './data-status/double-y-axes/double-y-axes.component';
import { DoubleLinesComponent } from './data-status/double-lines/double-lines.component';
import { LineSliderComponent } from './cache-strategy/line-slider/line-slider.component';
import { DoubleLinesSliderComponent } from './coop-training/double-lines-slider/double-lines-slider.component';

@NgModule({
  declarations: [
    CoopCacheComponent,
    DataStatusComponent,
    CoopTrainingComponent,
    CacheStrategyComponent,
    SymbolLineComponent,
    DoubleLinesComponent,
    DoubleYAxesComponent,
    LineSliderComponent,
    DoubleLinesSliderComponent,
  ],
  imports: [CommonModule, ShareModule, CoopCacheRoutesModule, NgxEchartsModule],
})
export class CoopCacheModule {}
