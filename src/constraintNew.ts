// constraint : strict rules deya


type Student = {
    id: number;
    name: string;
    dateOfBirth: string;
}

const createUserWithGeneric = <T extends Student> (value: T)  => {
    return value;
}

const student1 = {
    id: 423,
    name: "Md Shihab Sumon",
    dateOfBirth: "12-12-2008"
}

const result = createUserWithGeneric(student1);
console.log(result);

