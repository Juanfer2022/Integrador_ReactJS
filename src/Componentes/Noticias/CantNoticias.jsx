import "./CantNoticias.css";
const CantNoticias = ({ noticias, pagina, cantPaginas }) => {
  const NO_HAY_NOTICIAS =
    "No hay ninguna noticia asociada a la Busqueda. Verifique si el criterio de busqueda es el correcto e intente de nuevo";
  const cantNoti = noticias.totalResults % 10;

  console.log(cantNoti);
  console.log(pagina);
  console.log(cantPaginas);

  if (!noticias.totalResults) {
    return <h2 className="font">{NO_HAY_NOTICIAS}</h2>;
  }

  if (cantNoti != 0 && pagina === cantPaginas) {
    return (
      <h2 className="font">
        Estas viendo las ultimas  {cantNoti} noticias de {noticias.totalResults} resultados
      </h2>
    );
  }

  return (
    <h2 className="font">
      Estas viendo 10 noticias de {noticias.totalResults} resultados
    </h2>
  );
};

export default CantNoticias;
