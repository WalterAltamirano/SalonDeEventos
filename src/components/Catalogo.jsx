import '../styles/home.css'
import '../styles/index.css'
import { Link } from 'react-router';
import Item from './reusable/Item'
const Catalogo = () => {
    
    return(
        <section className="container-catalogo">
            <article className="container-content-catalogo">
                <h2>Catalogo</h2>
                <aside className='container-items'>
                    <Item name={"Casamiento"} />
                    <Item name={"Quinces"}/>
                </aside>
                <Link className="link-ver-mas" to="/catalogo"><span>Ver mas</span></Link>
            </article>
        </section>
    );
};
export default Catalogo;