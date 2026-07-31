import '../styles/home.css'
import '../styles/index.css'
import { Link } from 'react-router';
import Item from '../components/reusable/Item'
const Propuestas = () => {
    return(
        <section className="container-propuestas">
            <h2>Propuestas</h2>
            <article className='container-items'>
                <Item name={"Standard"} />
                <Item name={"Premium"} />
                <Item name={"Deluxe"} />
                <Item name={"Ultimate"} />
            </article>
            <Link to="/nuestrasPropuestas">Ver mas</Link>
        
        </section>
    );
}

export default Propuestas;