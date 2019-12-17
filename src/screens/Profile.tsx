import React from 'react'
import {NavigationInjectedProps} from 'react-navigation'

import {getUserProfile} from '../services/matchService'
import {UserProfile} from '../components/UserProfile'
import {Match} from '../model'

interface Params {
    match?: Match
}

export const Profile: React.FC<NavigationInjectedProps<Params>> = ({navigation}) => {
    const params = navigation.state.params
    let profile = params && params.match
    const isOther = !!profile

    if (!profile) {
        profile = getUserProfile()
    }

    return <UserProfile profile={profile} isOther={isOther} />
}
