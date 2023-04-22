import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[60px] px-5 bg-green-400 text-white font-bold text-lg">
      <h2 className="">GitHub API</h2>
      <div className="flex w-[150px] justify-between">
        <Link to="/">Home</Link>
        <Link to="/fav">Favority</Link>
      </div>
    </nav>
  );
};

export default Navigation;
