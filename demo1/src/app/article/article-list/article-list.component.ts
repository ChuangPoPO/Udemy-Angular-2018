import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  data;
  counter = 0;

  constructor(private datasvc: DataService) { }

  ngOnInit() {
    // 執行 getData 方法
    this.datasvc.getData().subscribe((result) => {
      this.data = result; }
    );

  }

  doTitleChange(toBeChangeData: any) {
    // 訂閱修改遠端資料成功才會修改本地端資料
    this.datasvc.doTitleChange(toBeChangeData).subscribe((result) => {
      this.data = this.data.map((item) => {
        if (toBeChangeData.id === item.id) {
          return Object.assign({}, item, toBeChangeData);
        }
        return item;
      });
    },
     (error) => {
       console.log(error);
     });
  }

  doDelete(item) {
    this.datasvc.doDelete(item).subscribe((result) => {
      this.data = this.data.filter((value) => {
        return value.id !== item.id;
      });
    },
    (error) => {
      console.log(error);
    });
  }

}
