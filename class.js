class Students{
    constructor(sId, sName, sSchool){
        this.id = sId;
        this.name = sName;
        this.school = sSchool;
        this.country = "Bangladesh";
    }
};
const student1 = new Students(12, "Saif", "Feni govt. boys.");
const student2 = new Students(22, "Zidan", "Comilla govt. boys.");
const student3 = new Students(1, "Imon", "Gunaboti al-farabi high school.")
console.log(student1, student2, student3);