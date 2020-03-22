import { Component, OnInit } from '@angular/core';
import { DIRECTION } from '../enum';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
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
