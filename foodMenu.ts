import {WhopperJrCroissant, Whopper, BaconKing} from './picturesURLs';

export class FoodCard 
{
  id:number;
  name:string;
  picture:string;
  price:number;
  number:number;
  calories:string;
  favourite:boolean;
  constructor(id:number,name:string, picture:string, price:number, calories:string)
  {
    this.id=id;
    this.name=name;
    this.picture=picture;
    this.price=price;
    this.calories=calories;
    this.number=1;
    this.favourite=false;
  }
}

export const food = 
[
  new FoodCard(1,'Whopper Jr. Croissant',WhopperJrCroissant,1.11,'410 Kcal'),
  new FoodCard(2,'Whopper',Whopper,2.22,'669 Kcal'),
  new FoodCard(3,'Bacon King',BaconKing,3.33,'1193 Kcal'),
]
export const order = []
