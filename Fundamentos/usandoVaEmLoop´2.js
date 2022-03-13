const funcs = []

for (var i= 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]() //nesse caso a variável contadora não é respeitada porque foi criada com o uso de var e nesse contexto de bloco tem escopo global, por isso ele não lembra do valor de i no index 2 e o resultado será 10
funcs[8]() //nesse caso a variável contadora não é respeitada porque foi criada com o uso de var e nesse contexto de bloco tem escopo global, por isso ele não lembra do valor de i no index 8 e o resultado será 10