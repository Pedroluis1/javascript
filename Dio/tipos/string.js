// Retorna o tamanho de uma string 
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador 
const splittedText = 'texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: `, splittedText);

// Busca por um valor e substitui por outro 
const replacedText = 'texto'.replace('texto', 'textReplaced');

// Retorna a "fatia" de um valor 
const lastChar = 'texto'.slice(-1); // começo e fim
console.log(`\nValor da string da primeira letra menos a ultima`, lastChar);

const allWithoutLastChar = 'texto'.slice(0, -1);
console.log(`\nValor da string da segunda letra até a última: `, allWithoutLastChar);

const secondtoEnd = 'texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondtoEnd);

//Retorna N caracteres a partir de uma posição 
const twoCharsBeforeFirstPos = 'texto'.substr(0, 2); // começo e quantidade
console.log('\nAs duas letras primeiras letras são: ', twoCharsBeforeFirstPos);