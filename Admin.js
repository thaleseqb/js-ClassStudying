import User from './classUser.js'

export default class Admin extends User {
    constructor(name, email, birth, role = 'Admin', active = true) {
        super(name, email, birth, role, active);
    };

    returnProperty(){
        return this.nome
    }

    createCourse(courseName, vac) {
        return `${courseName} Course created, there are ${vac} remaining!`
    };
};