//const Pessoa = require('./pessoa')
import Pessoa from './pessoa';
import './assets' //por padrao ira procurar dentro da pasta o arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())