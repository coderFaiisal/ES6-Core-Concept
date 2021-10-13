//destructure of object.
const person = {name: "Saif Ahmed", age: 17, phoneNumber: 01828685381, job: "student", friends: ["Tahsin", "Tahmid", "Shohag"] };

const { age, job, friends } = person;

console.log(age, job, friends);


//destructure of array.
const friend = ["Tahsin", "Tahmid", "Shohag", "Hanif", "Ovi"];
const [chotoFriend, secondFriend, ...othersFriends] = friend;
console.log(chotoFriend, secondFriend, othersFriends);
