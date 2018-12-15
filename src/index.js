import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Text, Row, Col } from './components/common'
import About from './routes/about';

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
    <App />,
    document.getElementById('root')
)