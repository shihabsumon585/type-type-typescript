type User = {
    name: string;
    age: number;
}

type Admin = {
    role: "Admin" | "User";
}

type UserWithRole = User & Admin;

const user1: UserWithRole = {
    name: "Shihab",
    age: 22,
    role: "Admin"
}


interface IUser {
    name: string;
    age: number;
}
interface IUserWithRole extends IUser {
    role: "Admin" | "User";
}

const user2: IUserWithRole = {
    name: "Md Shihab Sumon",
    age: 23,
    role: "Admin"
}


type IsAdmin = boolean;

const isAdmin = false;

// interface: object type: array, object, function


// function
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;

// using interface
interface IAdd {
    (num1: number, num2: number): number
}
const iAdd: IAdd = (num1, num2) => num1 + num2;
console.log(iAdd(12,32))