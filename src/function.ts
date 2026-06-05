// function
// arow function, normal function

function add(num1: number, num2: number) : number {
    return num1 + num2;
}
add(2, 2);


const arrowAdd = (num1: number, num2: number) : number => num1 + num2;

const poorUser = {
    name: "Md Shihab Sumon",
    balance: 0,
    addBalance(value: number) {
        const totalBalance = this.balance + value;
        this.balance = totalBalance;
    }
}
poorUser.addBalance(100000);

const arr: number[] = [1, 2, 3];
const sqrArray = arr.map((element: number) : number => element * element);