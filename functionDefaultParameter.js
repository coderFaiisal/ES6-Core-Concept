function add(num1, num2 = 3) {         // The easist proccess to set.
    // var num2 = num2 || 0 This is one of the way.
    return num1 + num2;
}
var result = add(12, 6);
console.log(result);