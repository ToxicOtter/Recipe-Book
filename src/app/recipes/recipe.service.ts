import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Teste','Teste','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('Teste2','Teste2','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}