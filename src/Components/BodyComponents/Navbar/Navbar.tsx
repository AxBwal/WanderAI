import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav aria-label="Main navigation" className="flex justify-between content-center">
      <div>ConnectSphere</div>
      <div className="flex justify-evenly gap-5">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          About
        </NavLink>
        <NavLink to="/write" className={({ isActive }) => (isActive ? "text-blue-500" : "")}>
          Write
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;