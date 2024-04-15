import { Component, Input } from '@angular/core';
import { ProductParam } from '../product-param';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() productParam!:ProductParam;
}
