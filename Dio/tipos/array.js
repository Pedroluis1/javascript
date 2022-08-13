const users = ['Guilherme', 'Pedro', 'Jennifer']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gende: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
]

// Retornar a quantidade de itens de um array
console.log('items:', persons.length) // Retornar a quantidade de itens 

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons)) // Confirmação se e array

// Iterar os itens do array
persons.forEach((persons, index, arr) =>/*arrow function*/ { // forEach : pra cada item executa uma função
    console.log(`Nome: ${persons.name}`, `index: ${index}`, arr /*Mostrar todo o array*/)
})


// Filtrar array
const mens = persons.filter(persons => persons.gender === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

// Retornar um novo 
const personsWithCourse = persons.map(persons => { // criando um novo e mexendo
    person.course = 'Introdução ao JavaScript'
})
console.log('\nPessoas com a adição do course:', personsWithCourse)


// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {// primeiro parâmetro (função)
    age += person.age
    return age
}, 0/*Segundo parâmetro (valor inical da propriedade)*/)

console.log('\nSoma de idade das pessoas', totalAge)

// filter, map e reduce (Não alteram a referência do objeto, retornam um novo)

// Juntando operações 
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age
                            return age
                        }, 0)

console.log('\nSoma de idade das pessoas que possuem idade par', totalEvenAges)
