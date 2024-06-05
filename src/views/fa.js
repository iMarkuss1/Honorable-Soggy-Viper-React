import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './fa.css'

const FA = (props) => {
  return (
    <div className="fa-container">
      <Helmet>
        <title>FA - Violet Services</title>
        <meta
          name="description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
        <meta property="og:title" content="FA - Violet Services" />
        <meta
          property="og:description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
      </Helmet>
      <div className="fa-container01">
        <h1 className="fa-text">
          <span className="fa-text01">Violet</span>
          <br className="fa-text02"></br>
          <br className="fa-text03"></br>
        </h1>
        <div className="fa-container02"></div>
        <h2 className="fa-text04">
          <span className="fa-text05">Services</span>
          <br className="fa-text06"></br>
          <br className="fa-text07"></br>
        </h2>
        <div className="fa-container03">
          <Link to="/" className="fa-navlink button textarea">
            Home
          </Link>
        </div>
        <button type="button" className="fa-button button textarea">
          <Link to="/verify" className="fa-navlink1">
            <span>Verify</span>
            <br></br>
          </Link>
        </button>
        <div data-thq="thq-dropdown" className="fa-thq-dropdown list-item">
          <div data-thq="thq-dropdown-toggle" className="fa-dropdown-toggle">
            <span className="fa-text10">
              <span>Middleman</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="fa-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="fa-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="fa-dropdown-list">
            <li data-thq="thq-dropdown" className="fa-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="fa-dropdown-toggle1"
              >
                <Link to="/log" className="fa-navlink2">
                  Log
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="fa-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="fa-dropdown-toggle2"
              >
                <Link to="/calculator" className="fa-navlink3">
                  Calculator
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="fa-dropdown2 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="fa-dropdown-toggle3"
              >
                <Link to="/fa" className="fa-navlink4">
                  2FA
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="fa-dropdown3 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="fa-dropdown-toggle4"
              >
                <Link to="/exploit" className="fa-navlink5">
                  Exploit-Checker
                </Link>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="fa-dropdown4 list-item"></li>
          </ul>
        </div>
        <button type="button" className="fa-button1 button textarea">
          <Link to="/contact" className="fa-navlink6">
            <span>Contact</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="fa-container04"></div>
      <div className="fa-container05">
        <div className="fa-container06">
          <div className="fa-container07">
            <div className="fa-container08">
              <div className="fa-container09">
                <div className="fa-container10">
                  <div className="fa-container11"></div>
                </div>
              </div>
            </div>
            <h1 className="fa-text15">2FA Code Generator</h1>
          </div>
          <span className="fa-text16">
            <br></br>
            <span>
              You can enter a 2FA secret key to generate 2FA codes for your
              account.
            </span>
            <br></br>
            <br></br>
            <span>
              Do not share it with anyone, as they will be able to do the same.
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span>
              (Key won&apos;t generate until you have the correct 2FA typed in.
              If it doesn&apos;t work, make sure you spelled it correctly)
            </span>
            <br></br>
          </span>
          <span className="fa-text27">
            <br></br>
            <span>2FA Secret Key</span>
            <br></br>
            <br></br>
          </span>
        </div>
        <input
          type="text"
          placeholder="XXXX XXXX XXXX XXXX"
          className="input"
        />
      </div>
    </div>
  )
}

export default FA
