import { Product } from './product.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from  '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl="http://localhost:3001/products"
  constructor(private snackBar:MatSnackBar,private http:HttpClient) { }

  showMensager(msg:string):void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: ['my-snack-bar']
    })
  }
  create(product:Product):Observable<Product>{

    return this.http.post<Product>(this.baseUrl,product)
  
    
  }

}

