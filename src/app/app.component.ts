import { Component } from '@angular/core';
import { DIRECTION } from './enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stack';
  currentFormIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  handleChangeInStage(direction: DIRECTION) {
    if (direction === DIRECTION.BACKWARD) {
      this.currentFormIndex--;
    } else {
      this.currentFormIndex++;
    }
  }

  goBack() {
    this.currentFormIndex--;
  }

}
