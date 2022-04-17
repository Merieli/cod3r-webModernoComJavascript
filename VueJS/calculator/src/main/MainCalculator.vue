<template>
    <div class="calculator">
        <PartDisplay :value="displayValue" />
        <PartButton label="AC" triple @onClick="clearMemory" /> <!-- o "onClick" é um evento personalizado criado para executar o método passado entre aspas que pega o valor de label-->
        <PartButton label="/" operation @onClick="setOperation" />
        <PartButton label="7" @onClick="addDigit" />
        <PartButton label="8" @onClick="addDigit" />
        <PartButton label="9" @onClick="addDigit" />
        <PartButton label="*" operation @onClick="setOperation" />
        <PartButton label="4" @onClick="addDigit" />
        <PartButton label="5" @onClick="addDigit" />
        <PartButton label="6" @onClick="addDigit" />
        <PartButton label="-" operation @onClick="setOperation" />
        <PartButton label="1" @onClick="addDigit" />
        <PartButton label="2" @onClick="addDigit" />
        <PartButton label="3" @onClick="addDigit" />
        <PartButton label="+" operation @onClick="setOperation" />
        <PartButton label="0" double @onClick="addDigit" />
        <PartButton label="." @onClick="addDigit" />
        <PartButton label="=" operation @onClick="setOperation" />
    </div>
</template>

<script> 
import PartButton from "../components/PartButton"
import PartDisplay from '../components/PartDisplay'

//para usar os componentes importados é preciso registrá-los dentro do export default
export default { 
    data(){
        return {
            displayValue: "", //valor do display
            clearDisplay: false, //define se o display será limpo ou não "no caso de digitar varios zeros ele é limpo, ou no caso de ter o 0 digitado e inserir qualquer outro numero, ou no caso de clicar em um botão de operação e depois em um numero ele tambem será limpo"
            operation: null,
            values: [0, 0], //dois valores necessarios para operaçao na calculadora
            current: 0 //define qual indice do valor atual trabalhado, se 0 ou 1
        }
    },
    components: { PartButton, PartDisplay },
    methods: { 
        clearMemory() {//método para limpar a memóriA
            Object.assign(this.$data, this.$options.data()) //para limpar com Vue a função Object.assign atribui para os dados "this.$data" o "this.$option.data()" que possui o estado inicial do objeto, dessa forma faz com que a aplicação volte ao estado inicial
        },
        setOperation(operation) {
            if(this.current === 0){
                this.operation = operation
                this.current = 1 //define que será digitado o segundo valor
                this.clearDisplay = true
            } else{
                const equals = operation === "=" //quando for digitado = irá armazenar a operação na varivel
                const currentOperation = this. operation

                try{
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}` //realiza a operação e seta para o indice 0 o resultado dela
                    )
                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory()
                        return
                    }
                } catch (e){
                    this.$emit('onError', e) //emite um erro caso ocorra a excessão definida
                }

                this.values[1] = 0

                this.displayValue = this.values[0] //o resultado da operação será inserido no display
                this.operation = equals ? null : operation //se ele não for o sinal de igual recebe o mesmo valor passado como parametro no metodo
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n){
            if (n === "." && this.displayValue.include(".")){
                return //se for clicado em ponto novamente e dentro do display já tiver um ponto anterior, ele retorna e sai da função 
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay // condicional aplicada a uma  variavel que será true se o display será limpo ou se o display tiver o valor 0
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue //altera valor de "displayValue" contido em data para o valor da variavel constante "displayValue" definida dentro do método
            this.clearDisplay = false

            this.values[this.current] = displayValue
     
            /*
            Mesma forma do que a linha acima, com a diferença de atribuir os valores do array como tipo Float
            if(n !== "."){
                const i = this.current
                const newValue = parseFloat(displayValue) //converte valor para float para realizar a operação
                this.values[i] = newValue
            }
            */
        }
    }
}
</script>

<style>
.calculator{
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr repeat(5, 48px);
    border-radius: 5px;
    display: grid;
    overflow: hidden;
    height: 320px;
    width: 235px;
}
</style>