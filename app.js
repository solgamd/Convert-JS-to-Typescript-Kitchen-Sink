"use strict";
//My name
var firstName = "Megan";
//Number of states in USA
var states = 52;
//Add 5 and 4
var add = 5 + 4;
//When called, executes an alert in a pop-up.
function sayHello() {
    alert("Hello World!");
}
;
sayHello();
//When called, checks whether user is 21+, gives alert.
function checkAge(firstName, age) {
    if (age < 21) {
        alert("Sorry " + firstName + ", you aren't old enough to view this page!");
    }
}
;
//Calling function checkAge with parameters of people.
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
//Declaring var of favorite veggies.
var favveg = ["squash", "carrot", "peas"];
//Calling list of veggies one by one.
// for(var i = 0; i < favveg.length; i++) {
//     console.log(favveg[i]);
// }
// for(let veg of favveg) {
//     console.log(veg);
// }
favveg.forEach(function (veg) {
    console.log(veg);
});
//Declaring array of "peeps"
var peeps = [
    {
        firstName: "Rick",
        age: 18
    },
    {
        firstName: "Morty",
        age: 14
    },
    {
        firstName: "Jerry",
        age: 44
    },
    {
        firstName: "Beth",
        age: 36
    },
    {
        firstName: "Summer",
        age: 21
    }
];
//Executing loop checkAge for array "peeps"
for (var i = 0; i < peeps.length; i++) {
    checkAge(peeps[i].firstName, peeps[i].age);
}
;
//Alternative syntax for above for loop, using the singular of the plural array name to increment:
// for (let peep of peeps){
//     checkAge(peep.firstName, peep.age);
function getLength(str) {
    return str.length; // return stops the function
}
;
var result = getLength("Hello World");
if (result % 2 === 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}
