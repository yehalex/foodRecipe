import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('test recipe', 'tester for recipe', 'https://cdn.frankerfacez.com/emoticon/228449/4', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('Potato', 2),
        ]),
        new Recipe('test 2', 'tester 2', 'https://cdn.frankerfacez.com/emoticon/228449/4', 
        [
            new Ingredient('Pork Shoulder', 5),
        ])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList( ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }
}