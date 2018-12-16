import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col, Text, Button } from '../../../../components/common';
import STYLES from '../../../../constants/styles'
import TeleBox from './TeleBox';
import img from '../../../../assets/images/img_bg_about.png'

const Wrapper = styled.section`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    padding-top: 100px;
`

export default class BrandSection extends Component {
    render() {
        return (
            <Wrapper>
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
                <TeleBox />
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
            </Wrapper>
        )
    }
}
