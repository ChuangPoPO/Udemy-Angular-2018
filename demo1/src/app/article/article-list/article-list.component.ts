import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter = 0;

  constructor(public datasvc: DataService) { }

  ngOnInit() {
    this.datasvc.run();

    // setTimeout 在 3 秒之後會修改 counter 的內容
    setTimeout(() => {
      this.counter++;
    }, 3000);

  }

}
