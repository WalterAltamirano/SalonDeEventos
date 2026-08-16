import '../styles/home.css'
import '../styles/index.css'
import { Link } from 'react-router';
import Item from '../components/reusable/Item'
const Propuestas = () => {
    return(
        <section className="container-propuestas">
            <article className='container-content-propuestas'>
                <h2>Propuestas</h2>
                <aside className='container-items'>
                    <Item name={"Standard"} />
                    <Item name={"Premium"} />
                </aside>
            </article>
            <Link className="link-ver-mas" to="/nuestrasPropuestas"><span>Ver mas</span></Link>
        </section>
    );
}

export default Propuestas;