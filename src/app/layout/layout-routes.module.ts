import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CoopCacheModule } from './coop-cache/coop-cache.module';
import { DiskMonitorModule } from './disk-monitor/disk-monitor.module';
import { PeecModule } from './peec/peec.module';
import { SysInfoModule } from './sys-info/sys-info.module';
import { LoginGuard } from '../login.guard';

const routerConfig: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoginGuard],
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
