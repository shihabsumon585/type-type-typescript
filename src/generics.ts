// dynamically generalize: generic
type Generic<X> = Array<X>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
// const friends: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: Generic<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[] = [4, 7, 11];
// const rollNumbers: Array<number> = [4, 7, 11];
const rollNumbers: Generic<number> = [4, 7, 11];

// const isEligibleList: boolean[] =  [true, false, true];
// const isEligibleList: Array<boolean> =  [true, false, true];
const isEligibleList: Generic<boolean> =  [true, false, true];


// use of array
type CoOrdinates<X, Y> = [X, Y];

const coordinates: CoOrdinates<number, number> = [23, 32];


// use of object

const userList: Generic<{name: string, age: number}> = [
    {
        name: "Mr.X",
        age: 22
    },
    {
        name: "Mr. Y",
        age: 25
    }
]