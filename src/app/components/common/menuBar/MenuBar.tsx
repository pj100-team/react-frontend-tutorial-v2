import { Link } from "react-router-dom";
import "./MenuBar.css";

export const MenuBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="calendar">Calendar</Link>
        </li>
        <li>
          <Link to="AddressSearch">AddressSearch</Link>
        </li>
      </ul>
    </nav>
  );
};
