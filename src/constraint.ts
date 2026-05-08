// constrain : rules deya --> strict rules deya

interface Student {
    id: number;
    name: string;
    class: string;
    dateOfBirth: string
}
const createArrayUsingGeneric = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "Md Shihab Sumon",
    class: "Graduation 2nd Year",
    dateOfBirth: "27 November, 2004",
    address: "Borodadpur, Gomastapur, Chapainawabgonj"
}

console.log(createArrayUsingGeneric(student1))