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
    
    get name() {
        return this.#name
    };

    get email() {
        return this.#email
    };

    get birth() {
        return this.#birth
    };

    get role() {
        return this.#role
    };

    get active() {
        return this.#active
    };

    set name(newName) {
        this.#name = newName
    };

    set email(newEmail) {
        this.#email = newEmail
    };

    set birth(newBirth) {
        this.#birth = newBirth
    };

    set role(newRole) {
        this.#role = newRole 
    };

    set active(newStatus) {
        this.#active = newStatus
    };

    exhibitInfo() {
        return `the student's name and email are ${this.#name}, ${this.#email}`;
    };
};