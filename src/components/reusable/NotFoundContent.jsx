import { Link } from "react-router";

const NotFoundContent = () => {
  return (
    <section className="notFoundContentContainer">
      <h2>Esta página no esta disponible</h2>
      <p>
        Es posible que el contenido que seleccionaste no funcione o que se haya
        eliminado la página.
      </p>
      <Link to={"/home"} className="back-to-home">
        Volver al inicio.
      </Link>
    </section>
  );
};
export default NotFoundContent;