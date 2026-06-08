
// object interface

type User = {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    },
    address: string;
    designation: string;
}

interface IUser {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    },
    address: string;
    designation: string;
}

const user1: IUser = {
    id: 123,
    name: {
        firstName: "Md",
        middleName: "Shihab",
        lastName: "Sumon"
    },
    address: "Borodadpur, Gomastapur, Chapainawabgonj",
    designation: "Junior Developer"
}



// array interface

type Friends = string[];

interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["alim", "dalim", "rohim", "sumon", "rabbani"];


// function interface

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;