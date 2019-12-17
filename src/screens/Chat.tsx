import React from 'react'
import {FlatList} from 'react-native'

import {Container, Header} from '../components/Shared'
import {ChatMessage} from '../components/ChatMessage'
import {getAllMessages} from '../services/matchService'

export const Chat = () => {
    const messages = getAllMessages()

    return (
        <Container>
            <Header>Messages</Header>

            <FlatList
                data={messages}
                keyExtractor={item => item.avatar}
                renderItem={({item}) => <ChatMessage message={item} />}
            />
        </Container>
    )
}
