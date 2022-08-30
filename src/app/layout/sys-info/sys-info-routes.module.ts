import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupportComponent} from './support/support.component';
import {SysInfoComponent} from './sys-info.component';

const routerConfig: Routes = [{
  path: '',
  component: SysInfoComponent,
  children: [
    {
      path: 'support',
      component: SupportComponent,
    },
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
export class SysInfoRoutesModule {

}
