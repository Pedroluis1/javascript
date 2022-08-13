let user = {
    name: 'Guilherme' // propriedade
}
console.log(user)

//Alterando a propriedade de um objeto
user.name = 'Outro nome 1'
user['name'] = 'Outro nome 2'
console.log(user)

const prop = 'name' // criação da variavel que recebe o name
user[prop] = 'Outro nome 3'
console.log(user)

// Criando uma propriedade 
user.lastName = 'Cabrini da Silva'
console.log(user)

// Deletando uma propriedade
delete user.name
console.log(user)