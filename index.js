import express from 'express';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/' , (req, res)=>{
    res.send("Hola desde servidor!!!");
});

app.get('/modif' , (req, res)=>{
    res.send("Modificacion para deploy automatico");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto ${PORT}`)})
