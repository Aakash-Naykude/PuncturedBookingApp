import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "../../ContextApi/LocationDet";
import "./NavBar.css";
function Navbar() {
  const { isSelected, handleToggleSelect } = useContext(LocationContext);
  const handleSelect = () => {
    handleToggleSelect();
  };
  return (
    <div>
      <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <Link to="/">
            <img
              className="logoOfIcon"
              src="https://www.designfreelogoonline.com/wp-content/uploads/2020/08/00422-car-01.png"
              alt="carlogo"
            />
          </Link>

          <Link class="navbar-brand" to="/home">
            <button type="button" class="btn btn-outline-primary">
              Home
            </button>
          </Link>

          {isSelected ? (
            <Link class="navbar-brand" to="/shops">
              <button type="button" class="btn btn-outline-primary" onClick={handleSelect}>
                Choose This Location
              </button>
            </Link>
          ) : (
            ""
          )}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Starlight AutoMall
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Sign out
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
