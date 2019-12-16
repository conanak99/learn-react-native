import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'
import {TouchableHighlight} from 'react-native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE} from '../theme'

const CardContainer = styled.View`
    flex-grow: 1;
    flex-shrink: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
`

const Avatar = styled.Image`
    width: 100%;
    border-radius: 15px;
    min-height: 200px;
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

export const MatchCard: React.FC<{match: Match}> = ({match: {avatar, name, isActive, lastActive}}) => (
    <TouchableHighlight style={{width: '48%'}}>
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
