//Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) { //pega o elemento body na posição 0 do array "porque getElementsByTagName retorna um array e não um único elemento", e o evento de clique nesse elemento faz callback para uma função "chamada sempre que um usuário clicar no body"
    console.log('O evento ocorreu!')
}