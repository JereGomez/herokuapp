import express from 'express';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/' , (req, res)=>{
    res.send("Hola desde servidor!!!");
});

const PORT = 8080;
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto ${PORT}`)})