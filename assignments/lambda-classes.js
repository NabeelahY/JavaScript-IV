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

class Student extends Person {
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground,
        this.className = student.className,
        this.favSubjects = student.favSubjects
    }
    listsSubjects() {
       this.favSubjects.forEach(subject => console.log(subject)); 
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor{
    constructor(pm) {
        super(pm);
        this.gradClassName = pm.gradClassName,
        this.favInstructor = pm.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const jane = new Student({
    name: 'Jane',
    age: 23,
    location: 'Bali',
    previousBackground: 'chef',
    className: 'webeu2',
    favSubjects: ['javascript, less, react']
})

const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    specialty: 'ruby',
    favLanguage: 'javascript',
    catchPharse: 'Don\'t forget the homies'
  });

  const aisha = new ProjectManagers({
    name: 'Aisha',
    age: 30,
    location: 'South Africa',
    specialty: 'react',
    favLanguage: 'C#',
    catchPharse: 'Carpe diem',
    gradClassName: 'CS1',
    favInstructor: 'Gabe',
  })

  console.log(jane.speak());
  console.log(fred.demo('javascript'))
  console.log(fred.grade(jane, 'javascript'))
  console.log(jane.listsSubjects())
  console.log(jane.PRAssignment('react'))
  console.log(jane.sprintChallenge('redux'))
  console.log(aisha.standUp('webeu2'))
  console.log(aisha.debugsCode(jane, 'CSS'))