import React from 'react'
import {View, ScrollView, FlatList, TouchableHighlight} from 'react-native'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

import {Card, Name, Content, Container, MatchTag, GradientTag, BackButton} from '../components/Shared'
import {Match} from '../model'
import {FONT_WEIGHT_STYLE} from '../theme'
import {getImages} from '../services/imageService'

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

const FullInfo = styled.View`
    width: 100%;
    padding-left: 10px;
    margin-top: 10px;
`

interface Props {
    profile: Match
    isOther?: boolean
}

export const UserProfile: React.FC<Props> = ({profile, isOther}) => {
    const [bgHeight, setBgHeight] = React.useState(600)
    const defaultPhotos = [
        'https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/78100273_1015938412101140_7757207945896525824_n.jpg?_nc_cat=102&_nc_ohc=rq9dC1KdEokAQnTHUuOihyYBdvvRsBP4zPH2K-LtaK6C9dHy_uTaaLEFg&_nc_ht=scontent.fsin9-1.fna&oh=1cec82d407b522c1133ba5fbd29c5ae1&oe=5E79D19D',
        'https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/69452156_944187999276182_1287500374931931136_n.jpg?_nc_cat=106&_nc_ohc=2N_jMNq4lX4AQkFlCatSY-lF5ESyu5n_SkVuox7vdi9wOYLvUyvgti_jw&_nc_ht=scontent.fsin9-2.fna&oh=d8629118db84f0d98a03fa02e4378d49&oe=5E65B90E',
        'https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/73472736_977051612656487_99310183733264384_n.jpg?_nc_cat=105&_nc_ohc=tZTwEujPZw4AQnk-RH62QE9-iGIudFF3Pc-CMfVMRiSFPO_1wzBX5jC4g&_nc_ht=scontent.fsin9-1.fna&oh=497e2b49e5bb3bdf9a280f53027e2017&oe=5E67A61C',
        'https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/29103652_1864608363609128_907581208743903232_o.jpg?_nc_cat=106&_nc_ohc=6BOf1Zo4pQ4AQmrKSU6dOjIj-GJDhq035U85z12CDQIHkOa58_SgSeYaQ&_nc_ht=scontent.fsin9-2.fna&oh=bac1f4e89045f1c46768309674ae184f&oe=5E7C3418',
    ]
    const [photos, setPhotos] = React.useState(defaultPhotos)

    let scrollView: ScrollView | null = null
    const {avatar, name, age, bio, percent, fullInfo} = profile
    React.useEffect(() => {
        if (scrollView) {
            scrollView.scrollTo({x: 0, y: 0, animated: false})
        }

        if (isOther) {
            getImages(profile.name).then(images => setPhotos(images))
        } else {
            setPhotos(defaultPhotos)
        }
    }, [profile])
    return (
        <ScrollView
            ref={view => {
                scrollView = view
            }}
            style={{display: 'flex'}}
            nestedScrollEnabled={false}>
            {isOther && <BackButton />}

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
                        <Name>
                            {name} ({age} tuổi)
                        </Name>
                        <Content>{bio}</Content>
                        {fullInfo && (
                            <FullInfo>
                                {fullInfo.blood.length > 0 && (
                                    <Content>
                                        <Icon name="ios-water" /> Nhóm máu: {fullInfo.blood}
                                    </Content>
                                )}
                                {fullInfo.birthPlace.length > 0 && (
                                    <Content>
                                        <Icon name="ios-planet" /> Nguyên quán: {fullInfo.birthPlace}
                                    </Content>
                                )}
                                <Content>
                                    <Icon name="ios-woman" /> Chiều cao: {fullInfo.height}
                                </Content>
                                <Content>
                                    <Icon name="ios-heart" /> Số đo 3 vòng: {fullInfo.threeSizes}
                                </Content>
                            </FullInfo>
                        )}
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
