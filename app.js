var express=require('express');
const app=express();
//Set server Port
const port=80
app.use(express.json());
//set app enviroment
app.set('port',process.env.PORT || port);
app.listen(app.get('port'),()=>{
    console.log('server on port 80')
})