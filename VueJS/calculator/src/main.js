// O Vue sempre procura o arquivo "main.js" dentro da pasta src
import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App) 
    //mesmo código das linhas abaixo de forma reduzida
    //função de render que tem como parametro uma funcao createElement, ela pega esse componente e renderiza na página como um componente Raiz com outros componentes dentro
    /*
    render(createElement){ 
        return createElement(App)
    }
    */
}).$mount("#app") //o ".$mount()" define onde se deseja inserir a aplicação Vue, é o padrão usado quando se cria uma aplicação, mas ele tem a mesma função do "el: "#app"" e funciona do mesmo jeito