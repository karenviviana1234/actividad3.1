import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuarios} from '../controllers/controller.usuarios.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', listarUsuarios);  
rutaUsuario.post('/registrarUsuario',registrarUsuarios);
rutaUsuario.post('/desactivarUsuario/:id_usuario', desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario',actualizarUsuario);
rutaUsuario.get('/buscarUsuarios/:id_usuario',buscarUsuario);


export default rutaUsuario;
//rnn
