import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent  implements OnInit{
  private readonly router = inject(ActivatedRoute);

  ngOnInit() : void {
    this.router.data.subscribe(({myData}) => console.log(myData));
  }

}
