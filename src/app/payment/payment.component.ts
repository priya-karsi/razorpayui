import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

declare var Razorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private paymentService: PaymentService){

  }
  
  createTransaction():void{
    this.paymentService.createTransaction(1000).subscribe((value:any)=>this.openTransactionmodal(value))
  }

  openTransactionmodal(response:any):void{

    let options = {
      order_id: response.orderId,
      key_id: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'Priya',
      description: 'test payment',
      image:'',
      handler: (response:any)=>this.processResponse(response),
      prefill:{
        name: 'pk',
        email: 'opk@gmail.com',
        contact:'9049522162'
      },
      notes:{
        address:'online shopp'
      },
      theme:{
        color: 'red'
      }
    };
    const razorpayobj:any = new Razorpay(options);
    razorpayobj.open();
  }


  processResponse(response:any){
    console.warn(response)
  }

}
