// este arquivo é interpretado pelo Node, por isso deve ser escrito com a sintaxe que o Node entende
const modoDev = process.env.NODE_ENV !== 'production'; //variavel NODE_ENV setada a partir do package.json usando o plugin cross-env - Dessa forma ao usar o comando npm start será gerado os arquivos como mode development e se usar "npm build" os arquivos serão gerados como mode production
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //extrai o CSS para um arquivo especifico
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production', //verifica o comando executado pelo npm e seta para modo de desenvolvimento ou produção
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', //define o nome do arquivo de saida e por padrão o webpack minifica os arquivos JS
        path: __dirname + '/public'
    },
    devServer: { //configuração do Web Server que deve ser utilizado somente no ambiente de desenvovlimento
        contentBase: './public',
        port: 9000 //a porta pode ser a que eu desejar
    }, //ao trocar o script de execução do package.json para "webpack-dev-server" ele chama o webpack e adiciona um servidor na porta definida
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ //minificador JS
                cache: true, //utiliza cache
                parallel: true //executa de maneira paralela, essas configs fazem minificar mais rapido
            }),
            new OptimizeCSSAssetsPlugin({}) //minificador CSS sem configs adicionais
        ]
    },
    plugins: [ //define os plugins
        new MiniCssExtractPlugin({ //função construtora instanciada
            filename: "estilo.css" //nome do arquivo que será gerado a partir da interpretação dos arquivos CSS
        })
    ],
    module: {
        rules: [ //regras do webpack em formato array que contem todos os loaders
            {
                test: /\.s?[ac]ss$/, //Regex que testa se o arquivo é do tipo sass ou css ou scss
                use: [
                    MiniCssExtractPlugin.loader, //extrai o CSS para um arquivo externo
                    //'style-loader', //adiciona o CSS a DOM injetando a tag <style> pelo arquivo JS
                    'css-loader', //interpreta @import, url()...
                    'sass-loader' //interpreta arquivos Sass
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}