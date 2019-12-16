import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'
import {TouchableHighlight} from 'react-native'

import {Match} from '../model'
import {FONT_WEIGHT_STYLE, GRAY, PRIMARY, SECONDARY} from '../theme'

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
`

const MatchPercent = styled(LinearGradient)`
    border-radius: 20;
    height: 30;
    width: 130;
    justify-content: center;
    align-items: center;
    margin: -15px auto;
`
const MatchText = styled.Text`
    color: white;
    font-family: ${FONT_WEIGHT_STYLE[800]};

    font-size: 14px;
    line-height: 18px;
`

const Controls = styled.View``

export const MatchFullCard: React.FC<{match: Match}> = ({match: {avatar, name, bio, percent}}) => (
    <CardContainer>
        <Avatar source={{uri: avatar}}></Avatar>

        <MatchPercent useAngle angle={343.4} colors={[SECONDARY, PRIMARY]}>
            <MatchText>
                <Icon name="ios-heart" color="white" /> {percent}% Match!
            </MatchText>
        </MatchPercent>

        <UserInfo>
            <Name>{name}</Name>
            <Bio>{bio}</Bio>
        </UserInfo>
    </CardContainer>
)
