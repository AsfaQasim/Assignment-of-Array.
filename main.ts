// <------- Assignment Of Array  -------->
// <-------Question 01 --------> 

const fruits : string [] = ["apple", "banana", "mango", "orange"];
console.log(fruits);
// The output will be ['apple', 'banana', 'mango', 'orange']


// < -------- Question 02 -------->

const numbers: number[] = [10, 20, 30, 40];
console.log(numbers);

// The output will be [10, 20, 30,40]

// <--------- Question 03 --------->

const thirdFruit = fruits[2];
console.log(thirdFruit);

// The output will be mango

// < -------- Question 04 --------->

numbers[1] = 25;
console.log(numbers);

// The output will be [10, 25, 30, 40]

// <-------- Question 05 ---------->

fruits.push("Grape");
console.log(fruits);

//The output will be  ['apple', 'banana', 'mango', 'orange', 'Grape']

// <-------- Question 06 ---------->

const lastfuit =fruits.pop();
console.log(fruits);

// The output will be ['apple', 'banana', 'mango', 'orange']

// < -------- Question 07 ---------->

const firstFruit = fruits.shift();
    console.log(fruits);
    
    // The output will be ['banana', 'mango', 'orange']

 // <----- Question 08 ----------->

 fruits.unshift("Kiwi");
    console.log(fruits);
// The output will be ['kiwi', 'apple', 'banana', 'mango', 'orange']

// <-------- Question 09 ---------->

fruits.splice(1,2);
console.log(fruits);

// The output will be p['kiwi', 'orange']

// < -------- Question 10 --------->

fruits.splice(2,0 , "pineapple", "pear");
console.log(fruits);

// The output will be ['kiwi', 'orange', 'pineapple', 'pear']

// <--------- Question 11 ---------->

const citrusFruits = fruits.slice(0,2);
console.log(citrusFruits);

// The output will be ['kiwi', 'orange']

// < --------- Question 12 --------->

const lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);

// The output will be ['pineapple', 'paer']




    

 




