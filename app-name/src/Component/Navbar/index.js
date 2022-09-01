import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg n1">
        <div class="container">
          <div className="half-head">
            <a className="title-head">GrabOne</a>
          </div>
          <div className="nav-it">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle1"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-geo-alt"></i>

                <span> Auckland</span>
                <i class="bi bi-chevron-down"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-heart"></i>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-cart2"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-person"></i>
                      <i class="bi bi-chevron-down"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <button class="dropdown-item" type="button">
                          Action
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button"></button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Something else here
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg n2">
        <div class="container">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Active
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div>
            <div>
              <form>
                <input type="srerch"/>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
