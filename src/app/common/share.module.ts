import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {FileSizePipe} from './pipe/file-size.pipe';
import {ValueToTextPipe} from './pipe/value-to-text.pipe';
import {ValueToLabelPipe} from './pipe/value-to-label.pipe';

import {NzFormModule} from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';

import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {SimpleBarComponent} from '../layout/public/simple-bar/simple-bar.component';
import {HoopPieComponent} from '../layout/public/hoop-pie/hoop-pie.component';
import {LineChartComponent} from '../layout/public/line-chart/line-chart.component';
import {LineStepComponent} from '../layout/public/line-step/line-step.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {LinesChartComponent} from '../layout/peec/cost-status/lines-chart/lines-chart.component';


@NgModule({
  declarations: [
    FileSizePipe,
    ValueToTextPipe,
    ValueToLabelPipe,
    SimpleBarComponent,
    HoopPieComponent,
    LineChartComponent,
    LineStepComponent,
    LinesChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    // NgZorroAntdModule,
    HttpClientModule,
    NzAlertModule,
    NzFormModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzSelectModule,
    NzSpinModule,
    NzTableModule,
    NzUploadModule,
    NzGridModule,
    NzDividerModule,
    NzCardModule,
    NzTreeModule,
    NzDatePickerModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzCollapseModule,
    NzTimelineModule,
    NzTabsModule,
    NzCheckboxModule,
    NzCascaderModule,
    NzRadioModule,
    NzToolTipModule,
    NzProgressModule,
    NzEmptyModule,
    NzPopoverModule,
    NzListModule,
    NzBadgeModule,
    NzCarouselModule,
    NzDrawerModule,
    NzStepsModule

  ],
  exports: [
    FileSizePipe,
    ValueToTextPipe,
    ValueToLabelPipe,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzAlertModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzSelectModule,
    NzSpinModule,
    NzTableModule,
    NzUploadModule,
    NzGridModule,
    NzDividerModule,
    NzCardModule,
    NzTreeModule,
    NzDatePickerModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzCollapseModule,
    NzTimelineModule,
    NzTabsModule,
    NzCheckboxModule,
    NzCascaderModule,
    NzRadioModule,
    NzToolTipModule,
    NzProgressModule,
    NzEmptyModule,
    NzPopoverModule,
    NzListModule,
    NzBadgeModule,
    NzCarouselModule,
    NzDrawerModule,
    NzTagModule,
    NzStepsModule,
    SimpleBarComponent,
    HoopPieComponent,
    LineChartComponent,
    LineStepComponent,
    LinesChartComponent,

  ]
})
export class ShareModule {
}
