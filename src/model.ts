import moment from 'moment'

export interface Idol {
    id: number
    avatar: string
    name: string
    birthday: string
    blood: string
    birthPlace: string
    height: string
    threeSizes: string
    hobby: string
}

export interface Match {
    avatar: string
    name: string
    bio?: string
    percent: number
    age: number
    isActive: boolean
    lastActive?: moment.Moment
    fullInfo?: Idol
}

export interface Message {
    avatar: string
    name: string
    message: string
}
