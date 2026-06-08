// union => |

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    if(role === "admin") {
        return "Admin Dashboard"
    } else if (role === "user") {
        return "User Dashboard"
    } else {
        return "Guest Dashboard"
    }
}    

getDashboard("guest");


// intersection => &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const chowdhuryShaheb: EmployeeManager = {
    id: "123",
    name: "Chowdhury Shaheb",
    phoneNo: "01754268595",
    designation: "Manager",
    teamSize: 12
}