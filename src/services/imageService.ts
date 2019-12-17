import axios from 'axios'

import env from '../config'

export const getImages = async (name: string): Promise<string[]> => {
    const url = `https://bingsearch-codedao.cognitiveservices.azure.com/bing/v7.0/images/search?q="${name}"&count=10&safeSearch=Moderate&mkt=en-US&imageType=Photo&aspect=tall`
    const response = await axios(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': env.BING_API_KEY,
        },
    })

    return response.data.value.map((c: {thumbnailUrl: string; contentUrl: string}) => c.thumbnailUrl)
}
