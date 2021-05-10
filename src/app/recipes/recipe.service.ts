import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }
    
    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
    }
}