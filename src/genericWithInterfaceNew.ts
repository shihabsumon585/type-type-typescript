

interface Developer<X, Y = null> {
    id: number;
    name: string;
    device: {
        name: string;
        brand: string;
        model: string;
        price: number;
    };
    smartWatch: X;
    bike?: Y;
}

interface BrandCharaWatch {
    brand: string;
    feature: {
        aiFeature: boolean;
        calculator: boolean;
    };
    price: number;
}

interface ApplceWatch {
    brand: string;
    feature: {
        aiFeature: boolean;
        calculator: boolean;
        blutooth: boolean;
        callFeature: boolean;
    };
    price: number;
};

interface Bike {
    brand: string;
    model: string;
    price: number;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
    id: 423,
    name: "Md Shihab Sumon",
    device: {
        name: "Laptop",
        brand: "Lenovo",
        model: "A83",
        price: 15000
    },
    smartWatch: {
        brand: "without brand",
        feature: {
            aiFeature: true,
            calculator: true,
        },
        price: 2000
    },
}

const richDeveloper: Developer<ApplceWatch, Bike> = {
    id: 423,
    name: "Md Shihab Sumon",
    device: {
        name: "Laptop",
        brand: "Lenovo",
        model: "A83",
        price: 15000
    },
    smartWatch: {
        brand: "without brand",
        feature: {
            aiFeature: true,
            calculator: true,
            blutooth: true,
            callFeature: true,
        },
        price: 12000
    },
    bike: {
        brand: "Yamaha",
        model: "350cc",
        price: 320000,
    }
}