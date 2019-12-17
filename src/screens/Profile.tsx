import React from 'react'
import styled from 'styled-components/native'

import {View, Text, ScrollView, FlatList, SafeAreaView} from 'react-native'
import {getAllMatches} from '../services/matchService'
import {Card, Name, Content, Container} from '../components/Shared'

const Avatar = styled.Image`
    width: 100%;
    aspect-ratio: 0.9;
`

const UserContainer = styled.View`
    position: absolute;
    top: -25px;
    width: 100%;
    padding: 0 20px;
`

const UserInfo = styled(Card)`
    padding: 10px 10px 15px;
    text-align: center;
    align-items: center;
`

const PhotoContainer = styled(Card)`
    margin-top: 20px;
    padding: 15px 20px 0;
`

const Photo = styled.Image`
    width: 48%;
    border-radius: 15px;
    aspect-ratio: 0.6667;
    margin-bottom: 15px;
`

export const Profile: React.FC = () => {
    const matches = getAllMatches()
    const user = matches[0]

    const {avatar, name, bio} = user
    const photos = [
        'https://source.unsplash.com/random/400x600',
        'https://source.unsplash.com/random/401x600',
        'https://source.unsplash.com/random/402x600',
        'https://source.unsplash.com/random/403x600',
    ]

    return (
        <ScrollView style={{display: 'flex'}}>
            <Avatar source={{uri: avatar}} />

            <View style={{position: 'relative', zIndex: 2}}>
                <UserContainer>
                    <UserInfo>
                        <Name>{name}</Name>
                        <Content>{bio}</Content>
                    </UserInfo>

                    <PhotoContainer>
                        <Name style={{marginBottom: 10}}>Photos</Name>

                        <FlatList
                            data={photos}
                            numColumns={2}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            scrollEnabled={false}
                            keyExtractor={(_, index) => String(index)}
                            renderItem={({item}) => <Photo source={{uri: item}} />}
                        />
                    </PhotoContainer>
                </UserContainer>
            </View>
            <Container style={{height: 600}} />
        </ScrollView>
    )
}
