import { BrowserRouter } from "react-router-dom" //Crea un historial del navegador y escucha los cambios
import { AppRouter } from "./routes/AppRouter"

export const PruebaApp = () => {
  return (
    <>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </>
  )
}
