<template>
  <!--O evento click executa a função padrão vue "$emit()" que emite/dispara um determinado evento personalizado passado como parâmetro e como segundo parâmetro é passado o valor de label-->
    <button class="button"
        @click="$emit('onClick', label)" 
        :class="{ double, triple, operation }"> <!--Nesse caso se doble ou triple ou operation for "true" será aplicada uma classe com mesmo nome do atributo "como a classe terá o mesmo nome que a propriedade condicional nessse caso é possível escrever só a propriedade" -->
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {}, //string vazia que será passada como propriedade do componente
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean },
    }
}
</script>

<style>
:root{
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button{
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    font-size: 1.4rem;
    outline: none;
}

.button:active{
    background-color: #ccc;
}

.button.double{
    grid-column: span 2;
}

.button.triple{
    grid-column: span 3;
}

.button.operation{
    background-color: #fa8231;
    color: #fff;
}

.button.operation:active{
    background-color: #fa8231cc;
}
</style>