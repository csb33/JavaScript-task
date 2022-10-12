//string, numbers & boolean:
var fruitName = ["Apple", "Orange"];
var appleInStock = 6;
var orangeInStock = 10;
var customerPaid = true;

//concatenate
var addFruit = "Mango";
var addMoreFruit = "Grape";
console.log(fruitName.concat(addFruit, addMoreFruit));

//if else
if (appleInStock > 0 && customerPaid === true) {
  console.log("in stock and customer has paid");
} else {
  console.log("out of stock");
}

//object
const person1 = { name: "Finley", age: 26, height: 176 };

//array
const weekdayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
