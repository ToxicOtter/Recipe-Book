import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

export class ShoppingListService {
    IngredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    setNewIngrediente(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientChanged.emit(this.ingredients.slice());
    }
}