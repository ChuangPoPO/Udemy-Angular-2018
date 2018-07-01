import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.css']
})
export class ArticleBodyComponent implements OnInit, OnChanges {

  @Input()
  counter;

  @Input()
  item;

  constructor() {
    // console.log('a-Body : constructor()');
  }

  ngOnInit() {
    // console.log('a-Body_' + this.item.id + ' : ngOnInit()');
  }

  ngOnChanges(changes) {
    // console.log('a-Body_' + this.item.id + ' : ngChanges()');
    // console.log(changes);
  }

}
