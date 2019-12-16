import React from 'react'
import {View, Text} from 'react-native'

import {Container} from '../components/Shared'
import {MatchFullCard} from '../components/MatchFullCard'
import {getAllMatches} from '../services/matchService'

export const Explore = () => {
    const matches = getAllMatches()

    return (
        <Container>
            <MatchFullCard match={matches[0]} />
        </Container>
    )
}
