import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  origin_item;
  isEdit = false;

  constructor() { }

  ngOnChanges(changes) {
    // 如果發生資料的改變
    if (changes.item) {
      this.origin_item = changes.item.currentValue;
      // item 屬性變成一個不可變的物件，因為這裡建立了全新的物件
      // 讓這裡的 item 與父元件傳入的 item 完全脫鉤
      // 因此可以使用雙向繫結，又不會影響到父元件的內容
      this.item = Object.assign({}, changes.item.currentValue);
      console.log('a-header_' + this.item.id + ' : ngChanges()');
      console.log(changes);
    }
  }

  ngOnInit() {
  }

  doCancel() {
    this.item = Object.assign({}, this.origin_item);
    this.isEdit = false;
  }

  doEdit() {
    this.titleChanged.emit(this.item);
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

}
