import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://mayakitchenette.com/wp-content/uploads/2014/07/mee-siam-recipe-2-1.jpg?x93888')
  ];

  constructor() { }

  ngOnInit() {
  }

}
