// array destructuring 

const familyMember = ["Mother", "Father", "Brother", "Sister"];

const [, , vaiLog] = familyMember;
// console.log(vaiLog);


// object destructuring

const user = {
    id: 1036250619,
    name: {
        firstName: "MD",
        middleName: "SHIHAB",
        lastName: "SUMON"
    },
    isStudent: true,
    study: "Under Graduate"
}

const {study: porasuna, name: {middleName}} = user;

console.log(middleName);