import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';


export const routes: Routes = [
    {path: "product-list", component: ProductListComponent},
    {path: "product/:id", component: ProductInfoComponent},
    {path: "**", component: ProductListComponent}
];
