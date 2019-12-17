import axios from 'axios'

import env from '../config'

export const getImages = async (name: string, count = 4): Promise<string[]> => {
    const url = `https://bingsearch-codedao.cognitiveservices.azure.com/bing/v7.0/images`
    const response = await axios(url, {
        headers: {
            params: {
                name: `"${name}"`,
                count,
                safeSearch: 'Moderate',
                mkt: 'en-US',
                imageType: 'Photo',
                aspect: 'tall',
            },
            'Ocp-Apim-Subscription-Key': env.BING_API_KEY,
        },
    })

    return response.data.value.map((c: {thumbnailUrl: string; contentUrl: string}) => c.thumbnailUrl)
}
