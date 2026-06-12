// as const assertion



// enum UserRoles {
//     Admin = "Admin",
//     Editor = "Editor",
//     Viewer = "Viewer"
// }


const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;




const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
}


const isPermisable = canEdit(UserRoles.Editor);