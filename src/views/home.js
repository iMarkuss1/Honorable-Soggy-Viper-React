import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Violet Services</title>
        <meta
          name="description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
        <meta property="og:title" content="Violet Services" />
        <meta
          property="og:description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
      </Helmet>
      <div className="home-container01">
        <h1 className="home-text">
          <span className="home-text01">Violet</span>
          <br className="home-text02"></br>
          <br className="home-text03"></br>
        </h1>
        <div className="home-container02"></div>
        <h2 className="home-text04">
          <span className="home-text05">Services</span>
          <br className="home-text06"></br>
          <br className="home-text07"></br>
        </h2>
        <div className="home-container03">
          <Link to="/" className="home-navlink button textarea">
            Home
          </Link>
        </div>
        <button type="button" className="home-button button textarea">
          <Link to="/verify" className="home-navlink1">
            <span>Verify</span>
            <br></br>
          </Link>
        </button>
        <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
            <span className="home-text10">
              <span>Middleman</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="home-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
            <li data-thq="thq-dropdown" className="home-dropdown list-item">
              <Link to="/log">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle1"
                >
                  <span className="home-text13">Log</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
              <Link to="/calculator">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle2"
                >
                  <span className="home-text14">Calculator</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
              <Link to="/fa">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle3"
                >
                  <span className="home-text15">2FA</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="home-dropdown3 list-item">
              <Link to="/exploit">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle4"
                >
                  <span className="home-text16">Exploit-Checker</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-dropdown4 list-item"
            ></li>
          </ul>
        </div>
        <button type="button" className="home-button1 button textarea">
          <Link to="/contact" className="home-navlink6">
            <span>Contact</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="home-container04"></div>
      <div className="home-container05">
        <div className="home-container06">
          <div className="home-container07">
            <div className="home-container08"></div>
            <div className="home-container09">
              <h1 className="home-text19">Welcome</h1>
              <span className="home-text20">
                Welcome to my website, here I&apos;ll provide information about
                the things that I sell, and the services that I offer.
              </span>
            </div>
          </div>
          <div className="home-container10">
            <h2 className="home-text21">
              <span>Verification</span>
              <br></br>
            </h2>
            <span className="home-text24">
              <span>
                Discord impersonators use multiple methods for impersonating,
                such as using fake letters that appear identical to English
                letters to copy usernames. Use my verification located on the
                sidebar to make sure that you&apos;re actually talking to me, as
                people try to impersonate me on discord from time to time.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-container11">
          <h2 className="home-text27">Middleman Service</h2>
          <span className="home-text28">
            I have middlemanned a lot of deals for users on MC-Market and
            OGUsers, which can be viewed in the logs of the
            &quot;Middleman&quot; section. At the moment I usually only secure
            minecraft accounts, but I can hold crypto, or do other deals outside
            of that range depending on the cost.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
