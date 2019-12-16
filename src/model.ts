import moment from 'moment'

export interface Match {
    avatar: string
    name: string
    isActive: boolean
    lastActive?: moment.Moment
}

export interface Message {
    avatar: string
    name: string
    message: string
}
