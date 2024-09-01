import NavLink from '../NavLink/NavLink';
import css from './Navigation.module.css';

function Navigation() {
  return (
    <ul>
      <NavLink name="Home" />
      <NavLink name="Catalog" />
    </ul>
  );
}

export default Navigation;
