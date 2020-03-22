import { Component, OnInit } from '@angular/core';
import { DIRECTION} from '../../enum'

@Component({
  selector: 'app-create-widget',
  templateUrl: './create-widget.component.html',
  styleUrls: ['./create-widget.component.css']
})
export class CreateWidgetComponent implements OnInit {
  // currentFormIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  // handleChangeInStage(direction: DIRECTION) {
  //   if (direction === DIRECTION.BACKWARD) {
  //     this.currentFormIndex--;
  //   } else {
  //     this.currentFormIndex++;
  //   }
  // }

  // goBack() {
  //   this.currentFormIndex--;
  // }

}
