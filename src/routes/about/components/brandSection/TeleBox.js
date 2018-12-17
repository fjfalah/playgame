import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import STYLES from '../../../../constants/styles';
import { Row, Col, Text, Button } from '../../../../components/common'


const Wrapper = styled.div`
  padding: 40px 10px;
`
const Title = styled(Text)`
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 5px 0;
`
const TeleTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TeleTitle = styled(Text)`
  margin-block-start: 0;
  margin-block-end: 0;
`

const TeleImage = styled.img`
  padding: 10px;
`

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 576px){
    flex-direction: column;
    align-items: stretch;

  }
`

const GroupWrapper = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ChannelWrapper = styled(GroupWrapper)``
const GroupButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 576px){
    flex-direction: column;
  }
`

const ChannelButtonWrapper = styled(GroupButtonWrapper)``


export default class TeleBox extends Component {

  render() {
    return (
      <Wrapper>
        <TeleTitleWrapper>
          <TeleImage src={require('../../../../assets/images/icon_telegram_Color.png')} />
          <TeleTitle as="h4" size="24px" weight="500">
            JOIN OUT TELEGRAM
          </TeleTitle>
        </TeleTitleWrapper>
        <Row justifyCenter>
          <Col md={4}>
            <ActionWrapper>
              <GroupWrapper>
                <Title as="h4" align="center" weight="400">
                  GROUP
                </Title>
                <GroupButtonWrapper>
                  <Button blue outline small>
                    ENG
                  </Button>
                  <Button blue outline small>
                    IND
                  </Button>
                </GroupButtonWrapper>
              </GroupWrapper>
              <ChannelWrapper>
                <Title as="h4" align="center" weight="400">
                  CHANNEL
                </Title>
                <ChannelButtonWrapper>
                  <Button orange outline small>
                    PLAYGAMEICO
                  </Button>
                </ChannelButtonWrapper>
              </ChannelWrapper>
            </ActionWrapper>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
