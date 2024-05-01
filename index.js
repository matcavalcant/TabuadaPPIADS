import express from 'express';

const host = '0.0.0.0';
const porta = 3000;
const app = express();


function retornaPaginaInicial(requisicao, resposta){
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
};

function tabuada (requisicao, resposta){
    var valor = requisicao.query.valor;
    var sequencia = requisicao.query.sequencia;
    if(!sequencia)
        sequencia=0; 
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Página Inicial</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    if(valor){
        sequencia = parseInt(sequencia);
        valor = parseInt(valor);
        for(let i=0; i<=sequencia; i++)
        {
            var resultado = valor*i;
            resposta.write("<h1>" + valor + "x" + i + "=" + resultado);

        }
    }
    resposta.write('<h1>Página Inicial</h1>');
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();   
}

app.get("/",retornaPaginaInicial);
app.get("/tabuada",tabuada);
app.listen(porta, host, () => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});
