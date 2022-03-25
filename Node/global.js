//console.log(global);
globalThis.MinhaApp = {
    saudacao() {
        return "Estou em todos os lugares!";
    },
    nome: "Sistema Legal",
};

// global congelado que imposibilita modificações
globalThis.MinhaApp2 = Object.freeze({
    saudacao() {
        return "Estou em todos os lugares!";
    },
    nome: "Sistema Legal",
});
