const Student = function (name) {
    //privé
    const sname = name;
    const getName = () => sname;
    //priviligié
    this.display = () => {
        console.log(sname);
    }
    //publique
    this.sayHello = function () {
        console.log("Hello");
    }
};
Student.prototype.whereIam = () => "in the kitchen";
const stud1 = new Student("Riri");
stud1.displayName();
//stud1.getName();
console.log(stud1.whereIam());