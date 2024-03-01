import User from './classUser.js'

class Admin extends User {
    constructor(name, email, birth, role = 'Admin', active = true) {
        super(name, email, birth, role, active);
    };

    createCourse(courseName, vac) {
        return `${courseName} Course created, there are ${vac} remaining!`
    };
};


const newAdmin = new Admin('maria', 'm@m.com', '12')

// console.log(newAdmin)
// console.log(newAdmin.exhibitInfo())

console.log(newAdmin.createCourse('js', 20))