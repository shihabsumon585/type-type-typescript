// conditional type : je type conditionar er upor nirvorsheel

type A = null;

type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichVehicles = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof RichVehicles ? true : false;

type HasBike = CheckVehicle<"bike">;