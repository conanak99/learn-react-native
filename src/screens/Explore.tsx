import React from 'react'
import {NavigationInjectedProps} from 'react-navigation'
import styled from 'styled-components/native'

import {Container, Card} from '../components/Shared'
import {MatchFullCard} from '../components/MatchFullCard'
import {getAllMatches} from '../services/matchService'

const CardBehindLayer = styled(Card)`
    width: 90%;
    height: 20;
    margin: -9px auto;
    z-index: -1;
`

export const Explore: React.FC<NavigationInjectedProps> = ({navigation}) => {
    const matches = getAllMatches()
    const [index, setIndex] = React.useState(0)

    const nextMatch = () => {
        setIndex((index + 1) % matches.length)
    }

    return (
        <Container>
            <MatchFullCard
                match={matches[index]}
                onAvatarClicked={match => navigation.navigate('Profile', {match})}
                onAccepted={nextMatch}
                onRejected={nextMatch}
            />

            <CardBehindLayer />
        </Container>
    )
}
