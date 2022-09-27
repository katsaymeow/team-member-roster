const TeamMember = require("./team-members.js");

class Manager extends TeamMember {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;