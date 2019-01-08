import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public currentDirection = document.dir || 'ltr';

  public toggleDirection() {
    if (this.currentDirection === 'ltr') {
      this.currentDirection = 'rtl';
    } else if (this.currentDirection === 'rtl') {
      this.currentDirection = 'ltr';
    }

    document.dir = this.currentDirection;
  }
}
