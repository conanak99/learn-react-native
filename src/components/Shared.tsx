import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'
import {BACKGROUND_COLOR_END, BACKGROUND_COLOR_START, FONT_WEIGHT_STYLE} from '../theme'

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

// export const Container = styled.View`
//     background-color: ${BACKGROUND_COLOR};
//     display: flex;
//     height: 100%;
// `
