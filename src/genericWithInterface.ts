interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch, {
    brand: string;
    cc: number;
    hydrolic: boolean;
}> = {
    name: "Mr. Poor",
    salary: 20,
    device: {
        brand: "lenovo",
        model: "A21",
        releasedYear: "2010"
    },
    smartWatch: {
        heartRate: "200",
        stopWatch: true
    },
    bike: {
        brand: "Yamaha",
        cc: 200,
        hydrolic: true
    }

}


const richDeveloper: Developer<{
    heartRate: string;
    callingSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}> = {
    name: "Mr. Rich",
    salary: 45,
    device: {
        brand: "hp",
        model: "X3P",
        releasedYear: "2022"
    },
    smartWatch: {
        heartRate: "200",
        callingSupport: true,
        calculator: true,
        aiFeature: true
    }
}