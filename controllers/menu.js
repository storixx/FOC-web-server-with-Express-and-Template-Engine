import {food, order, FoodCard} from '../foodMenu'

var orderedFoodId = 1

export const getAll = (req, res) => {
  res.json(food)
}
export const getOrder = (req, res) => {
  res.json(order)
}
export const addToOrder = (req, res) => {
  for (var i in food)
  {
        if(i==req.params.id-1)
        {
          var temp = new FoodCard(
            orderedFoodId,
            food[i].name, 
            food[i].picture, 
            food[i].price,
            food[i].calories)
          temp.number=food[i].number
          ++orderedFoodId
          order.push(temp)
        }
  }
  res.json(order)
}

export const removeFromOrder = (req, res) => {
  for (var i in order)
  {
        if(order[i].id==req.params.id)
        {
          order.splice(i, 1)
    }
  }
  res.json(order)
}

export const changeFavourite = (req, res) => {
  for (var i in food){
        if(i==req.params.id-1)
        {
          food[i].favourite=!food[i].favourite
        }
  }
  res.json(food)
}
export const increase = (req, res) => {
  for (var i in food){
        if(i==req.params.id-1)
        {
          ++food[i].number
        }
      }
  res.json(food)
}

export const decrease = (req, res) => {
  for (var i in food)
  {
        if(i==req.params.id - 1)
        {
          if(food[i].number > 1)
          {
            --food[i].number 
          }
        }
      }
  res.json(food)
}