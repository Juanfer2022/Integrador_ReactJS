import { Pagination } from "@mui/material";
import "./PaginadoDeNoticias.css"
const PaginadoDeNoticias = ({cantPaginas, onChange}) => {
 
  const cambiaPagina =(_evento, pagina)=>{
    onChange(pagina)
  }
  return (
    <section className="centr">
      {" "}
      <Pagination count={cantPaginas} color="secondary"  onChange={cambiaPagina} 
       />
    </section>
  );
};
export default PaginadoDeNoticias;
