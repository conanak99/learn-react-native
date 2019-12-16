import moment from 'moment'
import {Match} from '../model'

export const getAllMatches = (): Match[] => [
    {
        avatar: 'https://api.adorable.io/avatars/285/abott@adorable.png',
        name: 'First match a little',
        bio: 'Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.',
        isActive: true,
        percent: 80,
    },
    {
        avatar: 'https://api.adorable.io/avatars/285/hello-world.png',
        name: 'Second Match',
        bio: 'I Live my life like its the last day. Traveller, Explorer, Photographer.',
        isActive: false,
        lastActive: moment().add(-4, 'hours'),
        percent: 70,
    },
    {
        avatar: 'https://api.adorable.io/avatars/285/hello-lun.png',
        name: 'Third Match',
        isActive: false,
        lastActive: moment().add(-4, 'hours'),
        percent: 70,
    },
    {
        avatar: 'https://api.adorable.io/avatars/285/hello-lunar.png',
        name: 'Last Match',
        isActive: true,
        lastActive: moment().add(-4, 'hours'),
        percent: 75,
    },
]
