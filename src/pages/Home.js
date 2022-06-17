import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <div className="home__inputContainer">
          <Search hideButton={false} />
        </div>
      </div>
    </div>
  );
};

export default Home;
