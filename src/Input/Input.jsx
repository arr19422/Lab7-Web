import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Input.css'

const Input = ({
  active, color, text,
}) => (
  <div
    className={classNames({
      active,
      [color]: true,
    })}
  >
    {text}
  </div>
)

Input.propTypes = {
  active: propTypes.bool,
  color: propTypes.string,
  text: propTypes.string,
}

Input.defaultProps = {
  active: true,
  color: 'default',
  text: 'x',
}

export default Input
