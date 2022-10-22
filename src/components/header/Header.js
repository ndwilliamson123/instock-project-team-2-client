import "./Header.scss";
import websiteLogo from "../../assets/logos/InStock-Logo.svg";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <div className="header__content-wrapper">
      <Link to="/">
        <div>
          <img
            className="header__website-logo"
            src={websiteLogo}
            alt="website-logo"
          />
        </div>
      </Link>
      <nav className="header__nav-bar">
        <NavLink
          to="/warehouses"
          className={(isActive) =>
            "header__nav-bar-link " +
            (isActive ? "header__nav-bar-link--active" : "")
          }
        >
          <p>Warehouses</p>
        </NavLink>
        <NavLink
          to="/inventory"
          className={(isActive) =>
            "header__nav-bar-link " +
            (isActive ? "header__nav-bar-link--active" : "")
          }
        >
          <p>Inventory</p>
        </NavLink>
      </nav>
      </div>
    </header>
  );
}
export default Header;
