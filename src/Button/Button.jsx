import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css'

const Button = ({
  active, color, text, onClick,
}) => (
  <button
    type="button"
    className={classNames({
      active,
      [color]: true,
    })}
    onClick={onClick}
  >
    {text}
  </button>
)

Button.propTypes = {
  active: propTypes.bool,
  color: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func,
}

Button.defaultProps = {
  active: true,
  color: 'default',
  text: 'x',
  onClick: () => {},
}

export default Button
