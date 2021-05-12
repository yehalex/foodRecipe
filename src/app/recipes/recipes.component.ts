import { Component, OnInit } from '@angular/core';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  //providers: [RecipeService] will get destroyed when loading another page
})
export class RecipesComponent implements OnInit {
  constructor() { }
  
  ngOnInit(){
  }

}
