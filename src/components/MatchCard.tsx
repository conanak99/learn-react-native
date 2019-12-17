import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'
import {TouchableHighlight} from 'react-native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE, PRIMARY} from '../theme'
import {Card} from './Shared'

export const MatchCard: React.FC<{match: Match}> = ({match: {avatar, name, isActive, lastActive}}) => (
    <TouchableHighlight style={{width: '48%'}} underlayColor={PRIMARY}>
        <CardContainer>
            <Avatar source={{uri: avatar}}></Avatar>

            <UserInfo>
                <Name>{name}</Name>

                {isActive && (
                    <Status>
                        <Icon name="ios-radio-button-on" color="#46A575" size={10} /> Active Now
                    </Status>
                )}

                {!isActive && lastActive && <Status>Last seen: {lastActive.fromNow()} </Status>}
            </UserInfo>
        </CardContainer>
    </TouchableHighlight>
)

const CardContainer = styled(Card)`
    flex-grow: 1;
    flex-shrink: 0;
    margin-bottom: 15px;
`

const Avatar = styled.Image`
    width: 100%;
    border-radius: 15px;
    aspect-ratio: 0.85;
`

const UserInfo = styled.View`
    padding: 16px 0;
    text-align: center;
    align-items: center;
`

const Name = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[800]};
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
`

const Status = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[300]};
    font-size: 10px;
    line-height: 13px;
`
