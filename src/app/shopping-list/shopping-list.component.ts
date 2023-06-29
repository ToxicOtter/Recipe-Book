import { Component } from '@angular/core';

import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];

  constructor(private shoppinListService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppinListService.getIngredients();
    this.shoppinListService.ingredientChanged
      .subscribe(
        (ingredients:Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }
}
