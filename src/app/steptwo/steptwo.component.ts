import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DIRECTION} from '../enum'


@Component({
  selector: 'app-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.css']
})
export class SteptwoComponent implements OnInit {
  @Output() nextStageEvent: EventEmitter<DIRECTION> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

forward(){
  this.nextStageEvent.emit(DIRECTION.FORWARD);
}

saveAndGoBack() {
  this.nextStageEvent.emit(DIRECTION.BACKWARD);
}
}


