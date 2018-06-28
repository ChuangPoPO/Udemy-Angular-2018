import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  counterText = 0;

  constructor() {
  }

  countText(keyWord: string) {
    this.counterText = keyWord.length;
  }
  claerInput(input: HTMLInputElement) {
    input.value = '';
    this.counterText = input.value.length;
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
}
