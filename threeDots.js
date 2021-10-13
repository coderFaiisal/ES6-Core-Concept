const friendsAge = [35, 66, 34, 56, 56];
const friendsAge2 = [65, 64, 32, 54, 76];

//Create a new array with three dots.
const allAges = [...friendsAge, ...friendsAge2]
console.log(allAges);



const bussiness = 445;
const doctor = 567;
const politician =  870;

const takaPoisa = [445, 567, 870];
const maximum = Math.max(...takaPoisa);
console.log(maximum);