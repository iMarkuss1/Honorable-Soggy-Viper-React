import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './calculator.css'

const Calculator = (props) => {
  return (
    <div className="calculator-container">
      <Helmet>
        <title>Calculator - Violet Services</title>
        <meta
          name="description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
        <meta property="og:title" content="Calculator - Violet Services" />
        <meta
          property="og:description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
      </Helmet>
      <div className="calculator-container01">
        <h1 className="calculator-text">
          <span className="calculator-text01">Violet</span>
          <br className="calculator-text02"></br>
          <br className="calculator-text03"></br>
        </h1>
        <div className="calculator-container02"></div>
        <h2 className="calculator-text04">
          <span className="calculator-text05">Services</span>
          <br className="calculator-text06"></br>
          <br className="calculator-text07"></br>
        </h2>
        <div className="calculator-container03">
          <Link to="/" className="calculator-navlink button textarea">
            Home
          </Link>
        </div>
        <button type="button" className="calculator-button button textarea">
          <Link to="/verify" className="calculator-navlink1">
            <span>Verify</span>
            <br></br>
          </Link>
        </button>
        <div
          data-thq="thq-dropdown"
          className="calculator-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="calculator-dropdown-toggle"
          >
            <span className="calculator-text10">
              <span>Middleman</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="calculator-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="calculator-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="calculator-dropdown-list">
            <li
              data-thq="thq-dropdown"
              className="calculator-dropdown list-item"
            >
              <Link to="/log">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="calculator-dropdown-toggle1"
                >
                  <span className="calculator-text13">Log</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="calculator-dropdown1 list-item"
            >
              <Link to="/calculator">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="calculator-dropdown-toggle2"
                >
                  <span className="calculator-text14">Calculator</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="calculator-dropdown2 list-item"
            >
              <Link to="/fa">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="calculator-dropdown-toggle3"
                >
                  <span className="calculator-text15">2FA</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="calculator-dropdown3 list-item"
            >
              <Link to="/exploit">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="calculator-dropdown-toggle4"
                >
                  <span className="calculator-text16">Exploit-Checker</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="calculator-dropdown4 list-item"
            ></li>
          </ul>
        </div>
        <button type="button" className="calculator-button1 button textarea">
          <Link to="/contact" className="calculator-navlink6">
            <span>Contact</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="calculator-container04"></div>
      <div className="calculator-container05">
        <div className="calculator-container06">
          <div className="calculator-container07">
            <div className="calculator-container08">
              <div className="calculator-container09">
                <div className="calculator-container10">
                  <div className="calculator-container11"></div>
                </div>
              </div>
            </div>
            <h1 className="calculator-text19">Calculator</h1>
          </div>
          <span className="calculator-text20">
            <br></br>
            <span>
              My rate is 5%, with a minimum of $10, only in bitcoin, paypal, or
              cashapp.
            </span>
            <br></br>
            <br></br>
            <span>
              Trades are based on the combined estimated value of both accounts
              if I&apos;m securing both of them.
            </span>
            <br></br>
            <br></br>
            <span>
              If I&apos;m having to secure multiple accounts, then the fee will
              be slightly higher. For larger deals, this doesn&apos;t apply.
            </span>
            <br></br>
            <br></br>
            <span>Deals above $1000 USD are charged 2.5% </span>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Calculator
