
export interface Character{
    id: string
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location:Location
    image: string
    episode: []
    url: string
    created: string
}

interface Origin{
    name:string
    url:string
}
interface Location{
    name:string
    url:string
}

export interface DataCharacters{
    info:Info
    results:Character[]
}

interface Info{
    count:number
    pages:number
    next:string
    prev:string
}