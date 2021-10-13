class Parents{
    constructor(){
        this.fatherNames = "Mohiuddin";
    }
}

class Child extends Parents{
    constructor(id, name){
        super();
        this.id = id;
        this.name = name;        
    }
    //We can use a function inside a class.
    getFullName(){
        return this.name + " " + this.fatherNames;
    }
}
const baby = new Child(1, "Saif");
const baby2 = new Child(2, "Tahsin");
console.log(baby, baby2, baby.getFullName(), baby2.getFullName());