import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'
import {View, ScrollView, FlatList, TouchableHighlight} from 'react-native'

import {Card, Name, Content, Container, MatchTag, GradientTag} from '../components/Shared'
import {Match} from '../model'
import {FONT_WEIGHT_STYLE} from '../theme'

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

const Controls = styled.View`
    margin: 0 auto;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const GradientButton = styled(GradientTag)`
    padding: 15px 20px;
    border-radius: 55px;
    margin-left: 20px;
    height: 55px;
`
const ButtonText = styled.Text`
    color: white;
    font-family: ${FONT_WEIGHT_STYLE[400]};
`

interface Props {
    profile: Match
    isOther?: boolean
}

export const UserProfile: React.FC<Props> = ({profile, isOther}) => {
    let scrollView: ScrollView | null = null

    React.useEffect(() => {
        if (scrollView) {
            scrollView.scrollTo({x: 0, y: 0, animated: false})
        }
    }, [profile, scrollView])

    const {avatar, name, bio, percent} = profile
    const photos = [
        'https://source.unsplash.com/random/400x600',
        'https://source.unsplash.com/random/401x600',
        'https://source.unsplash.com/random/402x600',
        'https://source.unsplash.com/random/403x600',
    ]

    const [bgHeight, setBgHeight] = React.useState(600)

    return (
        <ScrollView
            ref={view => {
                scrollView = view
            }}
            style={{display: 'flex'}}
            nestedScrollEnabled={false}>
            <Avatar source={{uri: avatar}} />

            <View style={{position: 'relative', zIndex: 2}}>
                <UserContainer
                    onLayout={e => {
                        const height = e.nativeEvent.layout.height
                        setBgHeight(height - 5)
                    }}>
                    {isOther && <MatchTag percent={percent} />}
                    <UserInfo>
                        {isOther && <View style={{height: 10}} />}
                        <Name>{name}</Name>
                        <Content>{bio}</Content>
                    </UserInfo>

                    {isOther && (
                        <Controls>
                            <TouchableHighlight>
                                <GradientButton style={{width: 55}}>
                                    <Icon name="ios-more" color="white" size={15} />
                                </GradientButton>
                            </TouchableHighlight>
                            <TouchableHighlight>
                                <GradientButton>
                                    <ButtonText>
                                        <Icon name="ios-chatboxes" color="white" size={15} /> Start Chatting
                                    </ButtonText>
                                </GradientButton>
                            </TouchableHighlight>
                        </Controls>
                    )}

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
            <Container style={{height: bgHeight}} />
        </ScrollView>
    )
}
