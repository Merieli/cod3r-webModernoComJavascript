const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //callback da função "imprimir" - para cada elemento que econtrar dentro do array fabricantes ele vai chamar de volta a função "imprimir"
fabricantes.forEach(fabricante => console.log(fabricante)) //callback da funcao fabricante