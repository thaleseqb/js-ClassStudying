class User {
    constructor(name, email,birth, role, active = true) {
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.role = role || 'student';
        this.active = active;        
    };
};