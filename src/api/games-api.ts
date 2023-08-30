import { IGame } from "../types/api-types"
import { GAMES_ENDPOINT } from "./const"
import { getRequest } from "./http-methods"

export const getGames =async (): Promise<IGame[]> => {
    const headers = {
        'X-RapidAPI-Key': 'f871305367mshba6133e23418503p1dda59jsnf493da4598ed',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
    const res = await getRequest(GAMES_ENDPOINT, {}, headers)

    if(res.status === 200 ){
            return res.body as unknown as IGame[]
    }
    throw new Error(`Error ${res.status} with message: ${res.body}`)
}