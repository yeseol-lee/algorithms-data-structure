class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "You Are Expelled!!!";   
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum / this.scores.length;
    }
    
    static EnrollStudents() {
        return "ENROLLING STUDENTS";
    }
}

let firstStudent = new Student("Colt", "steele");

firstStudent.fullName();

data = new Array(1, 2, 3)  ///the same!
data.push(23);
console.log(data);