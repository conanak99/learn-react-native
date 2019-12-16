import moment from 'moment'

export interface Match {
    imageUrl: string
    name: string
    isActive: boolean
    lastActive?: moment.Moment
}
