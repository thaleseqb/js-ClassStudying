// studying OOP in javascript without class sintax

// constructor function:
function User(name, email) {
    this.name = name;
    this.email = email;

    this.exhibitInfo = function(){
        return `${this.name}, ${this.email}`;
    };
};

// const newUser = new User('Mr. java', 'j@j.com')
// console.log(newUser.exhibitInfo())

// constructor function:
function Admin(role) {
    // The call method is geting the properties definedin User
    // Now the context of User belongs to Admin too.
    User.call(this, 'Mr. java', 'j@j.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin('admin');

// console.log(newUser.exhibitInfo());
// console.log(newUser.role);

const user = {
    init: function(name, email) {
        this.name = name;
        this.email = email;        
    },
    exhibitInfo: function(){
        return this.name;
    }
}

const newUser = Object.create(user);
newUser.init('thales', 't@t.com');
// console.log(newUser.exhibitInfo());

