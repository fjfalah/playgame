import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Text, Row, Col } from './components/common'
import About from './routes/about';
import { Provider } from 'react-redux'
import store from './store'


export default class App extends Component {
    render() {
        return (
            <Container fluid>
                <About />
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