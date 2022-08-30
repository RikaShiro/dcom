import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

class Menu {
  show?: boolean;
  title?: any;
  icon?: any;
  routerLink?: any;
  children?: Menu[];
  constructor() {
    this.children = [];
  }
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;

  menu: Menu[] = [
    {show: true, title: '硬盘监测', icon: 'monitor', routerLink: '', children: [
        {show: true, title: '硬盘状态', icon: 'database', routerLink: './disk-monitor/disk-status', children: []},
        {show: true, title: '硬盘监测模型训练', icon: 'partition', routerLink: './disk-monitor/disk-training', children: []},
        {show: true, title: '故障预测', icon: 'alert', routerLink: './disk-monitor/fault', children: []}
      ]},
    {show: true, title: '动环节能', icon: 'deployment-unit', routerLink: '', children: [
        {show: true, title: '能耗状态', icon: 'hourglass', routerLink: './peec/cost-status', children: []},
        {show: true, title: '动环节能模型训练', icon: 'fund-projection-screen', routerLink: './peec/pe-training', children: []},
        {show: true, title: 'PUE预测', icon: 'setting', routerLink: './peec/pue', children: []}
      ]},
    {show: true, title: '协作缓存', icon: 'merge-cells', routerLink: '', children: [
        {show: true, title: '流量状态', icon: 'dashboard', routerLink: './coop-cache/data-status', children: []},
        {show: true, title: '协作缓存模型训练', icon: 'partition', routerLink: './coop-cache/coop-training', children: []},
        {show: true, title: '缓存策略执行', icon: 'pull-request', routerLink: './coop-cache/cache-strategy', children: []}
      ]},
    {show: true, title: '系统信息', icon: 'copyright-circle', routerLink: '', children: [
        {show: true, title: '技术支持', icon: 'audit', routerLink: './sys-info/support', children: []}
      ]},
  ];
  isDashboard = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['./layout/disk-monitor/disk-status']);
  }

}
