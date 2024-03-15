import React, { useRef } from 'react'
import axios from 'axios'
import '../App.css'

const Login = () => {

  const baseURL = "http://localhost:3000/user/registrarUsuario"

  const nombre = useRef(null)
  const apellido = useRef(null)
  const correo = useRef(null)
  const password = useRef(null)
  const rol = useRef(null)
  const estado = useRef(null)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const data = {
        nombre: nombre.current.value,
        apellido: apellido.current.value,
        correo: correo.current.value,
        password: password.current.value,
        rol: rol.current.value,
        estado: estado.current.value
      }

      await axios.post(baseURL, data).then((response) => {
        console.log(response)
        if(response.status == 201){
          alert('Usuario registrado con exito')
        }else{
          alert('Error de registro de Usuario')
        }
      })

    } catch (error) {
      console.log(error)
      alert('Error del servidor' + error)
    }
  }

  return (
    <>
    <h1> Registro de usuario </h1>
      <form method='post' onSubmit={handleSubmit}>
        <div className='container'>
          <label> Nombre: </label>
          <input type="text" name='Nombre' id='nombre' placeholder='Ingrese su Nombre' ref={nombre} />
        </div>
        <div className='container'>
          <label> Apellido: </label>
          <input type="text" name='apellido' id='apellido' placeholder='Ingrese su apellido' ref={apellido} />
        </div>
        <div className='container'>
          <label> correo: </label>
          <input type="text" name='correo' id='correo' placeholder='Ingrese su correo' ref={correo} />
        </div>
        <div className='container'>
          <label> Password: </label>
          <input type="text" name='password' id='password' placeholder='Ingrese su password' ref={password} />
        </div>
        <div className='container'>
          <label> Rol: </label>
          <select name='rol' id='rol' ref={rol}>
            <option> Seleccione </option>
            <option value="administrador"> Administrador </option>
            <option value="empleado"> Empleado </option>
          </select>
        </div>
        <div className='container'>
          <label> Estado: </label>
          <select name='estado' id='estado' ref={estado}>
            <option> Seleccione </option>
            <option value="activo"> Activo </option>
            <option value="inactivo"> Inactivo </option>
          </select>
        </div>
        

         <button className='button' type='submit'> Registrar </button>
      </form>
    </>
  )
}

export default Login