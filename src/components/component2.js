import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <div className="component2-container01">
        <div className="component2-container02">
          <div className="component2-container03">
            <div className="component2-container04">
              <div className="component2-container05">
                <div className="component2-container06">
                  <div className="component2-container07">
                    <div className="component2-container08">
                      <h3 className="component2-text">{props.heading10}</h3>
                    </div>
                    <div className="component2-container09">
                      <h3 className="component2-text01">{props.heading11}</h3>
                    </div>
                  </div>
                  <div className="component2-container10">
                    <h3 className="component2-text02">{props.heading8}</h3>
                  </div>
                </div>
                <div className="component2-container11">
                  <h3 className="component2-text03">{props.heading6}</h3>
                </div>
              </div>
              <div className="component2-container12">
                <h3 className="component2-text04">{props.heading4}</h3>
              </div>
            </div>
            <div className="component2-container13">
              <h3 className="component2-text05">{props.heading2}</h3>
            </div>
          </div>
          <div className="component2-container14">
            <h3 className="component2-text06">{props.heading}</h3>
          </div>
        </div>
        <ul className="list">
          <li className="list-item"></li>
        </ul>
      </div>
      <div className="component2-container15">
        <div className="component2-container16">
          <div className="component2-container17">
            <div className="component2-container18">
              <div className="component2-container19">
                <div className="component2-container20">
                  <div className="component2-container21">
                    <div className="component2-container22">
                      <h3 className="component2-text07">{props.heading12}</h3>
                    </div>
                    <div className="component2-container23">
                      <h3 className="component2-text08">{props.heading13}</h3>
                    </div>
                  </div>
                  <div className="component2-container24">
                    <h3 className="component2-text09">{props.heading9}</h3>
                  </div>
                </div>
                <div className="component2-container25">
                  <h3 className="component2-text10">{props.heading7}</h3>
                </div>
              </div>
              <div className="component2-container26">
                <h3 className="component2-text11">{props.heading5}</h3>
              </div>
            </div>
            <div className="component2-container27">
              <h3 className="component2-text12">{props.heading3}</h3>
            </div>
          </div>
          <div className="component2-container28">
            <h3 className="component2-text13">{props.heading1}</h3>
          </div>
        </div>
        <ul className="list">
          <li className="list-item"></li>
        </ul>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  heading: 'Description',
  heading9: 'Seller ID',
  heading5: 'Date',
  heading10: 'Deal ID',
  heading8: 'Seller ID',
  heading3: 'Deal Value',
  heading13: 'Site',
  heading11: 'Site',
  heading2: 'Deal Value',
  heading7: 'Buyer ID',
  heading6: 'Buyer ID',
  heading4: 'Date',
  heading1: 'Description',
  heading12: 'Deal ID',
}

Component2.propTypes = {
  heading: PropTypes.string,
  heading9: PropTypes.string,
  heading5: PropTypes.string,
  heading10: PropTypes.string,
  heading8: PropTypes.string,
  heading3: PropTypes.string,
  heading13: PropTypes.string,
  heading11: PropTypes.string,
  heading2: PropTypes.string,
  heading7: PropTypes.string,
  heading6: PropTypes.string,
  heading4: PropTypes.string,
  heading1: PropTypes.string,
  heading12: PropTypes.string,
}

export default Component2
