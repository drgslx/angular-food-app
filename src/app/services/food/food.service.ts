import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return [{
      id: 1,
      name: 'Pizza',
      price: 10,
      cookingTime: '10-20',
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: 'assets/images/food1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
  {
    id: 2,
    name: 'MeatBalls',
    price: 5,
    cookingTime: '10-15',
    favorite: true,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: '/assets/images/food2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: 3,
    name: 'Hamburger',
    price: 8,
    cookingTime: '15-20',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: '/assets/images/food3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: 4,
    name: 'French Fries',
    price: 6,
    cookingTime: '20-30',
    favorite: true,
    origins: ['france', 'us'],
    stars: 4.5,
    imageUrl: '/assets/images/food4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id: 5,
    name: 'Waffles',
    price: 7,
    cookingTime: '40-50',
    favorite: false,
    origins: ['france', 'asia'],
    stars: 3.5,
    imageUrl: 'assets/images/food5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: 6,
    name: 'Pasta',
    price: 10,
    cookingTime: '40-50',
    favorite: false,
    origins: ['italy', 'asia'],
    stars: 4.5,
    imageUrl: 'assets/images/food6.jpg',
    tags: ['SlowFood', 'Pasta'],
  }

];
    }
   getAllTags():Tag[]{
    return [
      {name: 'All', count: 6},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1},
    ]
   }

   getAllFoodByTag(tag:String):Food[]{
    return tag === "All" ? this.getAll() : 
                            this.getAll().filter(food => food.tags?.includes(tag));
   } 
   getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
   }
   getFoodById(id:number):Food{
    return this.getAll().find(food => food.id === id)!;
  }

  }

  