import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe("A Test Recipe","This is test recipe",
    "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--96459_10.jpg?itok=p0e0z2zA"),
    new Recipe("A Test Recipe 2","This is test recipe 2",
    "http://clv.h-cdn.co/assets/16/52/980x490/landscape-1482875820-clx010117winnerdinners-03.jpg")
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
