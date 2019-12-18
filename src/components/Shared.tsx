import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import styled from 'styled-components/native'
import {NavigationInjectedProps, withNavigation} from 'react-navigation'
import MaskedView from '@react-native-community/masked-view'
import LinearGradient from 'react-native-linear-gradient'
import {IconProps} from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'

import {BACKGROUND_COLOR_END, BACKGROUND_COLOR_START, FONT_WEIGHT_STYLE, SECONDARY, PRIMARY, GRAY} from '../theme'
export const Container: React.FC<{style?: StyleProp<ViewStyle>}> = ({children, style}) => (
    <LinearGradient
        useAngle
        angle={115}
        colors={[BACKGROUND_COLOR_START, BACKGROUND_COLOR_END]}
        style={{flex: 1, paddingTop: 40, paddingHorizontal: 20, paddingRight: 18, ...(style as object)}}>
        {children}
    </LinearGradient>
)

export const Header = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[900]};
    font-size: 22px;
    line-height: 28px;
    padding-bottom: 16px;
`

export const Card = styled.View`
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`

const Gradient = styled(LinearGradient)`
    border-radius: 20;
    justify-content: center;
    align-items: center;
`
// Allow style to be passed by `styled-component`
export const GradientTag: React.FC<{style?: StyleProp<ViewStyle>}> = ({children, style}) => (
    <Gradient useAngle style={style} angle={343.4} colors={[SECONDARY, PRIMARY]}>
        {children}
    </Gradient>
)

export const Button = styled.TouchableHighlight`
    background-color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(65, 11, 24, 0.1);
    width: 60;
    height: 60;
    border-radius: 30;
`

export const GradientIcon: React.FC<IconProps> = props => (
    <MaskedView maskElement={<Icon {...props} />}>
        <LinearGradient colors={[SECONDARY, PRIMARY]}>
            <Icon {...props} style={{opacity: 0}} />
        </LinearGradient>
    </MaskedView>
)

export const Name = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[700]};
    font-size: 14px;
    line-height: 25px;
`

export const Content = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[300]};
    font-size: 12px;
    line-height: 20px;
    color: ${GRAY};
`

const MatchPercent = styled(GradientTag)`
    height: 30;
    width: 130;
    margin: -15px auto;
    z-index: 2;
`
const MatchText = styled.Text`
    color: white;
    font-family: ${FONT_WEIGHT_STYLE[800]};
    font-size: 14px;
    line-height: 18px;
`
export const MatchTag: React.FC<{percent: number}> = ({percent}) => (
    <MatchPercent>
        <MatchText>
            <Icon name="ios-heart" color="white" /> {percent}% Match!
        </MatchText>
    </MatchPercent>
)

const BackButtonWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 30px;
    left: 10px;
    z-index: 2;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
`
const ShadowIcon = styled(Icon)`
    text-shadow: 2px 2px black;
`

const BackButtonComp: React.FC<NavigationInjectedProps> = ({navigation}) => (
    <BackButtonWrapper
        onPress={() => {
            navigation.goBack()
        }}>
        <ShadowIcon name="ios-arrow-back" color="white" size={40} />
    </BackButtonWrapper>
)

export const BackButton = withNavigation(BackButtonComp)
