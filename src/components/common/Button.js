import styled, { css } from 'styled-components'
import STYLES from '../../constants/styles';

const buttonOrangeFull = () => {
  return css`
    color: ${STYLES.color.white};
    background-color: ${STYLES.color.orange};
    border-color: ${STYLES.color.orange};
  `
}

const buttonOrangeOutline = () => {
  return css`
    color: ${STYLES.color.orange};
    background-color: ${STYLES.color.white};
    border-color: ${STYLES.color.orange};
  `
}

const buttonOrange = (props) => {
  if (props.orange) {
    if (props.outline) {
      return buttonOrangeOutline
    } else {
      return buttonOrangeFull
    }
  }
}

const buttonBlueFull = () => {
  return css`
    color: ${STYLES.color.white};
    background-color: ${STYLES.color.blue};
    border-color: ${STYLES.color.blue};
  `
}

const buttonBlueOutline = () => {
  return css`
    color: ${STYLES.color.blue};
    background-color: ${STYLES.color.white};
    border-color: ${STYLES.color.blue};
  `
}

const buttonBlue = (props) => {
  if (props.blue) {
    if (props.outline) {
      return buttonBlueOutline
    } else {
      return buttonBlueFull
    }
  }
}

const buttonBlock = (props) => {
  if (props.block) {
    return css`
      display: block;
      width: 100%;
      margin-top: 5px;
      margin-left: 0;
      margin-right: 0;
    `
  }
}

const buttonSize = (props) => {
  if (props.large) {
    return css`
      padding: 20px 20px;
    `
  } else if (props.small) {
    return css`
      padding: 5px 20px;
    `
  }
}

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 17px;
  border: 2px solid;
  border-radius: 23px;
  color: ${STYLES.color.white};
  background-color: ${STYLES.color.orange};
  border-color: ${STYLES.color.orange};
  padding: 15px 40px;
  margin: 3px;
  outline: 0;
  user-select: none;
  transition: all .3s;

  &:hover {
      cursor: pinter
  }

  &:active {
      transform: scale(.95)
  }
  ${buttonOrange}
  ${buttonBlue}
  ${buttonBlock}
  ${buttonSize}
`