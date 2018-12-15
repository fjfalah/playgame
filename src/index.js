import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Text, Row, Col } from './components/common'

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={9} sm={3}>
            <Text>Normal Tdextss</Text>        
          </Col>
          <Col md={3} sm={9}>
            <Text>Normal Textkjdbsajkalkjsdn alksdaksjnd alsknja s</Text>        
          </Col>
        </Row>
        <Text>Normal Text</Text>        
        <Text h1>h1 Text</Text> 
        <Text h2>h2 Text</Text> 
        <Text h3>h3 Text</Text> 
        <Text h4>h4 Text</Text> 
        <Text h5>h5 Text</Text>      
        <Text h6>h6 Text</Text>  
        <Text size="69px">custom text size (69spx)</Text>  
        <Text h3 bold>H3 Bold Text</Text> 
        <Text h3 italic>H3 Italic Text</Text> 
        <Text h3 bold italic>H3 Bold Italic Text</Text> 
      </Container>
    )
  }
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)