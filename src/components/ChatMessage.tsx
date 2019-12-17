import React from 'react'
import {TouchableHighlight} from 'react-native'
import styled from 'styled-components/native'

import {Message} from '../model'
import {PRIMARY} from '../theme'
import {Content, Name} from './Shared'

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

export const ChatMessage: React.FC<{message: Message}> = ({message: {avatar, name, message}}) => (
    <TouchableHighlight underlayColor={PRIMARY}>
        <Container>
            <Avatar source={{uri: avatar}} />
            <UserInfo>
                <Name>{name}</Name>
                <Content>{message}</Content>
            </UserInfo>
        </Container>
    </TouchableHighlight>
)
