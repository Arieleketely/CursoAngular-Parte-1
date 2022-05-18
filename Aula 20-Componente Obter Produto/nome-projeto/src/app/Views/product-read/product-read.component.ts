import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/componets/template/product/product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
products:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(this.products=>
      {
        this.products=products
        console
      })
  }

}
