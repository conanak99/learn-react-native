import React from 'react'
import {TouchableHighlight} from 'react-native'
import styled from 'styled-components/native'

import {Message} from '../model'
import {FONT_WEIGHT_STYLE} from '../theme'

const Container = styled.View`
    flex-direction: row;
    margin-bottom: 25px;
`
const Avatar = styled.Image`
    border-radius: 30px;
    width: 60px;
    height: 60px;
    margin-right: 20px;
`

const UserInfo = styled.View`
    flex-direction: column;
    justify-content: center;
`
const Name = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[700]};
    font-size: 14px;
    line-height: 20px;
`

const Content = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[300]};
    font-size: 12px;
    line-height: 15px;
`

export const ChatMessage: React.FC<{message: Message}> = ({message: {avatar, name, message}}) => (
    <TouchableHighlight>
        <Container>
            <Avatar source={{uri: avatar}} />
            <UserInfo>
                <Name>{name}</Name>
                <Content>{message}</Content>
            </UserInfo>
        </Container>
    </TouchableHighlight>
)
