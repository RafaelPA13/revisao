/* configurações do servidor */
//carregar o módulo express
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/* configurações do servudor - fim */ 

/* configuração par o banco de dados - início */ 
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o scrtipt de consexão
const conexão = ()=>{
    mongoose.connect('mongodb+srv://userRevis:revisao@fiaptecnico.n7tnr.mongodb.net/?retryWrites=true&w=majority')
}
/* configuração do banco de dados - fim */

/* rota para a requisição */
app.get('/',(req,res)=>{
    //res.send('index.ejs')
    res.render('index.ejs',{
        nome:'Porto',
        turma:'2mia',
        disciplina:'lp2'
    })
})