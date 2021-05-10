import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private IngSub: Subscription

  constructor(private slService: ShoppingListService) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.IngSub = this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }
  ngOnDestroy(){
    this.IngSub.unsubscribe;
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

}
