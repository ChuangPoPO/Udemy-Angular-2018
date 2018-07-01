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

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  nowTitle = '';

  constructor() { }

  ngOnInit() {
    this.nowTitle = this.item.title;
  }

  doEdit(title) {
    this.nowTitle = title;
    this.titleChanged.emit({id: this.item.id, title: title});
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

}
