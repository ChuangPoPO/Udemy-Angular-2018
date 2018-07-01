import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpcli: HttpClient) {
  }

  getData() {
    return this.httpcli.get('http://localhost:4200/api/articles.json');
  }

  run() {
    console.log('run DataService!!');
  }

  doTitleChange(toBeChangeData: any) {
    // 更新資料用 put, 並傳入要更新的資料
    return this.httpcli.put('http://localhost:4200/api/articles/' + toBeChangeData.id, toBeChangeData);
  }

  doDelete(item) {
    return this.httpcli.delete('http://localhost:4200/api/articles/' + item.id);
  }


}
