import "./CantNoticias.css"
const CantNoticias = ({noticias})=>{
    const NO_HAY_NOTICIAS= 'No hay ninguna noticia sociada a la Busqueda. Verifique si el criterio de busqueda es el correcto e intente de nuevo'
    
    if( !noticias.totalResults){
        return <h2 className="font">{NO_HAY_NOTICIAS}</h2>}
    else{
        return <h2 className="font">Estas viendo 10 noticias de {noticias.totalResults }  resultados</h2>}
        
    }

export default CantNoticias;