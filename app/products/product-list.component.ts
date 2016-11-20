import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductService} from './product.service'
@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products:IProduct[];
    pageTitle:string = "Product List";
    showImage:boolean = false;
    imageWidth:number=50;
    imageMargin:number=2;
    listFilter:string='';
    errorMessage: string;
    constructor(private _productService:ProductService) { 
       
    }
  
    
    ngOnInit():void { 
        this._productService.getProducts()
        .subscribe(products => this.products = products,
        error =>this.errorMessage = <any>error); 
    }
    toggleImage():void {
        this.showImage = !this.showImage;
    }
    onRatingClicked(message:string): void{
            this.pageTitle = 'Product List: ' + message;
    }
}

