export default class User {
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active=true) {
        this.#name = name;
        this.#email = email;
        this.#birth = birth;
        this.#role = role || 'student';
        this.#active = active;        
    };
    
    exhibitInfo() {
        return `the student's name and email are ${this.#name}, ${this.#email}`;
    };
};