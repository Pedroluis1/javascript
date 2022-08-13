const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'
}

// -----Recupera as chaves do objeto 
console.log('Propriedade dp pbjetp user:', Object.keys(user))

// -----Recupera as chaves do objeto 
console.log('\nValores das propriedades do objeto user:', Object.values(user))

// -----Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user))

// -----Mergear propriedades de objetos 
Object.assign(user, {fullName: 'Guilherme Cabrini da Silva'}) // Adicionar o fullName no user ( não recomendado alterar o objeto principal )

console.log('\nAdiciona a propriedade fullName no objeto user:', user)
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}/*criando um novo array*/, user/* copiando o user */, {age:26}/* adicionando o age */))
// Recomendado (criando uma cópia)

// -----Previne todas as alterações em um objeto 
const newObj = { foo: 'bar'}
Object.freeze(newObj) // Não permite alteração, criação e remoção da propriedade

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações:', newObj)

// -----Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Guilherme'}
Object.seal(person) // Permite alteração mas, não permite criação e remoção 

person.name = 'Guilherme Cabrini'
delete person.name
person.age = 26

console.log('\nVariável person após as alterações:', person)
