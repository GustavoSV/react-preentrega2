import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, titulo, autor, genero, tipo, idioma, stock, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <Link to={`/item/${id}`}>
            <img src={img} alt={titulo} />
        </Link>
        <h3>Album: {titulo} </h3>
        <p>Autor: {autor} </p>
        <p>Precio: {precio} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item