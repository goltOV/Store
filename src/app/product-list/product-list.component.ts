import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductParam } from '../product-param';
import { ProductsService } from '../products.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productParamList: ProductParam[];
  constructor(private ProductsService: ProductsService) {
    this.productParamList = ProductsService.getData();
  }

   
}
export { ProductParam };

