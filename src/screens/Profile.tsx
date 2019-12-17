import React from 'react'
import styled from 'styled-components/native'

import {View, Text} from 'react-native'
import {getAllMatches} from '../services/matchService'

export const Profile: React.FC = () => {
    const matches = getAllMatches()
    const user = matches[0]

    const {avatar, name, bio} = user

    return (
        <View>
            <Avatar source={{uri: avatar}} />
        </View>
    )
}

const Avatar = styled.Image`
    width: 100%;
    aspect-ratio: 0.9;
`
