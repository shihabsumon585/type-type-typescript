// spread operator

const friends = ["Rahim", "Karim"];

const schoolFrineds = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ["Mr. X", 'Mr. very very Smart'];

friends.push(...schoolFrineds);


const user =  {name: 'sihab', phoneNo: "0175421423431"};

const otherInfo = {hobby: "outing", favourit: "black"};

const userInfo = {...user, ...otherInfo}





// rest operator

const sendInvite = (...friends: string[]) => {

    friends.forEach(friend => {
        console.log(`Sent invitaiton to ${friend}`)
    })

    // console.log(`Sent Invitation to ${""}`)
}

sendInvite("kalu", "alu", "khalu")