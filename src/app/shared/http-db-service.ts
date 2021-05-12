import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    putRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipeapp-e4b81-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe(
            response => {
                console.log(response);
            }
        );
    };

    getRecipes(){
        return this.http
        .get<Recipe[]>('https://recipeapp-e4b81-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes => {              // map call on rxjs
            return recipes.map(recipe => {  // array method map called on recipes
                return {... recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            }); 
        }), tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        );
    };
}