import { Route, Routes } from "react-router-dom" //importaciones de Route y Routes de react-router-dom
//Routes crea el define el area para usar routas, funcionaria como un switch en donde la ruta la capta en el area de url del navegador
//Route define cada una de las rutas, serian similares a los casos de un switch
import {AuthRouter,HomePage,ProductsPage} from "../pages"
//Aqui estamos estableciendo las rutas que escuchara la aplicacion
//Route establece el caso de una ruta y devuelve un elemento que puede ser un componente o pagina
export const AppRouter = () => {
  return (
    <Routes> 
      {/* La ruta que pertenece a /auth/* responderia con un nuevo router para rutas anidadas */}
        <Route path="/auth/*" element={<AuthRouter/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
    </Routes>
  )
}
