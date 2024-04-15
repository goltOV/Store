import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-basket-list',
  standalone: true,
  imports: [ ProductComponent ],
  templateUrl: './basket-list.component.html',
  styleUrl: './basket-list.component.scss'
})
export class BasketListComponent {

}
