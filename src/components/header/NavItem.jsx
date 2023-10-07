import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ route, name }) => {
  return (
    <li>
      <NavLink
        to={route}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "",
          };
        }}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;

NavItem.propTypes = {
  route: PropTypes.string,
  name: PropTypes.string,
};
