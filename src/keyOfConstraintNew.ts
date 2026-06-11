

// keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
    plane: string;
}

type poorPeoplesVehicle = keyof RichPeoplesVehicle;


const myVehicle : poorPeoplesVehicle = "plane"



const user = {
    id: 243,
    name: "Md Shihab Sumon",
    address: {
        city: "Mirpur, Dhaka"
    }
}

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}


const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result = getPropertyFromObj(user, "name");

console.log(result)