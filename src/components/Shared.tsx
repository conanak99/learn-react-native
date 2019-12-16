import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styled from 'styled-components/native'
import {BACKGROUND_COLOR_END, BACKGROUND_COLOR_START} from '../theme'

export const Container: React.FC = ({children}) => (
    <LinearGradient
        useAngle
        angle={115}
        colors={[BACKGROUND_COLOR_START, BACKGROUND_COLOR_END]}
        style={{display: 'flex', height: '100%'}}>
        {children}
    </LinearGradient>
)

// export const Container = styled.View`
//     background-color: ${BACKGROUND_COLOR};
//     display: flex;
//     height: 100%;
// `
