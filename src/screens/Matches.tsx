import React from 'react'
import {FlatList} from 'react-native'

import {Container, Header} from '../components/Shared'
import {MatchCard} from '../components/MatchCard'
import {getAllMatches} from '../services/matchService'
import {NavigationInjectedProps} from 'react-navigation'

export const Matches: React.FC<NavigationInjectedProps> = ({navigation}) => {
    const matches = getAllMatches()

    return (
        <Container>
            <Header>Matches</Header>

            <FlatList
                numColumns={2}
                data={matches}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={item => item.avatar}
                renderItem={({item}) => (
                    <MatchCard
                        key={item.avatar}
                        onSelect={() => navigation?.navigate('Profile', {match: item})}
                        match={item}
                    />
                )}
            />
        </Container>
    )
}
