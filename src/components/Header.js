import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex">
      <Link to="/" className="mr-2">
        All Tasks
      </Link>
      <Link to="/active" className="mr-2">
        Active Tasks
      </Link>
      <Link to="/completed" className="mr-2">
        Completed Tasks
      </Link>
    </div>
  );
};

export default Header;
