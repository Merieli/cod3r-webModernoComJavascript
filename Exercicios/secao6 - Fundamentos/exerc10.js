verificaNumero = num => {
    resto = num % 3;
    if (resto <= 0){
        console.log("Valor divisivel por 3!")
    } else {
        console.log("X Valor NÃO é divisivel por 3!")
    }
}

verificaNumero(32)