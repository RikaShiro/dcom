import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routerConfig: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'coop-cache',
        loadChildren: () =>
          import('./coop-cache/coop-cache.module').then(
            (m) => m.CoopCacheModule
          ),
      },
      {
        path: 'disk-monitor',
        loadChildren: () =>
          import('./disk-monitor/disk-monitor.module').then(
            (m) => m.DiskMonitorModule
          ),
      },
      {
        path: 'peec',
        loadChildren: () =>
          import('./peec/peec.module').then((m) => m.PeecModule),
      },
      {
        path: 'sys-info',
        loadChildren: () =>
          import('./sys-info/sys-info.module').then((m) => m.SysInfoModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routerConfig)],
  exports: [RouterModule],
})
export class LayoutRoutesModule {}
