// uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++;
        },
    };
};
// Para criar novas instancias de um modulo Node é possível usar uma função Factory como mostrado acima
