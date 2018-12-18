import styled, { css } from 'styled-components'

const calcFlex = (size) => {
  switch (size) {
    case 1:
      return css`
        -ms-flex: 0 0 8.333333%;
        flex: 0 0 8.333333%;
        max-width: 8.333333%;
      `
    case 2:
      return css`
        -ms-flex: 0 0 16.666667%;
        flex: 0 0 16.666667%;
        max-width: 16.666667%;
      `
    case 3:
      return css`
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
      `
    case 4:
      return css`
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      `
    case 5:
      return css`
        -ms-flex: 0 0 41.666667%;
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
      `
    case 6:
      return css`
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
      `
    case 7:
      return css`
        -ms-flex: 0 0 58.333333%;
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
      `
    case 8:
      return css`
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      `
    case 9:
      return css`
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
      `
    case 10:
      return css`
        -ms-flex: 0 0 83.333333%;
        flex: 0 0 83.333333%;
        max-width: 83.333333%;
      `
    case 11:
      return css`
        -ms-flex: 0 0 91.666667%;
        flex: 0 0 91.666667%;
        max-width: 91.666667%;
      `
    default:
    case 12:
      return css`
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
      `
  }
}

export const smFlex = (props) => {
  if (props.xl || props.md || props.lg) {
    return css`
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    `
  }

  if (props.sm) {
    return calcFlex(props.sm)
  }

  return css`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  `
}

export const mdFlex = (props) => {
  if (props.lg || props.xl) {
    return css`
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    `
  }

  if (props.sm || props.md) {
    return calcFlex(props.sm || props.md)
  }

  return css`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  `
}

export const lgFlex = (props) => {
  if (props.xl) {
    return css`
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    `
  }

  if (props.sm || props.md || props.lg) {
    return calcFlex(props.sm || props.md || props.lg)
  }

  return css`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  `
}


export const Col = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  ${(props) => smFlex(props)};

  @media (min-width: 576px){
    ${(props) => smFlex(props)};
  }
  @media (min-width: 768px) {
    ${(props) => mdFlex(props)};
  }
  @media (min-width: 992px) {
    ${(props) => lgFlex(props)};
  }
  @media (min-width: 1200px) {
    ${(props) => calcFlex(props.sm || props.md || props.lg || props.xl)};
  }
`