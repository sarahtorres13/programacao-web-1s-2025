const express = require('express');
const app   = express();

app.get('/', (req, res)=>{

let html = '<h1>app_estoque</h1>'; 
html += '<h3>Rotas disponíveis</h3>';
html += 'socorro'
html += 'adeus'
html += 'a'
res.send (html); 

})

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{

    const id = Number(req.params.id);
    const nome = req.params.nome;
    const qtd = Number(req.params.qtd);

    const item = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    estoque.adicionar(item); 

    res.send(item);
});

app.get('/listar', (req, res)=>{




});



app.get('/remove/:id', (req, res)=> {




});


app.get('/editar/:id/:qtd', (req, res)=> {




});




const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT); 

}); 