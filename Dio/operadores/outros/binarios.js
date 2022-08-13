// in
something in somethingItems

// Arrays 
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro")
0 in arvores;           // retorna true
3 in arvores;           // retorna true
6 in arvores;           // retorna false
"cedro" in arvores;     // retorna false (você deve especificar o número do índice,
                        // não o valor naquele índice -> "[2]")
"length" in arvores;    // retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;             //retorna true
var minhaString = new String("Coral");
"length" in minhaString;  // retorna true

// Objetos personalizados 
var maucarro = {mar: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;    // retorna true
"modelo" in meucarro;   // retorna true


// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if (dia instanceof Date) {
    //code here
}