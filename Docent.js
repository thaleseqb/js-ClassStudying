import User from './classUser.js'

class Docent extends User{
    constructor(name, email, birth, role = 'Docent', active=true) {
        super(name, email, birth, role, active);
    };

    approveStudent(student, course) {
        return `${student} approved in ${course} course`
    }
};

const newDoc = new Docent('Arnaldo', 'A@A.com', 13)
console.log(newDoc.approveStudent('Miguel', 'M.L.'))