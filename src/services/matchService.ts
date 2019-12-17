import moment from 'moment'
import {getRandomElement, shuffle} from './helper'
import json from './idols_translated.json'
import {Match, Idol, Message} from '../model'

const idols = shuffle(json as Idol[])

const buildBio = (idol: Idol) => {
    const pronounce = ['Em', 'Em', 'Mình', 'Tôi']
    const hooks = [
        'Rất vui được làm quen ❤️',
        'Ế qua nên đi tìm người nuôi 🐱',
        'Nuôi đi, hứa sẽ ngoan ❤️',
        'Cần tìm người tâm sự.😘',
        'Tìm các anh giai vui vẻ tốt tính 👨',
        'Cô đơn nên tạo acc cho vui...',
    ]

    let bio = ''

    if (idol.hobby.length > 0) {
        bio += `${getRandomElement(pronounce)} thích ${idol.hobby}. `
    }

    bio += getRandomElement(hooks)

    return bio
}

export const getAllMatches = (): Match[] => {
    return idols.map(idol => {
        const isActive = idol.id % 2 === 1
        const now = moment()
        const birthday = moment(idol.birthday, 'DD/MM/YY')
        const age = now.diff(birthday, 'y')

        const match: Match = {
            avatar: idol.avatar,
            name: idol.name,
            age,
            isActive,
            bio: buildBio(idol),
            percent: idol.id % 100,
            fullInfo: idol,
        }

        if (!match.isActive) {
            match.lastActive = moment().add(-(idol.id % 5), 'hours')
        }

        return match
    })
}

export const getAllMessages = (): Message[] => {
    const templates = [
        'Anh iu ngủ chưa ❤️',
        'Hello, quen biết ko mà chat',
        'Nhớ anh nhìu…😘',
        'Mai mấy giờ gặp nhau được anh nhỉ',
        'Ahihi đồ ngok ❤️',
        'Không có gì, em không sao!',
        'Em ổn.',
        'Cút!!!',
        'Chào anh,',
    ]

    return shuffle(idols)
        .slice(10, 20)
        .map(({avatar, name}) => ({
            avatar,
            name,
            message: getRandomElement(templates),
        }))
}

export const getUserProfile = (): Match => ({
    name: 'Harry Phạm',
    age: 18,
    percent: 0,
    isActive: true,
    bio: 'Blogger tại toidicodedao.com kiêm Youtuber',
    avatar:
        'https://scontent.fsin5-1.fna.fbcdn.net/v/t1.0-9/55833081_2571355759601048_4881389189859377152_o.jpg?_nc_cat=108&_nc_ohc=qBahTFBNwj8AQm10Bg7-vqixQhA0X2JKDQ2uamwAM--jSBZlrHJZ1Ep5Q&_nc_ht=scontent.fsin5-1.fna&oh=819694fc3a347ea80c56d6e2128e6344&oe=5E762314',
})
