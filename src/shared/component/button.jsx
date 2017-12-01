// @flow

import React from 'react' // eslint-disable-line no-unused-vars

type Props = {
  label: string,
  handleClick: Function
}

const Button = ({ label, handleClick }: Props) =>
  <button onClick={handleClick}>{label}</button>

export default Button
