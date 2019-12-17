import React from 'react'
import {NavigationInjectedProps} from 'react-navigation'

import {getUserProfile} from '../services/matchService'
import {UserProfile} from '../components/UserProfile'
import {Match} from '../model'

interface Params {
    match?: Match
}

export const Profile: React.FC<NavigationInjectedProps<Params>> = ({navigation}) => {
    React.useEffect(() => {
        // Clear navigation param when navigate away
        const subscription = navigation.addListener('didBlur', () => {
            navigation.setParams({match: undefined})
        })

        return subscription.remove
    }, [navigation])

    let profile = navigation.getParam('match')
    const isOther = Boolean(profile)

    if (!profile) {
        profile = getUserProfile()
    }

    return <UserProfile profile={profile} isOther={isOther} />
}
