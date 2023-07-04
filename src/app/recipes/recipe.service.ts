import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    constructor(private shoppingListService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe(
            'Bolo de Rolo',
            'Parece um rocambole, mas não é!',
            'https://www.receiteria.com.br/wp-content/uploads/bolo-de-rolo.jpeg',
            [
                new Ingredient('gramas de Goiabada',300),
                new Ingredient('mL de água',120),
                new Ingredient('gramas de Manteiga sem Sal',200),
                new Ingredient('gramas de Açúcar',180),
                new Ingredient('ovos',5),
                new Ingredient('gramas de Farinha de Trigo',180),
            ]
            ),
        new Recipe(
            'Alfajor',
            'Uma delícia de bolinho.',
            'https://d1uz88p17r663j.cloudfront.net/original/2a643837f734f3869bfb57485d2ec19a_alfajor-argentino-receitas-nestle.jpg',
            [
                new Ingredient('gramas de Manteiga',200),
                new Ingredient('ovos',1),
                new Ingredient('gemas',2),
                new Ingredient('xícara de açúcar',1),
                new Ingredient('xícaras de Farinha de Trigo',1),
                new Ingredient('colheres (sopa) de mel',4),
                new Ingredient('colheres (sopa) de Fermento em Pó',2),
                new Ingredient('colheres (sopa) de Bicarbonato de Sódio',1),
                new Ingredient('colheres (sopa) de Essênsia de Baunilha',1),
            ]
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.shoppingListService.addIngredients(ingredient);
    }
}