//Aqui creamos las subrutas para /auth/ en donde la primera es el login y la segunda un register en caso de que tratemos de acceder a otra subruta de auth nos redigiremos a login

import {Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login'  element={<Login/>}/>
        <Route path='register'  element={<Register/>}/>
        {/* con el * escuchamos cualquier otra ruta y con navigate redirigimos */}
        <Route path='*'  element={<Navigate to="login"/>}/>
    </Routes>
  )
}
