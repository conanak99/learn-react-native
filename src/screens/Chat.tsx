import React from 'react'
import {FlatList} from 'react-native'

import {Container, Header} from '../components/Shared'
import {Message} from '../model'
import {ChatMessage} from '../components/ChatMessage'

export const Chat = () => {
    const messages: Message[] = [
        {
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            name: 'Denise Burton',
            message: 'That’s awesome man. How about a date ton ...',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-world.png',
            name: 'Maria Long',
            message: 'That sounds awesome!!!',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lun.png',
            name: 'Deborah Palmer',
            message: 'Hey, would you mind going out tomorrow?',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lunar.png',
            name: 'Crystal Castillo',
            message: 'How do you know about me?',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/abott@adorable2.png',
            name: 'Denise Burton',
            message: 'That’s awesome man. How about a date ton ...',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-world2.png',
            name: 'Maria Long',
            message: 'That sounds awesome!!!',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lun2.png',
            name: 'Deborah Palmer',
            message: 'Hey, would you mind going out tomorrow?',
        },
        {
            avatar: 'https://api.adorable.io/avatars/285/hello-lunar2.png',
            name: 'Crystal Castillo',
            message: 'How do you know about me?',
        },
    ]

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
