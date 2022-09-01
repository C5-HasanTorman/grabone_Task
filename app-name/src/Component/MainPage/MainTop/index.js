import React from "react";
import "./style.css";

const MainTop = () => {
  return (
    <div className="container top-level">
      <section className="discver-mid">
        <div class="container-fluid">
          <div class="row main ">
            <div class="col col-lg-3">
              <aside>
                <header className="title-top">Discover</header>
                <hr />
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span>Featured Auckland deals</span>
                    </a>
                  </li>
                </ul>
              </aside>{" "}
            </div>
            <div class="col-md-4">
              <article>
                {" "}
                <div class="col">
                  <div class="card">
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
                  </div>{" "}
                </div>
              </article>
            </div>
            <div class="col col-lg-4">
              <article>
                {" "}
                <div class="col">
                  <div class="card">
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
