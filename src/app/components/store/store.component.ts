import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  {

  selectedCategory: string | undefined;

  constructor(private repository: ProductRepository) { }

  get products(): Product[]{
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }

}
