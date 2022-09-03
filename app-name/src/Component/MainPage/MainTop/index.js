import React from "react";
import "./style.css";

const MainTop = () => {
  return (
    <div className="container top-level">
      <section className="discver-mid">
        <div class="container-fluid">
          <div class="main ">
            <div class="colu-1">
              <aside>
                <header className="title-top">Discover</header>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Collections</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Escapes</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Picked for You</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">
                      <span>Activities, Events & Outdoors</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Store</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Restaurants, Bars, Cafes</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Beauty, Massage & Spa</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">
                      <span>House & Garden</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Fitness & Sports</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Automotive</span>
                    </a>
                  </li>
                </ul>
              </aside>{" "}
            </div>
            <div class="colu-2 photo-1">
              <article>
                {" "}
                <div class="col">
            
                  <div class="card">
                    <a className="link-img" href="/activities-events-outdoors/movies/p/monterey-cinemas-takapuna-22">
                    <img
                      src="//main-cdn.grabone.co.nz/goimage/495x343/aeb84584eaa6c41eed7337bd45f4ad22e01cdf99.jpg"
                      alt="..."
                      class="card-img-top"
                    />
                    <div class="card-body">
                      <header className="top-card">
                        <h5 class="card-text">BasicCare 35-point Service</h5>
                        <p>
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>
                      </header>
                      <footer className="bottom-card">
                        <p className="from-word">from</p>
                        <span className="price"> $195</span>
                      </footer>
                    </div>
                    </a>
                  </div>{" "}
                </div>
              </article>
            </div>
            <div class="colu-3 photo-2">
              <article>
                {" "}
                <div class="col">
                  <div class="card">
                    <a className="link-img" href="/activities-events-outdoors/movies/p/monterey-cinemas-takapuna-22">
                    <img
                      src="//main-cdn.grabone.co.nz/goimage/495x343/ef1b7c64a62bb398468591237772ddfb235aafc5.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <header className="top-card">
                        <h5 class="card-text">BasicCare 35-point Service</h5>
                        <p>
                          <span className="name-Stores">
                            Honda Stores Auckland
                          </span>
                        </p>
                      </header>
                      <footer className="bottom-card">
                        <p className="from-word">from</p>
                        <span className="price"> $195</span>
                      </footer>
                    </div>
                    </a>
                  </div>{" "}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainTop;
