// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Instructor 
class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    addPoints(student) {
        return `${student.name} gets points of ${Math.floor(Math.random() * 6) + student.score}`;
    }
    subtractPoints(student) {
        return `${student.name} gets points of ${student.score - Math.floor(Math.random() * 6)}`;
    }
}

// Student 
class Student extends Person {
    constructor(stuAttributes) {
        super(stuAttributes);
        this.previousBackground = stuAttributes.previousBackground;
        this.className = stuAttributes.className;
        this.favSubjects = stuAttributes.favSubjects;
        this.score = stuAttributes.score;
    }
    listsSubjects() {
        return `Favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
    doesStudentGraduate() {
        if (this.score > 60) {
            return `${this.name} is ready to graduate from Lambda School`;
        } else {
            return `${this.name} should keep doing assignments to increase ${this.name}'s score`;
        }
    }
}

// Project Manager 
class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}