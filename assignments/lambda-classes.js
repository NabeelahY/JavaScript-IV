// CODE here for your Lambda Classes
class Person {
    constructor(person) {
        this.name = person.name,
            this.age = person.age,
            this.location = person.location,
            this.gender = person.gender
    }
    speak() {
        console.log(`Hello. My name is ${this.name}. I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty,
            this.favLanguage = obj.favLanguage,
            this.catchPharse = obj.catchPharse
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}