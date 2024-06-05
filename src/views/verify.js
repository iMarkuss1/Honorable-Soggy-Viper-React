import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './verify.css'

const Verify = (props) => {
  return (
    <div className="verify-container">
      <Helmet>
        <title>Verify - Violet Services</title>
        <meta
          name="description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
        <meta property="og:title" content="Verify - Violet Services" />
        <meta
          property="og:description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
      </Helmet>
      <div className="verify-container01">
        <h1 className="verify-text">
          <span className="verify-text01">Violet</span>
          <br className="verify-text02"></br>
          <br className="verify-text03"></br>
        </h1>
        <div className="verify-container02"></div>
        <h2 className="verify-text04">
          <span className="verify-text05">Services</span>
          <br className="verify-text06"></br>
          <br className="verify-text07"></br>
        </h2>
        <div className="verify-container03">
          <Link to="/" className="verify-navlink button textarea">
            Home
          </Link>
        </div>
        <button type="button" className="verify-button button textarea">
          <Link to="/verify" className="verify-navlink1">
            <span>Verify</span>
            <br></br>
          </Link>
        </button>
        <div data-thq="thq-dropdown" className="verify-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="verify-dropdown-toggle"
          >
            <span className="verify-text10">
              <span>Middleman</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="verify-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="verify-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="verify-dropdown-list">
            <li data-thq="thq-dropdown" className="verify-dropdown list-item">
              <Link to="/log">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="verify-dropdown-toggle1"
                >
                  <span className="verify-text13">Log</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="verify-dropdown1 list-item">
              <Link to="/calculator">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="verify-dropdown-toggle2"
                >
                  <span className="verify-text14">Calculator</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="verify-dropdown2 list-item">
              <Link to="/fa">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="verify-dropdown-toggle3"
                >
                  <span className="verify-text15">2FA</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="verify-dropdown3 list-item">
              <Link to="/exploit">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="verify-dropdown-toggle4"
                >
                  <span className="verify-text16">Exploit-Checker</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="verify-dropdown4 list-item"
            ></li>
          </ul>
        </div>
        <button type="button" className="verify-button1 button textarea">
          <Link to="/contact" className="verify-navlink6">
            <span>Contact</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="verify-container04"></div>
      <div className="verify-container05">
        <div className="verify-container06">
          <div className="verify-container07">
            <div className="verify-container08">
              <div className="verify-container09">
                <div className="verify-container10">
                  <div className="verify-container11"></div>
                  <div className="verify-container12">
                    <h1 className="verify-text19">
                      <span>Verify</span>
                      <br></br>
                    </h1>
                    <span className="verify-text22">
                      There are many users on discord using various methods of
                      impersonation, so follow the steps below to ensure that
                      you&apos;re not talking to one.
                    </span>
                  </div>
                </div>
                <div className="verify-container13">
                  <span className="verify-text23">
                    <span>
                      1) Go to your settings and enable developer mode
                    </span>
                    <br></br>
                    <br></br>
                    <span>Desktop:</span>
                  </span>
                </div>
                <img
                  alt="image"
                  src="/screenshot_3-800w.png"
                  className="verify-image"
                />
              </div>
            </div>
            <span className="verify-text28">
              <br></br>
              <br></br>
              <br></br>
              <span>
                2) Right click the discord profile in question (not the message)
                and click &quot;Copy ID&quot;
              </span>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
          <img alt="image" src="/3-400h.jpg" className="verify-image1" />
        </div>
        <span className="verify-text36">
          <br></br>
          <br></br>
          <span>
            The ID should be IDENTICAL to mine. Do not listen to any of the
            excuses the impersonator may make to counter this.
          </span>
          <br></br>
          <br></br>
          <span>
            Please make sure your # and the # below match before doing anything
            else.
          </span>
          <br></br>
          <br></br>
          <span>822473702545162270</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Verify
