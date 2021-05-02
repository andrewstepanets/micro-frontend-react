import { Link } from "react-router-dom";
import { FaCat, FaDog } from 'react-icons/fa'

function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <h1 className="header__title"><FaCat /> Cats and Dogs < FaDog /></h1>
      </Link>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

export default Header