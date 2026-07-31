import '../styles/home.css'
import '../styles/index.css'
import Catalogo from './Catalogo';
import Propuestas from './Propuestas';

const Home = () => {
    
    return (
        <main>
            <section className="hero-section">
                <h1 className="title-hero">Salon de Eventos</h1>
                <p className='subtitle-hero'>Tu unico lugar para cumplir tan ansiado festejo</p>
            </section>
            <Propuestas />
            <Catalogo />            
        </main>
    );
}
export default Home;