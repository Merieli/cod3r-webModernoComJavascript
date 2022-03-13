const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Evitar o uso do break com rótulo porque dificulta a manutenção de código
externo: for (a in nums) { //rótulo "externo" definido para a repetição for
    for (b in nums){
        if(a == 2 && b == 3){
            break externo //usar o rótulo no break defini em qual laço de repetição é desejada a quebra, que no caso não é em um for acima mas no segundo acima
        }
        console.log(`Par = ${a},${b}`)
    }
}