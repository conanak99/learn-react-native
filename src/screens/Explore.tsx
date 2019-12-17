import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'

import {Container} from '../components/Shared'
import {MatchFullCard} from '../components/MatchFullCard'
import {getAllMatches} from '../services/matchService'

const CardBehindLayer = styled.View`
    width: 90%;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    height: 20;
    margin: -9px auto;
    z-index: -1;
    border-radius: 15px;
`

export const Explore = () => {
    const matches = getAllMatches()
    const [index, setIndex] = React.useState(0)

    const nextMatch = () => {
        setIndex((index + 1) % matches.length)
    }

    return (
        <Container>
            <MatchFullCard match={matches[index]} onAccepted={nextMatch} onRejected={nextMatch} />

            <CardBehindLayer />
        </Container>
    )
}
