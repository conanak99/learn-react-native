import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE, GRAY} from '../theme'
import {Button, GradientIcon, Card, MatchTag} from './Shared'
import {TouchableHighlight} from 'react-native'

const CardContainer = styled(Card)`
    width: 100%;
    padding: 15px;
`

const Avatar = styled.Image`
    border-radius: 15px;
    width: 100%;
    aspect-ratio: 1;
`

const UserInfo = styled.View`
    margin-top: 25;
    text-align: center;
    align-items: center;
`

const Name = styled.Text`
    font-size: 30px;
    line-height: 40px;
    font-family: ${FONT_WEIGHT_STYLE[900]};
`
const Bio = styled.Text`
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    font-family: ${FONT_WEIGHT_STYLE[300]};
    color: ${GRAY};
    height: 40px;
`

const Controls = styled.View`
    margin: 0 auto;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px 0 10px;
`

interface Props {
    match: Match
    onAvatarClicked: (match: Match) => void
    onAccepted: (match: Match) => void
    onRejected: (match: Match) => void
}

export const MatchFullCard: React.FC<Props> = ({match, onAvatarClicked, onAccepted, onRejected}) => (
    <CardContainer>
        <TouchableHighlight onPress={() => onAvatarClicked(match)}>
            <Avatar source={{uri: match.avatar}} />
        </TouchableHighlight>

        <MatchTag percent={match.percent} />

        <UserInfo>
            <Name>{match.name}</Name>
            <Bio>{match.bio}</Bio>
        </UserInfo>

        <Controls>
            <Button onPress={() => onAccepted(match)}>
                <GradientIcon style={{marginTop: 2}} name="ios-heart" size={35} />
            </Button>

            <Button onPress={() => onRejected(match)}>
                <Icon style={{marginTop: 5}} name="ios-close" size={50} />
            </Button>
        </Controls>
    </CardContainer>
)
