const user = {
    name: 'hello there',
    email: 'hi there',
    bornDate: '',
    role: '',
    active: true,
    exhibitInfo: function() {
        console.log(this.name, this.email)
    }
};

// the comand below will print name and email in console
// user.exhibitInfo()

// Now I desire to understand more about the this word largely used in javascript

// If we try to print the name and email in console like the way below
// we will get an undefined property, because the information that is desired
// is lost from the original context that it was be declared

const exhibit = function() {
    console.log(this.name)
}

// without binding the constant variables declared it is not possible acess the context
// related to the object 'user' declared in the begning of the document

const exhibitName = exhibit.bind(user)

exhibitName()
exhibit()