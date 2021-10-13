//regular way of declare a function.
function doubleIt(num){
    return num * 2;
}
const result = doubleIt(7);
console.log(result);


// funtion declare as a variable.
const doubleItSecond = function myFun(num) {
    return num * 3;
}
const result2 = doubleItSecond(4);
console.log(result2);


// function declare as an arrow function function. Here are the example for single parameter.
const doubleItThird = num => num * 4;
const result3 = doubleItThird(4);
console.log(result3);


//arrow function for double parameter.
const doubleItFourth = (num1, num2) => num1 + num2;
const result4 = doubleItFourth(2, 5);
console.log(result4);


//arrow function without parameter.
const doubleItFive = () => 55;
const result5 = doubleItFive();
console.log(result5);


//arrow function with lot of thing.
const doubleItSix = (x, y) => {
    const sum = x + y;
    return sum;      //manualy I should declare return;
}
const result6 = doubleItSix(7, 15);
console.log(result6);