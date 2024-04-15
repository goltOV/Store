import { Injectable } from '@angular/core';
import { ProductParam } from './product-param';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: ProductParam[] = [{
    id: 1,
    name: "name",
    price: 234.98,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGW7Xenkb8mkB7Jq-CR3pXFevxcOW1FpiwA&usqp=CAU",
    availableUnits: 6,
    description: "opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis ",
  },{
    id: 2,
    name: "Name",
    price: 90.00,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGW7Xenkb8mkB7Jq-CR3pXFevxcOW1FpiwA&usqp=CAU",
    availableUnits: 4,
    description: "opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis ",
  },{
    id: 3,
    name: "nAMe",
    price: 132.49,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGW7Xenkb8mkB7Jq-CR3pXFevxcOW1FpiwA&usqp=CAU",
    availableUnits: 40,
    description: "opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis ",
  },{
    id: 4,
    name: "namE",
    price: 24.99,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGW7Xenkb8mkB7Jq-CR3pXFevxcOW1FpiwA&usqp=CAU",
    availableUnits: 34,
    description: "opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis ",
  }];
  getData(): ProductParam[] {
    return this.data;
  }
  // getId(id: number): ProductParam{
  //   let result: ProductParam = this.data[0];
  //   this.data.forEach((element) => {
  //     if(element.id = id){result = element}
  //   })
  //   return result;
  // }
  addData(newData: ProductParam) {
    this.data.push(newData);
  }




}
export { ProductParam };