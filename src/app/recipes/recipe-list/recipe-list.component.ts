import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test recipe', 'tester for recipe', 'https://cdn.frankerfacez.com/emoticon/228449/4'),
    new Recipe('test 2', 'tester 2', 'https://cdn.frankerfacez.com/emoticon/228449/4')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
