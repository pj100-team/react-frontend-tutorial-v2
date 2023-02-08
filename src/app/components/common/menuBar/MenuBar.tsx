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
        <li>
          <Link to="PhoneNumber">PhoneNumber</Link>
        </li>
        <li>
          <Link to="StopWatch">StopWatch</Link>
        </li>
        <li>
          <Link to="TodoList">TodoList</Link>
        </li>
      </ul>
    </nav>
  );
};
