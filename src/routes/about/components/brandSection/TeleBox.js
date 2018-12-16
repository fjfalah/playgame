import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import STYLES from '../../../../constants/styles';
import { Row, Col, Text, Button } from '../../../../components/common'


const Wrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 50px; 
`
const ButtonWrapper = styled(Row)`
    padding: 20px 0;
`

const GroupTitle = styled.div`
    padding: 10px 0;
`

const ChannelTitle = styled.div`
    padding: 10px 0;
 `


export default class TeleBox extends Component {

  render() {
    return (
      <Wrapper>
            <Row>
                <Col sm={12}>
                    <Text h4 align="center">
                        {/* <img src={require("../../../assets/images/img_bg_about.png")} /> */}
                        JOIN OUR TELEGRAM
                    </Text>
                </Col>
            </Row>
            <ButtonWrapper justifyCenter>
                <Col md={4}>
                    <Row>
                        <Col md={6}>
                            <GroupTitle>
                                <Text weight="500" align="center">GROUP</Text>
                            </GroupTitle>
                            <Row>
                                <Col md={6}>
                                    <Button blue outline block small>
                                        ENG
                                        </Button>
                                </Col>
                                <Col md={6}>
                                    <Button blue outline block small>
                                        IND
                                        </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <ChannelTitle>
                                <Text weight="500" align="center">CHANNEL</Text>
                            </ChannelTitle>
                            <Row>
                                <Col md={12}>
                                    <Button blue outline block small>
                                        PLAYGAMEICO
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </ButtonWrapper>
      </Wrapper>
    )
  }
}
