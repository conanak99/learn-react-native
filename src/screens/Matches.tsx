import React from 'react'
import {ScrollView} from 'react-native'
import moment from 'moment'
import styled from 'styled-components/native'

import {Container, Header} from '../components/Shared'
import {Match} from '../model'
import {MatchCard} from '../components/MatchCard'

const MatchesContainer = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Matches = () => {
    const matches: Match[] = [
        {
            imageUrl: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            name: 'First match a little',
            isActive: true,
        },
        {
            imageUrl: 'https://api.adorable.io/avatars/285/hello-world.png',
            name: 'Second Match',
            isActive: false,
            lastActive: moment().add(-4, 'hours'),
        },
        {
            imageUrl: 'https://api.adorable.io/avatars/285/hello-lun.png',
            name: 'Third Match',
            isActive: false,
            lastActive: moment().add(-4, 'hours'),
        },
        {
            imageUrl: 'https://api.adorable.io/avatars/285/hello-lunar.png',
            name: 'Last Match',
            isActive: true,
            lastActive: moment().add(-4, 'hours'),
        },
    ]

    return (
        <Container>
            <Header>Matches</Header>

            <ScrollView>
                <MatchesContainer>
                    {matches.map(match => (
                        <MatchCard key={match.imageUrl} match={match} />
                    ))}
                </MatchesContainer>
            </ScrollView>
        </Container>
    )
}
