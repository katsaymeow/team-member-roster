const TeamMember = require('./team-members.js');

class Intern extends TeamMember {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;