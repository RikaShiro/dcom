import {HttpResponse} from '@angular/common/http';

import {NzUploadFile} from 'ng-zorro-antd/upload';
import {NzMessageService} from 'ng-zorro-antd/message';

export function downloadFile(res: HttpResponse<Blob>, msg?: NzMessageService) {
  const headers = res.headers;
  const body = res.body;
  const filename = decodeURI(<string>headers.get('content-disposition'));
  if (body && body.type === 'application/json' && msg) {
    const reader = new FileReader();
    reader.readAsText(body, 'utf-8');
    reader.onload = () => {
      const data = JSON.parse(reader.result as string);
      msg.error(data.msg);
    };
  } else {
    if (body) {
      const blob = new Blob([body]);
      // 火狐、chrome浏览器通过a标签进行下载
      const a = document.createElement('a');
      a.id = 'exppub';
      // 保证pdf和html文件不在浏览器中打开，而是下载
      a.download = filename;
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      const alink = document.getElementById('exppub');
      if (alink && alink.parentNode) {
        alink.click();
        alink.parentNode.removeChild(a);
      }
    }

  }
}

export function downloadFileByUploadFile(file: NzUploadFile) {

  const a = document.createElement('a');
  a.id = 'exppub';
  // 保证pdf和html文件不在浏览器中打开，而是下载
  a.download = file.name;
  if (file.thumbUrl) {
    a.href = file.thumbUrl;
  }
  document.body.appendChild(a);
  const alink = document.getElementById('exppub');
  if (alink && alink.parentNode) {
    alink.click();
    alink.parentNode.removeChild(a);
  }
}

export function downloadFileByUrl(url: string, fileName: string) {
  const a = document.createElement('a');
  a.id = 'exppub';
  // 保证pdf和html文件不在浏览器中打开，而是下载
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  const alink = document.getElementById('exppub');
  if (alink && alink.parentNode) {
    alink.click();
    alink.parentNode.removeChild(a);
  }
}

export function uuid() {
  function S4() {
    // tslint:disable-next-line: no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}

export function trimAllString(condition?: { [key: string]: any }) {
  for (const key in condition) {
    if (!!condition[key] && typeof condition[key] === 'string') {
      condition[key] = condition[key].trim();
    }
  }
  return condition;
}

export function formatNumber(value: number) {
  if (value || value === 0) {
    return value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  } else {
    return '-';
  }
}

export function formatNumberWidth(value: number, num: number = 2) {
  if (value || value === 0) {
    return value.toLocaleString(undefined, {minimumFractionDigits: num, maximumFractionDigits: num});
  } else {
    return '-';
  }
}

export function formatPercent(value: number) {
  if (value || value === 0) {
    return (value * 100).toFixed(2) + '%';
  } else {
    return '-';
  }
}
export function formatPercentWithout(value: number) {
  if (value || value === 0) {
    return value.toFixed(2) + '%';
  } else {
    return '-';
  }
}
export function formatPercentWithoutDot(value: number) {
  if (value || value === 0) {
    return (value * 100).toFixed(0) + '%';
  } else {
    return '-';
  }
}
