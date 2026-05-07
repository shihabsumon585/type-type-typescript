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