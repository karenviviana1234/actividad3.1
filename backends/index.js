import express  from 'express' 
import  body_parser from 'body-parser'
import rutaUsuario from './src/routes/routes.usuarios.js';
const servidor = express()
import cors from 'cors'


servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))

servidor.use(express.static('./public'));
servidor.use(cors)
servidor.use('/user',rutaUsuario)


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})

