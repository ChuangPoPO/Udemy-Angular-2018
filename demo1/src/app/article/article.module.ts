import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleHeaderComponent],
  exports: [ArticleListComponent]
})
export class ArticleModule { }
