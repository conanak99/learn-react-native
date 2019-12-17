import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE, GRAY} from '../theme'
import {GradientTag, Button, GradientIcon} from './Shared'

interface Props {
    match: Match
    onAccepted: (match: Match) => void
    onRejected: (match: Match) => void
}

export const MatchFullCard: React.FC<Props> = ({match, onAccepted, onRejected}) => (
    <CardContainer>
        <Avatar source={{uri: match.avatar}}></Avatar>

        <MatchPercent>
            <MatchText>
                <Icon name="ios-heart" color="white" /> {match.percent}% Match!
            </MatchText>
        </MatchPercent>

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

const CardContainer = styled.View`
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
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
    font-size: 12px;
    line-height: 15px;
    font-family: ${FONT_WEIGHT_STYLE[300]};
    color: ${GRAY};
    height: 32px;
`

const MatchPercent = styled(GradientTag)`
    height: 30;
    width: 130;
    margin: -15px auto;
`
const MatchText = styled.Text`
    color: white;
    font-family: ${FONT_WEIGHT_STYLE[800]};
    font-size: 14px;
    line-height: 18px;
`

const Controls = styled.View`
    margin: 0 auto;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px 0 10px;
`
