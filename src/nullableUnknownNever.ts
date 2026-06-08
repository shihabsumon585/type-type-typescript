// nullable type

const getUser = (input: string | null) => {
    if(input) {
        console.log(`From Database:  ${input}`)
    } else {
        console.log("ALL USER HERE !")
    }
}

// console.log("Md Shihab Sumon");
// console.log(null);

// unknown


const discountCalculator = (input: unknown) => {
    if(typeof input === "number") {
        const discount = (input * 10) / 100;
        const discountedPrice = input + discount;
        console.log({discountedPrice});
    } else if (typeof input === "string") {
        const originalPrice = input.split(" ");
        const discount = (Number(originalPrice[0]) * 10) / 100;
        const discountedPrice = Number(originalPrice[0]) + discount;
        console.log({discountedPrice});
    } else {
        console.log("Please Enter the original price")
    }
};
discountCalculator(100);
discountCalculator("100 Taka");
discountCalculator(null);

// void or never

const throwError = (msg: string): never => {
    throw new Error(msg);
}
throwError("Error....")