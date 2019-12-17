import {useState, useEffect} from 'react'

export const usePromise = <T>(promiseCallback: () => Promise<T>, trigger = true) => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (trigger) {
            promiseCallback()
                .then(result => {
                    setLoading(false)
                    setData(result)
                })
                .catch(err => {
                    setError(err)
                    console.error(err)
                })
        }
    }, [])

    return {data, loading, error}
}
