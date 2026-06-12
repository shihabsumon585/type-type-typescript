// mapped types

// map

const arrayOfNum: number[] = [1, 4, 6];

// const arrayOfString: string[] = ["1", "2", "3"]

const arrayOfString: string[] = arrayOfNum.map((num) => num.toString());

type AreaOfNumber = {
    height: number;
    width: number;
}

type Area<T> = {
    [key in keyof T]: T[key];
};

const area1: Area<{height: string, width: number}> = {
    height: "50",
    width: 100
}

const area2: {height: string, width: number} = {
    height: "50",
    width: 100
}