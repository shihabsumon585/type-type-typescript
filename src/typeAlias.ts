type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    },
    gender: "male" | "female",
    contactNo: number,
    address: {
        division: string;
        city: string;        
    }
}


const user1: User = {
    id: 123,
    name: {
        firstName: "Shihab",
        lastName: "Sumon"
    },
    gender: "male",
    contactNo: 1751782602,
    address: {
        division: "Dhaka",
        city: "Mirpur"
    }
}


const user2: User = {
    id: 123,
    name: {
        firstName: "Abir",
        lastName: "Mahmuda"
    },
    gender: "female",
    contactNo: 1751782602,
    address: {
        division: "Dhaka",
        city: "Mirpur"
    }
}


// function type alias

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;