


const createArrayWithString = (value: string) => {
    return [value];
};

const createArrayWithNumber = (value: number) => {
    return [value];
};

const createArrayWithUserObj = (value: {id: number; name: string, designation: string}) => {
    return value;
}

const storeStringArray = createArrayWithString("Abdur Rahman");
const storeNumberArray = createArrayWithNumber(1542);
const storeUserObjArray = createArrayWithUserObj({
    id: 251,
    name: "Md Shihab Sumon",
    designation: "Junior Developer"
})


const createArrayWithGeneric = <T> (value: T) => {
    return value;
}

console.log(
    createArrayWithGeneric("Md Shihab Sumon"),
    createArrayWithGeneric(222),
    createArrayWithGeneric({
    id: 251,
    name: "Md Shihab Sumon",
    designation: "Junior Developer"
}),
)