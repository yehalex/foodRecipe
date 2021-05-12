import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/http-db-service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";


@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private datastorageservice: DataStorageService, private recipesService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if (this.recipesService.getRecipes().length === 0){
            return this.datastorageservice.getRecipes();
        } else {
            return this.recipesService.getRecipes();
        }
    }
}