import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(categoryService : CategoryService, productService: ProductService) { 
    this.categories$ = categoryService.getCategories();
  }

  save(product){
    this.productService.creatw(product);
  }
  ngOnInit() {
  }

}
