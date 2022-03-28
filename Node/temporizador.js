// Para gerar tarefas agendadas com temporizador
const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 07 * * 1", function () {
    //executa a tarefa determinada na função, de 5 em 5 segundos toda segunda as 07 horas
    console.log("Executando tarefa 1!", new Date().getSeconds());
});

setTimeout(function () {
    tarefa1.cancel(); //cancelando a tarefa executada com scheduleJob
    console.log("Cancelando Tarefa 1!");
}, 20000);

const regra = new schedule.RecurrenceRule(); //cria um objeto com regras de recorrencia para a função sheduleJob
regra.dayOfWeek = [new schedule.Range(1, 5)]; //estabelece como regra a execução nos dias de segunda a sexta
regra.hour = 07;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Executando Tarefa 2!", new Date().getSeconds());
});
