import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between mt-3">
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <NavLink to="/">Homepage</NavLink>
              </li>
              <li className="me-3">
                <NavLink to="/aboutus">Chi siamo</NavLink>
              </li>
              <li className="me-3">
                <NavLink to="/productspage">Pagina prodotti</NavLink>
              </li>
            </ul>
            <div className="btn btn-primary">Modalità Budget</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
