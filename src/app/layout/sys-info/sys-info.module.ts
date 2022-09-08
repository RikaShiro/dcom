import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysInfoComponent } from './sys-info.component';
import { SupportComponent } from './support/support.component';
import {SysInfoRoutesModule} from './sys-info-routes.module';
import {ShareModule} from '../../common/share.module';
import {HoopPieComponent} from '../public/hoop-pie/hoop-pie.component';



@NgModule({
  declarations: [
    SysInfoComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    SysInfoRoutesModule
  ]
})
export class SysInfoModule { }
