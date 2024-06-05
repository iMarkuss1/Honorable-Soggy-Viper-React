import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Violet Services</title>
        <meta
          name="description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
        <meta property="og:title" content="Contact - Violet Services" />
        <meta
          property="og:description"
          content="Welcome to Violet! I offer a multitude of services including Minecraft IGN sales, middleman trading for a variety of games, and holding crypto."
        />
      </Helmet>
      <div className="contact-container01">
        <h1 className="contact-text">
          <span className="contact-text01">Violet</span>
          <br className="contact-text02"></br>
          <br className="contact-text03"></br>
        </h1>
        <div className="contact-container02"></div>
        <h2 className="contact-text04">
          <span className="contact-text05">Services</span>
          <br className="contact-text06"></br>
          <br className="contact-text07"></br>
        </h2>
        <div className="contact-container03">
          <Link to="/" className="contact-navlink button textarea">
            Home
          </Link>
        </div>
        <button type="button" className="contact-button button textarea">
          <Link to="/verify" className="contact-navlink1">
            <span>Verify</span>
            <br></br>
          </Link>
        </button>
        <div data-thq="thq-dropdown" className="contact-thq-dropdown list-item">
          <div
            data-thq="thq-dropdown-toggle"
            className="contact-dropdown-toggle"
          >
            <span className="contact-text10">
              <span>Middleman</span>
              <br></br>
            </span>
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
            <div
              data-thq="thq-dropdown-arrow"
              className="contact-dropdown-arrow"
            ></div>
          </div>
          <ul data-thq="thq-dropdown-list" className="contact-dropdown-list">
            <li data-thq="thq-dropdown" className="contact-dropdown list-item">
              <Link to="/log">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contact-dropdown-toggle1"
                >
                  <span className="contact-text13">Log</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown1 list-item">
              <Link to="/calculator">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contact-dropdown-toggle2"
                >
                  <span className="contact-text14">Calculator</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown2 list-item">
              <Link to="/fa">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contact-dropdown-toggle3"
                >
                  <span className="contact-text15">2FA</span>
                </div>
              </Link>
            </li>
            <li data-thq="thq-dropdown" className="contact-dropdown3 list-item">
              <Link to="/exploit">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="contact-dropdown-toggle4"
                >
                  <span className="contact-text16">Exploit-Checker</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="contact-dropdown4 list-item"
            ></li>
          </ul>
        </div>
        <button type="button" className="contact-button1 button textarea">
          <Link to="/contact" className="contact-navlink6">
            <span>Contact</span>
            <br></br>
          </Link>
        </button>
      </div>
      <div className="contact-container04"></div>
      <div className="contact-container05">
        <div className="contact-container06">
          <div className="contact-container07"></div>
          <h1 className="contact-text19">Contact</h1>
          <span className="contact-text20">
            <br></br>
            <span>
              Here are all my public contacts. If you wish to contact me, the
              fastest method would be through discord.
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="contact-container08">
          <div className="contact-container09">
            <div className="contact-container10">
              <img
                alt="image"
                src="/icons8-discord-240-200h.png"
                className="contact-image"
              />
            </div>
            <div className="contact-container11"></div>
          </div>
          <img
            alt="image"
            src="/telegram_logo.svg-200h.png"
            className="contact-image1"
          />
        </div>
        <div className="contact-container12">
          <span className="contact-text25">
            <span>
                           violet.mm
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>(822473702545162270)</span>
          </span>
          <span className="contact-text29">
                                           @violetserpe
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
