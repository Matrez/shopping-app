import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Test Recipe', 'This is simple description',
      'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/70/36/6f/70366f7a-1b93-4e9f-5383-2ba2d6462aa7/mzl.lgsmqjja.jpg/300x0w.jpg'),
    new RecipeModel('Test Recipe', 'This is simple description',
      'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/70/36/6f/70366f7a-1b93-4e9f-5383-2ba2d6462aa7/mzl.lgsmqjja.jpg/300x0w.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
