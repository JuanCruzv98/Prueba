//aqui se hace una paginacion para actualizar la informacion en el navegador

import { createSearchParams, useNavigate } from "react-router-dom" //importamos useNavigate este hook nor permitira redireccionar

//Recibimos dos props en este componente uno relacionado a la pagina y otro al path
export const Pagination = ({page,setPage,path}) => {
  const navigate = useNavigate(); //creamos una nueva implementación de useNavigate
  
  const pageChange = (page)=>{
    if(page<1) return; //evitamos movernos a una pagina 0
    setPage(page);
    navigate({//establecemos los parametros para la redireccion
      pathname:path, //establecemos el path,
      search:createSearchParams({//con el metodo createSearchParams de react-router-dom establecemos los parametros de busqueda
        p:page,//establecemos el parametro de para la pagina p
      }).toString()//lo convertimos a un string
    })
  }

  return (
    <div>
        <button onClick={()=>pageChange(page-1)}>Anterior</button>
        {/* invocamos la funcion pageChange y le pasamos la pagina sumandole o restando 1 segun se requiera */}
        <button onClick={()=>pageChange(page+1)}>Siguiente</button>
    </div>
  )
}
