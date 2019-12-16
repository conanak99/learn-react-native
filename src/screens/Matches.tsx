import React from 'react'
import {FlatList} from 'react-native'
import moment from 'moment'

import {Match} from '../model'
import {Container, Header} from '../components/Shared'
import {MatchCard} from '../components/MatchCard'

export const Matches = () => {
    const matches: Match[] = [
        {
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            name: 'First match a little',
            isActive: true,
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-world.png',
            name: 'Second Match',
            isActive: false,
            lastActive: moment().add(-4, 'hours'),
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lun.png',
            name: 'Third Match',
            isActive: false,
            lastActive: moment().add(-4, 'hours'),
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lunar.png',
            name: 'Last Match',
            isActive: true,
            lastActive: moment().add(-4, 'hours'),
        },
    ]

    return (
        <Container>
            <Header>Matches</Header>

            <FlatList
                numColumns={2}
                data={matches}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={item => item.avatar}
                renderItem={({item}) => <MatchCard key={item.avatar} match={item} />}
            />
        </Container>
    )
}
