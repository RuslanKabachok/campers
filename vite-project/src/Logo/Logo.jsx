import css from '../Logo/Logo.module.css';

function Logo() {
  return (
    <p className={css.logo}>
      Travel<span className={css.accent}>Trucks</span>
    </p>
  );
}

export default Logo;
