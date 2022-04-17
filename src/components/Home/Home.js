import React, { Fragment } from "react";
import Header from "./Header";
import img11 from "../../assests/11.jpg";
import ingredimg from "./../../assests/2.png";
import personimg from "../../assests/2.jpg";
import "./Home.css";
import Data from "../../Data";
import { Carousel } from "react-bootstrap";

const Home = () => {
  const BlogItems = Data.map((item) => {
    return (
      <div className="col-md-4 item">
        <img src={item.img} alt="img" />
        <h4>{item.title}</h4>
        <p className="time">Time : {item.time} | Serves: 1</p>
        <p className="price">
          {" "}
          {item.price} <del>$15.70</del>{" "}
        </p>
        <button>Order Now</button>
      </div>
    );
  });
  return (
    <Fragment>
      <Header />

      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>Photos</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>Rockets</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>Globes</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img11} alt="img" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="ingred">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperediet.</li>
                <li>Purus a odio finibus bibendum.</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="col-md-6">
              <img src={ingredimg} alt="img" />
            </div>
          </div>
        </div>
      </section>

      <section className="paral">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium deleniti fugiat numquam?
              </p>
              <p>Watch Our Story</p>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row row11">
            <div className="col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row row22">{BlogItems}</div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
