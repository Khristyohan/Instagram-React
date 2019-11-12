import React, { Component } from 'react';
import './Instagram.scss';
import Post from './Post';
import Footer from './Footer';
import StoryPost from './StoryPost';
import DiscoverExplore from './DiscoverExplore';
import SuggestionProfile from './SuggestionProfile';
import pro from './images/pro.png';

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="head">
          <div className="header-block">
            <div className="app-name">
              <div>
                <i className="fa fa-instagram" />
              </div>
              <p>Instagram</p>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <i className="fa fa-search" />
            </div>
            <div className="icons">
              <i className="fa fa-user-o" />
              <i className="fa fa-heart-o" />
              <i className="fa fa-compass" />
            </div>
          </div>
        </div>
        <div className="insta-body">
          <div className="insta-post">
            <Post />
          </div>
          <div className="profile-stories">
            <div className="profile">
              <p>
                <img src={pro} alt="" />
                <h5>khrist_yohan</h5>
                <span>Khrist YohaN </span>
              </p>
            </div>
            <div className="home-stories">
              <StoryPost />
              <SuggestionProfile />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Instagram extends Component {
  render() {
    return (
      <div className="instagram">
        <HomePage />
        <DiscoverExplore />
      </div>
    );
  }
}

export default Instagram;