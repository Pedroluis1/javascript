const user = {    
    name = 'Guilherme',
    lastname = 'Cabrini da Silva'
};

function GetUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastname}`
    }
}

const GetUserWithFullName = GetUserWithFullName(user);

console.log(UserWithFullName, user)