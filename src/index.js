/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button/Button'

import './index.css'
import Input from './Input/Input'

const App = () => {
  const [inputText, setInputText] = useState(['0'])
  // eslint-disable-next-line prefer-const
  let [displayValue, setDisplayValue] = useState([''])
  // eslint-disable-next-line prefer-const
  let [operator, setOperator] = useState([''])

  const setValues = (value) => {
    setInputText((oldValue) => {
      const newValue = [...oldValue]
      if (newValue[0] === 'ERROR') {
        newValue[0] = ''
      }
      if (newValue[0].length > 8) {
        return newValue
      }
      if (newValue[0] === '0') {
        newValue[0] = value
      } else {
        newValue[0] += value
      }
      return newValue
    })
  }

  const operation = (op) => {
    setOperator(() => {
      operator = op
      return operator
    })
    setInputText((oldValue) => {
      const newValue = [...oldValue]
      setDisplayValue({ displayValue: newValue[0] })
      newValue[0] = '0'
      return newValue
    })
  }

  const equal = () => {
    setInputText((oldValue) => {
      const newValue = [...oldValue]
      let total = 0
      switch (operator) {
        case '+':
          total = parseFloat(displayValue.displayValue, 10) + parseFloat(newValue[0], 10)
          break
        case '-':
          total = parseFloat(displayValue.displayValue, 10) - parseFloat(newValue[0], 10)
          break
        case '*':
          total = parseFloat(displayValue.displayValue, 10) * parseFloat(newValue[0], 10)
          break
        case '/':
          // eslint-disable-next-line max-len
          total = parseFloat(parseFloat(displayValue.displayValue, 10) / parseFloat(newValue[0], 10), 10).toFixed(2)
          break
        case '%':
          total = parseFloat(displayValue.displayValue, 10) % parseFloat(newValue[0], 10)
          break
        default:
          break
      }
      if (total < 0) {
        total = 'ERROR'
      } else if (total > 999999999) {
        total = 'ERROR'
      }
      newValue[0] = total
      setDisplayValue({ displayValue: 0 })
      return newValue
    })
  }

  return (
    <div className="container">
      <Input active color="display" text={inputText[0]} />
      <Button
        active
        color="operator equal"
        text="/"
        onClick={() => {
          operation('/')
        }}
      />
      <Button
        active
        color="operator equal"
        text="%"
        onClick={() => {
          operation('%')
        }}
      />
      <Button
        active
        color="number"
        text="7"
        onClick={() => {
          setValues('7')
        }}
      />
      <Button
        active
        color="number"
        text="8"
        onClick={() => {
          setValues('8')
        }}
      />
      <Button
        active
        color="number"
        text="9"
        onClick={() => {
          setValues('9')
        }}
      />
      <Button
        active
        color="operator"
        text="+"
        onClick={() => {
          operation('+')
        }}
      />
      <Button
        active
        color="number"
        text="4"
        onClick={() => {
          setValues('4')
        }}
      />
      <Button
        active
        color="number"
        text="5"
        onClick={() => {
          setValues('5')
        }}
      />
      <Button
        active
        color="number"
        text="6"
        onClick={() => {
          setValues('6')
        }}
      />
      <Button
        active
        color="operator"
        text="-"
        onClick={() => {
          operation('-')
        }}
      />
      <Button
        active
        color="number"
        text="1"
        onClick={() => {
          setValues('1')
        }}
      />
      <Button
        active
        color="number"
        text="2"
        onClick={() => {
          setValues('2')
        }}
      />
      <Button
        active
        color="number"
        text="3"
        onClick={() => {
          setValues('3')
        }}
      />
      <Button
        active
        color="operator"
        text="*"
        onClick={() => {
          operation('*')
        }}
      />
      <Button
        active
        color="number"
        text="."
        onClick={() => {
          setValues('.')
        }}
      />
      <Button
        active
        color="number"
        text="0"
        onClick={() => {
          setValues('0')
        }}
      />
      <Button
        active
        color="operator equal"
        text="="
        onClick={() => {
          equal()
        }}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
