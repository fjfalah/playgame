import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Text, Row, Col } from './components/common'
import About from './routes/about';
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Rubik', sans-serif;
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
  }
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <About />
        <Footer />
        <GlobalStyle />
      </Container>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)