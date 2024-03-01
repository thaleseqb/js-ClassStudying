import User from './classUser.js'

export default class Docent extends User{
    constructor(name, email, birth, role = 'Docent', active=true) {
        super(name, email, birth, role, active);
    };

    approveStudent(student, course) {
        return `${student} approved in ${course} course`
    }
};