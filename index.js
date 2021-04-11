const express = require('express');
const app = express();
const connection = require('./database/dbconnection');
const Msg = require('./database/Msg');


//DEFININDO EJS
app.set('view engine', 'ejs');


//Adicionando arquivos estáticos (css, js de frontend, img) -> pasta: public é o padrão
app.use(express.static('public'));

//Configuração Body Parser 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// ==== ROTAS ===

app.get('/', (req,res)=>{
    res.render('index',);

});

app.get('/msgs',(req,res)=>{
    
    Msg.findAll({ raw: true, order:[['id','ASC']]
}).then(msgs => {
    res.render('msgs', {
        msgs: msgs
    });
});
});

app.post('/msg',(req,res)=>{
    let nome = req.body.nome;
    let msg =  req.body.msg;

    Msg.create({
        nome: nome,
        msg:msg
    }).then(()=>{
        res.redirect('/');
    }).catch(()=>{
        res.send('Dados não salvos');
    })
});


app.post('/deletar/:id',(req,res)=>{
    let deleteId = req.params.id;

    
    Msg.destroy({
        where: {id: deleteId}
    }).then(()=>{res.redirect('back');}
            
    )});



app.listen(7000, (req,res)=>{
    console.log('servidor rodando');
})