import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {ShareModule} from '../common/share.module';
import {LayoutRoutesModule} from './layout-routes.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    LayoutRoutesModule
  ]
})
export class LayoutModule { }
