const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


//settings and settings vars
app.set('port',process.env.PORT || 3000);
app.set('projectName', 'SumaApp');


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//routes
app.get('/suma',(req,res)=>{
    let suma = parseFloat(req.query.x) + parseFloat(req.query.y);
    res.json(
        {"suma":suma}
    );
})
app.get('*',(req,res)=>{
    res.end("La ruta no existe")
})


//port
app.listen(app.get('port'),()=>{
    console.log("Corriendo en puerto " +app.get('port'));
})