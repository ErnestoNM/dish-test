import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div>
    <Link to='/projects'>
      <h1>Proyectos</h1>
    </Link>
    <button>
      <Link to='/projects-form'>Crear proyecto</Link>
    </button>
  </div>
);