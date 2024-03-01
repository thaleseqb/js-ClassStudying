class User {
    constructor(name, email,birth, role, active = true) {
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.role = role || 'student';
        this.active = active;        
    };

    exhibitInfo() {
        return `the student's name and email are ${this.name}, ${this.email}`;
    }


};

// the command new is used to invoke the cosntructor function
// and the class object is returned
const newUser = new User('thales', 't@t.com', '20')

console.log(newUser.exhibitInfo())
// the command below shows if User is prototype of newUser
console.log(User.prototype.isPrototypeOf(newUser))