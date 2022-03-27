// Middleware pattern ou chain of responsability "cadeia de responsabildiade"
const passo1 = (contexto, next) => {
    contexto.valor1 = "mid1";
    next(); //função que irá disparar o proximo passo
};

const passo2 = (contexto, next) => {
    contexto.valor2 = "mid2";
    next();
};

// para que o middleware não chame o proximo passo, posso eliminar a funcao next e suprimi-la dos parametros:
const passo3 = (contexto) => (contexto.valor3 = "mid3"); //sem o parametro next

const exec = (ctx, ...middlewares) => {
    const execPasso = (indice) => {
        middlewares &&
            indice < middlewares.length && // validação para não executar metodos fora do array middleware
            middlewares[indice](ctx, () => execPasso(indice + 1));
    };

    execPasso(0);
};

const ctx = {};
exec(ctx, passo1, passo2, passo3);
console.log(ctx);
