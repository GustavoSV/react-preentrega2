import "./ItemDetail.css";

const ItemDetail = ({id, titulo, autor, genero, tipo, idioma, stock, precio, img, }) => {
  return (
    <div className="itemDetalleContenedor">
      <div className="itemDetalle">
        <img src={img} alt={titulo} />
        <h3>{titulo}</h3>
        <h6>Id: {id}</h6>
        <p>Autor: {autor}</p>
        <p>Género: {genero}</p>
        <p>Idioma: {idioma}</p>
        <p>Disponible en: {tipo}</p>
        <h4>Precio: {precio}</h4>
      </div>
    </div>
  );
};

export default ItemDetail;
