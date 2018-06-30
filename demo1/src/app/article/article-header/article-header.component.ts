import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  isEdit = false;

  constructor() { }

  ngOnInit() {
  }
  deleteArticle() {
    this.delete.emit(this.item);
  }

}
