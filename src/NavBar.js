import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="section">
        <Link to="/">
          <div className="nav-bar-logo">Movie DB</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
