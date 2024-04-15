import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductParam } from '../product-param';
import { ProductsService } from '../products.service'
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProductComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent implements OnInit {
  data: ProductParam[];
  // constructor(private ProductsService: ProductsService) {
  //   this.id = ProductsService.getId(1).id;
  // }
  index: number = 0
  productParam: ProductParam
  ngOnInit() {
    if(this.route.snapshot.paramMap.get('id')){
    this.index = +(""+this.route.snapshot.paramMap.get('id'));
     }
     this.productParam = this.data[this.index-1]
   }
  

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService  
  ) {
    this.data = ProductsService.getData()
    this.productParam = this.data[0]
  }

  
  
}
export { ProductParam };