import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Character } from '../../interfaces';
import { DataCharacters } from '../../interfaces/characters';



export const rickmApi=createApi({
    reducerPath:'rickmApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://rickandmortyapi.com/api'
    }),
    endpoints:(builder)=>({
        getAllCharacters:builder.query< DataCharacters, void>({
            query:()=>'/character'
        })
    })
})

export const {useGetAllCharactersQuery}=rickmApi