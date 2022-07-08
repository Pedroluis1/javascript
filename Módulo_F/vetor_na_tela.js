let n = [5,8,7,1,6,9,4,2]
n.sort()
for(let c = 0; c < n.length; c++){
    console.log(`A posição ${c} tem o valor ${n[c]}`)
}

for( let pos in n) {  //Somente para Arrays e objects
    console.log(`${n[pos]}`)
}