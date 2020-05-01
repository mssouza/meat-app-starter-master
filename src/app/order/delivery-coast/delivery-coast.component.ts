import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-coast',
  templateUrl: './delivery-coast.component.html'
})
export class DeliveryCoastComponent implements OnInit {

@Input() delivery: number
@Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

 total(): number{
   return this.delivery + this.itemsValue
 }

}
