// @ts-ignore
import {BING_API_KEY} from 'react-native-dotenv'

export interface Environment {
    BING_API_KEY: string
}

const env: Environment = {
    BING_API_KEY: BING_API_KEY,
}

export default env
