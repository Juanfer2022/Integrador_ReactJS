import * as React from "react";
import "./stylo.css";
import { DateTime } from "luxon";
const Noticias = ({ noticia }) => {
  const dt = DateTime.fromISO(noticia.publishedAt).toFormat("dd/MM/yyyy");
  const dt2 = DateTime.fromISO(noticia.publishedAt).toFormat("tt");

  return (
    <div id="container">
      <a href={noticia.url} target="_blank">
        <div className="product-details">
        <h3>{noticia.source.name}</h3>
          <h1>{noticia.title}</h1>
          
          <p className="information">{noticia.description}</p>

          <div>
            <p className="texCol">
              Publicado el: {dt} a las: {dt2}
            </p>
          </div>
        </div>

        <div className="product-image">
          <img
            className="tamaño"
            src={
              noticia.urlToImage === null
                ? "./imageNoEncontrada.png"
                : noticia.urlToImage
            }
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export const ListaNoticias = ({ noticias }) => {
  return noticias.articles.map((noticia, i) => {
    return <Noticias key={i} noticia={noticia} />;
  });
};

export default Noticias;
