//js array practice
//1. create an array called "food" and put your 3 favourite foods in it

var food = ['mango','steak', 'broccoli', 'tacos'];

//2. display th first item in the array
console.log(food[0]);

//3. display the food items in each on a new line
for (var i = 0; i < food.length; i++){
    console.log(food[i]);
  }

//4. display this: 'Food: food1, food2, food3'
console.log('Food: ' + food);

//5. display food and ingredients below with ingredients indented with a tab
var foods = [
  ['sushi', ['rice', 'seaweed', 'fish']],
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']],
  ['pizza', ['dough', 'cheese', 'sauce']]
];

for (var i = 0; i < foods.length; i++){
  console.log(foods[i][0]);//print food name - 1st element in sub-array

  //loop through the ingredient array - at position one of the upper array
  for(var j = 0; j < foods[i][1].length; j++){
    console.log('\t' + foods[i][1][j]);  // '\t' is used to tab in on a displayed line of code

    //i is the current food item
    //1 is the list of ingredients
    //j is the current ingredient in the inner loop
  }
}
