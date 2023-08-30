import { useEffect, useState } from "react"
import { IGame } from "../types/api-types"
import { getGames } from "../api/games-api"

export const useGames = ():[IGame[], React.Dispatch<React.SetStateAction<IGame[]>> ] => {
    const [games, setGames ] =useState<IGame[]>([])
    useEffect(() => {
        try {
            getGames()
                .then((response) => {
                    setGames(response)
                })
        } catch (error) {
            console.log(error);
        }

    }, [])

    return [games, setGames]
}