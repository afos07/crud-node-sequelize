const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    users = [
        {"nome": "Filipe", "idade": 24},
        {"nome": "Jamily", "idade": 20},
        {"nome": "Maria Joana Cristina", "idade": 33},
        {"nome": "Jeferson", "idade": 33},
    ];

    res.status(200).send(JSON.stringify(users));
});

app.get('/apagar', (req, res)=>{
    users = [
        {"nome": "Filipe", "idade": 24},
        {"nome": "Jamily", "idade": 20},
        {"nome": "Maria Joana Cristina", "idade": 33},
        {"nome": "Jeferson", "idade": 33},
    ];
    res.status(200).send(JSON.stringify(users));

    $.ajax({
        url:'/apagar',
        type:'JSON',
        data:{
            'id':12
        },
        success:function(respo){

        }  
    })
})

const port = 7777;

app.listen(port, ()=>{
    console.log("rodando com express na porta "+port)
});