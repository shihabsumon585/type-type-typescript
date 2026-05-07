// generic function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayUserObj = (value: { id: number, name: string }) => {
    return [value];
}

const arrString = createArrayWithString("Apple");
const arrNumber = createArrayWithNumber(111);
const arrObj = createArrayUserObj({
    id: 123,
    name: "Md Shihab Sumon"
})


const addStudentFunction = <T, X>(studentInfo: T, studentInfo2: X) => {
    return {
        course: "Next Level",
        ...studentInfo,
        ...studentInfo2
    }
}

const student1 = {
    id: 123,
    name: "Md Shihab Sumon",
    batch: "Level_1-12  Level_2-7"
}

const student2 = {
    id: 324,
    name:"Dola Sarkar",
    isMarried: true,
    homeTown: "Naogaon"
}

console.log(addStudentFunction(student1, student2))