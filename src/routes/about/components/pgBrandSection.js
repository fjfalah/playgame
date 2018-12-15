import React, { Component } from 'react'
import { Row, Col, Text, Button } from '../../../components/common';
import STYLES from '../../../constants/styles'

export default class PgBrandSection extends Component {
    render() {
        return (
            <div className="brandSection">
                <Row>
                    <Col sm={12}>
                        <Text h1 align="center">
                            POWERING REAL ECONOMY IN THE
                    </Text>
                        <Text h1 weight="500" align="center">
                            GAMING WORLD
                    </Text>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Text h4 align="center" styles={{ marginTop: '50', }}>
                            <img src="../../../assets/images/img_bg_about.png" />
                            JOIN OUR TELEGRAM
                        </Text>
                    </Col>
                </Row>
                <Row justifyCenter>
                    <Col md={4}>
                        <Row>
                            <Col md={6}>
                                <Text weight="500" align="center">GROUP</Text>
                                <Row>
                                    <Col md={6}>
                                        <Button blue outline block>
                                            ENG
                                        </Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button blue outline block>
                                            IND
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Text weight="500" align="center">CHANNEL</Text>
                                <Row>
                                    <Col md={12}>
                                        <Button orange outline block>
                                            PLAYGAMEICO
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row justifyCenter>
                    <Col md={3}>
                        <Text size="36px" align="right" weight="bold">
                            ABOUT
                        </Text>
                        <Text size="36px" align="right" weight="bold" color={STYLES.color.orange}>
                            PLAYGAME
                        </Text>
                    </Col>
                    <Col md={6}>
                        <Text size="18px" as="p">
                            To simplify marketing and distribution, we are creating playgame.com. A direct-to-play gaming platform where players can play HTML5 games directly from their desktop, mobile browser or even embedded on their own application. No application downloads required. Publishing your game to playgame.com is not mandatory.
                        </Text>
                        <Text size="18px" as="p">
                            We will also be launching a crypto-powered crowdfunding platform that we called the FunFund Initiative.
                        </Text>
                    </Col>
                </Row>
            </div>
        )
    }
}
