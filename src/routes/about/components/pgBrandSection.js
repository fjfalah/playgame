import React, { Component } from 'react'
import { Row, Col, Text, Button } from '../../../components/common';

export default class PgBrandSection extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <Text h1 align="center">
                        POWERING REAL ECONOMY IN THE
                    </Text>
                    <Text h1 bold align="center">
                        GAMING WORLD
                    </Text>
                </Col>
                <Col sm={12}>
                    <Text h4 align="center" styles={{marginTop: '50',}}>
                        <img src="../../../assets/images/img_bg_about.png" />
                        JOIN OUR TELEGRAM
                    </Text>
                    <Button orange outline block>Yellow</Button>
                    <Button blue outline>Blue</Button>
                </Col>
            </Row>
        )
    }
}
