import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { useContext } from "react";
import { ThemeContext } from "../../auth_context/AuthContext";

const Navbar = () => {
  const { user, logout, loading } = useContext(ThemeContext);
  const handleLogOut = () => logout();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavItem route="/" name="Home" />
            <NavItem route="/all-events" name="All Events" />
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          EM4U
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavItem route="/" name="Home" />
          <NavItem route="/all-events" name="All Events" />
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {loading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : user ? (
            <>
              <li>{user?.displayName}</li>
              <li> {user?.photoURL} </li>
              <li onClick={handleLogOut}> Logout </li>
            </>
          ) : (
            <>
              <NavItem route="/login" name="Login" />
              <NavItem route="/register" name="SignUp" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
