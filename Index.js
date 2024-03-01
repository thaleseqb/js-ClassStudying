// -- REFERENT TO THE CLASSUSER.JS DOCUMENT 
// ----------------------------------
// the command new is used to invoke the cosntructor function
// and the class object is returned
const newUser = new User('thales', 't@t.com', '20')

// console.log(newUser.exhibitInfo())
// the command below shows if User is prototype of newUser
// console.log(User.prototype.isPrototypeOf(newUser))
// ----------------------------------


// -- REFERENT TO THE ADMIN.JS DOCUMENT 
// ----------------------------------
const newAdmin = new Admin('maria', 'm@m.com', '12')

// console.log(newAdmin)
// console.log(newAdmin.exhibitInfo())

// console.log(newAdmin.createCourse('js', 20))
// ----------------------------------


// -- REFERENT TO THE DOCENT.JS DOCUMENT 
// ----------------------------------
const newDoc = new Docent('Arnaldo', 'A@A.com', 13)
// console.log(newDoc.approveStudent('Miguel', 'M.L.'))
// ----------------------------------


