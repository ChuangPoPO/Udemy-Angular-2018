import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private httpcli: HttpClient) {
    // 從遠端伺服器上取回內容
    httpcli.get('http://localhost:4200/api/articles.json')
      .subscribe((result) => {
          this.data = result;
        });
  }

  run() {
    console.log('run DataService!!');
  }

  doTitleChange(toBeChangeData: any) {
    this.data = this.data.map((item) => {
      if (toBeChangeData.id === item.id) {
        return Object.assign({}, item, toBeChangeData);
      }
      return item;
    });
  }

  doDelete(item) {
    this.data = this.data.filter((value) => {
      return value.id !== item.id;
    });
  }


}
