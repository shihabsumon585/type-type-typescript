// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];
const arrayOfStringUsingMap: string[] = arrayOfNum.map(num => num.toString());
console.log(arrayOfStringUsingMap);

// type Area = {
//     height: number;
//     width: number;
// }

// type AreaOfString = {
//     height: string;
//     width: string;
// }

// type AreaOfBoolean = {
//     height: boolean;
//     width: boolean;
// }

// type AreaOfString = {
//     [key in "height" | "width"]: string;
// }

type Area<T> = {
    [key in keyof T]: T[key];
}

const area: Area<{height: boolean; widht: string}> = {
    height: true,
    widht: "40"
}

console.log(area)


