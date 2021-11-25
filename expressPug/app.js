import express from 'express';
const app = express();
const server = app.listen(8080,()=>{
    console.log("Listening in port 8080");
})

app.set('views','./views');//Para que las vistas de mi pagina se vean desde views
app.set('view engine','pug');//Motor para ver las vistas  'pug'

app.use(express.static('public'));//El css vive en el publico y arranca del inicio por eso va publico

app.get('/plantillaPug',(req,res)=>{
    res.render('plantillaPug',{message:'BIENBENIDOS A LAVORO INDUMENTARIA'})//Render interpreta el html y no solo manda informacion sino que lo muestra en pantalla //res.send es para enviar informacion
})
app.get('/datos',(req,res)=>{
    let {min,nivel,max,titulo} = req.query;
    res.render('progress',{min:min,nivel:nivel,max:max,titulo:titulo})
})
//Simulacion de peticion de Productos
const getAllProductos = () => [
    {id:1,name:"Pantalon",price:1900},
    {id:2,name:"Poller",price:1999},
    {id:3,name:"Buzo",price:2199}
]

app.get('/productos',(req,res)=>{
    let productos = getAllProductos();
    console.log(productos)
    res.render('productos',{"productoArray":productos})
})