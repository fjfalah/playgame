import styled, { css } from 'styled-components'
import STYLES from '../../constants/styles'

// const containerFluid = (props) => {
//     if (props.fluid) {
//         return css`
//             width: 100%;
//             padding-right: 15px;
//             padding-left: 15px;
//             margin-right: auto;
//             margin-left: auto;

//             @media (min-width: 768px){
//                 max-width: unset;
//             }
//             @media (min-width: 576px) {
//                 max-width: unset;
//             }
//         `
//     }
// }

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`