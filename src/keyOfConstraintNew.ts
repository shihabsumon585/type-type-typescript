

// keyof : type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
    plane: string;
}

type poorPeoplesVehicle = keyof RichPeoplesVehicle;


const myVehicle : poorPeoplesVehicle = "plane"