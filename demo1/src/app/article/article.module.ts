import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
