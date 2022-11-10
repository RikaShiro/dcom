export class ChartType {
  data?: any[];
  xAxis?: string[];
  yAxis?: string[];
  legend?: string[];
  constructor() {
    this.data = [];
    this.xAxis = [];
    this.yAxis = [];
  }
}
