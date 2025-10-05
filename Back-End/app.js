const express=require('express');
const app=express();
//requerimiento de cors para el consumo de API en local
const cors = require('cors');
require('dotenv').config();

//Seteo server Port
const port=80
app.use(express.json());
//Seteo app enviroment
app.use(cors());
app.set('port',process.env.PORT || port);
//Set de las rutas de Backend
const apiRoute=require('./routes/api')
app.use('/api',apiRoute);

app.listen(app.get('port'),()=>{
    console.log('server on port '+process.env.PORT)
})