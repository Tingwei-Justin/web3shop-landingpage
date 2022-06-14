
export function parseAddressForShow(address: string) {
    return `${address.slice(0, 5)}...${address.slice(-4)}`
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


export const fetcher = (...args) => fetch(...args).then((res) => res.json())