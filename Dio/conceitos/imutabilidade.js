const user = {    
    name = 'Guilherme',
    lastname = 'Cabrini da Silva'
};
/* O user não será alterado a referência dele, será feito uma cópia e alterará a cópia */
function GetUserWithFullName(user){
    return{
        ...user, // spread operator (para cada propriedade do user, ele vai colocar dentro do objeto )
        fullName: `${user.name} ${user.lastname}`
    } // objeto
}

const GetUserWithFullName = GetUserWithFullName(user);// mesmo ojeto com os mesmo atributos do user, mais o fullname .

console.log(UserWithFullName, user)// mesmo objeto com o fullname sem alterar a referência dele.



console.log(GetUserWithFullName)// descobrir a diferença do console.log com Get e sem.

/*EXEMPLO 2 -------------------------------------------------------------*/
// Outra forma de imutabilidade
const students = [
    { name: 'Grace', grade: 7 },
    { name: 'Jennifer', grade: 4},
    { name: 'Paul', grade: 5}
]

function getApprovedStudents(studentsList){ // Função recebe a lista de alunos.
    return studentsList.filter(student => student.grade >= 7) // retornando apenas os alunos aprovados.
}

console.log('Alunos Aprovados:')
console.log(getApprovedStudents(students))

console.log('Lista de alunos')
console.log(students)