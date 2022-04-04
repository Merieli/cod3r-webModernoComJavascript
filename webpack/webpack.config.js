// este arquivo é interpretado pelo Node, por isso deve ser escrito com a sintaxe que o Node entende

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', //modo de desenvolvimento
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', //define o nome do arquivo de saida e por padrão o webpack minifica os arquivos JS
        path: __dirname + '/public'
    },
    plugins: [ //define os plugins
        new MiniCssExtractPlugin({ //função construtora instanciada
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [ //regras do webpack em formato array que contem todos os loaders
            { 
                test: /\.s?[ac]ss$/, //Regex que testa se o arquivo é do tipo sass ou css ou scss
                use: [
                    MiniCssExtractPlugin.loader, //extrai o CSS para fora
                    //'style-loader', //adiciona o CSS a DOM injetando a tag <style> pelo arquivo JS
                    'css-loader', //interpreta @import, url()...
                    'sass-loader'
                ]
            }
        ]
    }
}