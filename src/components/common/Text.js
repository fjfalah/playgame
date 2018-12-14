import styled, { css } from 'styled-components'
import STYLES from '../../constants/styles';

const text = (props) => {
    if (props.h1) {
        return css`
            font-size: 40px;
        `
    } else if (props.h2) {
        return css`
            font-size: 32px;
        `
    } else if (props.h3) {
        return css`
            font-size: 28px;
        `
    } else if (props.h4) {
        return css`
            font-size: 24px;
        `
    } else if (props.h5) {
        return css`
            font-size: 20px;
        `
    } else if (props.h6) {
        return css`
            font-size: 16px;
        `
    }
}

const textItalic = (props) => {
    if (props.italic) {
        return css`
            font-style: italic;
        `
    }
}

const textWeight = (props) => {
    if (props.bold) {
        return css`
            font-weight: bold;
        `
    }
}

export const Text = styled.div`
    font-size: ${props => props.size || '14px' };
    font-style: normal;
    font-weight: normal;
    color: ${props => props.color || STYLES.color.text};
    ${text}
    ${textItalic}
    ${textWeight}
`