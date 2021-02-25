import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <button onClick="openMenu()">
          &#9776;
        </button>
        <Link to="/">บ่ฮู้เลยถาม</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">ถาม</a>
        <a href="signin.html">ทำไม</a>
      </div>
    </header>
  );
}

export default Header;
