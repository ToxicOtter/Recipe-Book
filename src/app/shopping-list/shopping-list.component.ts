import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;

  constructor(private shoppinListService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppinListService.getIngredients();
    //salva a subscription na variável, dessa forma é possível destruí-la ao sair do componente
    this.igChangeSub =  this.shoppinListService.ingredientChanged
      .subscribe(
        (ingredients:Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )
  }

  ngOnDestroy(): void{
    this.igChangeSub.unsubscribe();
  }
}
