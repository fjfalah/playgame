import styled, { css } from 'styled-components'

const rowJustify = (props) => {
  if (props.justifyStart) {
    return css`
      justify-content: flex-start;
    `
  } else if (props.justifyCenter) {
    return css`
      justify-content: center;
    `
  } else if (props.justifyEnd) {
    return css`
      justify-content: flex-end;
    `
  }
}

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${rowJustify}
`