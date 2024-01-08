import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <NavLink to="/" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Users" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
           <Route path="about" element={<h1>About</h1>}></Route>
           <Route path="Users" element={<h1>Users</h1>}></Route>
           <Route path="/" element={<h1>Home</h1>}></Route>

           <Route path="/*" element={<Navigate to="/" replace/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
