import '../styles/index.css'
import '../styles/navbar.css'
import { Link } from 'react-router'
import { useState, useRef } from 'react'
const NavBar = () => {

    const [isActiveNav, setIsActiveNav] = useState(false);
    
    //Manejar la forma de que redireccione al elemento al clickear el nav.
    const inicio = useRef(null); 
    return(
        <header>
            <span>SL</span> {/* Cambiar por un icono */}
            <nav className={`${isActiveNav} ? "nav-active" : "nav-deactive"`} >
                {isActiveNav ? ( 
                    <ul>
                        <li>
                            <Link className='nav-link' to="/home">Inicio</Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="/nuestrasPropuestas">Nuestras Propuestas </Link>
                        </li>
                        <li>
                            <Link className='nav-link' to="/catalogo">Catalogo de eventos</Link>
                        </li>
                        <li>
                            <Link className='nav-link'>Contacto</Link>
                        </li>
                    </ul>
                ) : <button type="button" className='btn-show-nav'>◯</button>}
            </nav>
        </header>
    );
};
export default NavBar;