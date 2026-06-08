// ? : ternary operator => decision making
// ?? : nullish coalescing operator => working on null/undefined
// ? => optional chaining


// ? : ternary operator => decision making
const biyerJonnoEligable = (age: number) => {
    // if(age >= 21) {
    //     console.log("You are eligable.")
    // } else {
    //     console.log("You are not eligable.")
    // }

    const result = age >= 21 ? "You age eligable" : "You are not eligable!";
    return result;
}
// biyerJonnoEligable(21);


// ?? : nullish coalescing operator

const userTheme = undefined;
const selectedTheme = userTheme ?? "Light Theme";

const isAuthenticated = null; 

const resultWithTernary = isAuthenticated ? isAuthenticated : "you are guest";

const resultWithNullish = isAuthenticated ?? "you are guest";