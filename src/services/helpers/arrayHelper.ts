export const getRandomInt = (min: number, max: number) => {
    return min + Math.floor(Math.random() * Math.floor(max - min + 1))
}

export function getRandomElement<T>(input: T[]): T {
    return input[getRandomInt(0, input.length - 1)]
}

export function shuffle<T>(input: T[]): T[] {
    return input.sort(() => Math.random() - 0.5)
}
