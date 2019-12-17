import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'
import {TouchableHighlight} from 'react-native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE, PRIMARY} from '../theme'
import {Card} from './Shared'

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

interface Props {
    match: Match
    onSelect: (match: Match) => void
}

export const MatchCard: React.FC<Props> = ({match: {avatar, age, name, isActive, lastActive}, onSelect}) => (
    <TouchableHighlight onPress={onSelect} style={{width: '48%'}} underlayColor={PRIMARY}>
        <CardContainer>
            <Avatar source={{uri: avatar}} />

            <UserInfo>
                <Name>
                    {name} ({age})
                </Name>

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
