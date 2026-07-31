import '../styles/home.css'
import '../styles/index.css'
import { Link } from 'react-router';
import Item from './reusable/Item'
const Catalogo = () => {
    
    return(
        <section className="container-catalogo">
            <h2>Catalogo</h2>
            <article className='container-items'>
                <Item name={"Casamiento"} />
                <Item name={"Quinces"}/>
                <Item name={"Empresarial"}/>
            </article>
            <Link to="/catalogo">Ver mas</Link>
        </section>
    );
};
export default Catalogo;