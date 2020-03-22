import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DIRECTION} from '../enum'
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepthree',
  templateUrl: './stepthree.component.html',
  styleUrls: ['./stepthree.component.css']
})
export class StepthreeComponent implements OnInit {
  @Output() nextStageEvent: EventEmitter<DIRECTION> = new EventEmitter();

  constructor(private router: Router) { 

    
  }

  ngOnInit(): void {
    setTimeout(() => {
      let shown = document.getElementById('paystackEmbedContainer') as HTMLElement;
      console.log(shown ? 'shown' : 'not shown');
       (<any>window).PaystackPop.setup({
        key: 'pk_live_7445b0e87d2616a05199316003a7ae8e3227a6a5',
        email: 'customer@email.com',
        amount: 10000 * 200,
        container: 'paystackEmbedContainer',
        callback: function(response){
         alert('successfully subscribed. transaction ref is ' + response.reference);
         console.log(response.reference)
       },
       onClose: function(){
        alert('window closed');
    },
    
       
     });
     
    }, 2000);
  }





  forward(){
    this.nextStageEvent.emit(DIRECTION.FORWARD);

  }



  saveAndGoBack() {
    this.nextStageEvent.emit(DIRECTION.BACKWARD);
    }

 

}
