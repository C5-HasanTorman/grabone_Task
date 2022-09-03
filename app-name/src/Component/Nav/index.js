import React from "react";
import "./style.css";

const Nav = () => {
  return (
    <header className="container-fluid">
      <nav class="navbar navbar-expand-lg n1">
        <div class="container nav-top">
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
                    Waikato
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Wellington
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Northland
                  </button>
                </li>{" "}
                <li>
                  <button class="dropdown-item" type="button">
                    Manawatu - Wanganui
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Tauranga
                  </button>
                </li>{" "}
                <li>
                  <button class="dropdown-item" type="button">
                    Rotorua - Taupo
                  </button>
                </li>{" "}
                <li>
                  <button class="dropdown-item" type="button">
                    Hawkes Bay
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Christchurch{" "}
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Hawkes Bay
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Taranaki{" "}
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Nelson - Marlborough
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Queenstown - Wanaka
                  </button>
                </li>{" "}
                <li>
                  <a href="?region=dunedin-invercargill" class="dropdown-item">
                    Dunedin - Invercargill
                  </a>
                </li>
              </ul>
            </div>
            <div className="link-sec">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    {" "}
                    <i class="bi bi-heart heart "></i>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    {" "}
                    <i class="bi bi-cart2 heart"></i>
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
                      <i class="bi bi-person heart"></i>
                      <i class="bi bi-chevron-down heart"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          href="https://www.grabone.co.nz/my-stuff/my-account"
                          className="profile-link"
                        >
                          My Account
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.grabone.co.nz/redeem"
                          className="profile-link"
                        >
                          Gifts
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://www.grabone.co.nz/profile"
                          className="profile-link"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.grabone.co.nz/my-stuff/my-subscriptions"
                          className="profile-link"
                        >
                          My Subscriptions
                        </a>{" "}
                      </li>{" "}
                      <li>
                        <a
                          href="https://www.grabone.co.nz/my-stuff/my-deals"
                          className="profile-link"
                        >
                          My Purchases
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://www.grabone.co.nz/logout"
                          className="profile-link"
                        >
                          Logout
                        </a>
                      </li>{" "}
                      <li>
                        <a
                          href="https://www.grabone.co.nz/login"
                          className="profile-link"
                        >
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="mail"
                    href="https://www.grabone.co.nz/register?success_url=https%3A%2F%2Fwww.grabone.co.nz%2Fmy-stuff%2Fmy-subscriptions"
                  >
                    <i class="bi bi-envelope heart"></i>
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-light n2">
        <div class="container nav-2">
          <a
            class="navbar-brand"
            href="https://new.grabone.co.nz/"
            className="profile-link"
          >
            Browse Categories
            <i class="bi bi-chevron-down categories"></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  What's New
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For You
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link "> Shop Products</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search GrabOne"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
