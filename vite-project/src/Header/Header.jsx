import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
