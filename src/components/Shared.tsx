import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'
import {BACKGROUND_COLOR_END, BACKGROUND_COLOR_START, FONT_WEIGHT_STYLE, SECONDARY, PRIMARY} from '../theme'
import {IconProps} from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import MaskedView from '@react-native-community/masked-view'

export const Container: React.FC = ({children}) => (
    <LinearGradient
        useAngle
        angle={115}
        colors={[BACKGROUND_COLOR_START, BACKGROUND_COLOR_END]}
        style={{flex: 1, paddingTop: 40, paddingHorizontal: 20, paddingRight: 18}}>
        {children}
    </LinearGradient>
)

export const Header = styled.Text`
    font-family: ${FONT_WEIGHT_STYLE[900]};
    font-size: 22px;
    line-height: 28px;
    padding-bottom: 16px;
`

const Gradient = styled(LinearGradient)`
    border-radius: 20;
    justify-content: center;
    align-items: center;
`
// Allow style to be passed by `styled-component`
export const GradientTag: React.FC<{style?: object}> = ({children, style}) => (
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
