import { Injectable } from '@angular/core';
import{Http , Response} from '@angular/http';
import { IProduct } from './product';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService {
    private _productUrl = '../api/products/products.json'
    getProducts(): Observable<IProduct[]>{
       return this._http.get(this._productUrl)
       .map((response:Response) => <IProduct[]> response.json())
       .do(data => console.log('All:' + JSON.stringify(data)))
       .catch(this.handleError);
       
    }
      constructor(private _http:Http){}
      handleError(error:Response){
            console.log(error);
            return Observable.throw(error.json().error || ' Server error');
      }
}