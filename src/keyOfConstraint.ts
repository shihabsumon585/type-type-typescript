// keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
}

type PoorPeoplesVehicle = keyof RichPeoplesVehicle;

const poorPeopleVehicle: PoorPeoplesVehicle = "cng";


// const user = {
//     id: 222,
//     name: "Shihab",
//     address: {
//         city: "Dhaka"
//     }
// }

// // const myId = user.id;
// const myId = user['id'];
// const myName = user["name"];
// const address = user["address"];

// console.log(myId, myName, address);


const getPropertyFromObj = <X>(object: X, key: keyof X) => {
    return object[key];
}

const user = {
    id: 2343,
    name: "Md Shihab Sumon",
    address: {
        city: "Dhaka"
    }
}
const patient = {
    id: 3421,
    name: "Dola Sarkar",
    address: {
        city: "Naogaon"
    },
    isStudent: true
}
const cityzenship = {
    nid: 1036250619,
    fullName: "Mohammad Shihab Sumon",
    fullAddress: {
        villege: "Borodadpur",
        upazilla: "Gomastapur",
        zilla: "Chapainawabgonj"
    },
    nationality: "Bangladeshi"
}
console.log(getPropertyFromObj(user, "name"), getPropertyFromObj(patient, "isStudent"), getPropertyFromObj(cityzenship, "fullAddress"))