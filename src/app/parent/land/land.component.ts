import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DIRECTION } from 'src/app/enum';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  // @Output() nextStageEvent = new EventEmitter();
  @Output() nextStageEvent: EventEmitter<DIRECTION> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log("clicked")
    this.nextStageEvent.emit(DIRECTION.FORWARD);  }

    saveAndGoBack() {
      console.log("clicked")

      this.nextStageEvent.emit(DIRECTION.BACKWARD);
    }
}
