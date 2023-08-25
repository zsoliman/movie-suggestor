import { useState, useEffect } from "react"

const Tile = ({ result }) => {

    const [suggestionSearch, setSuggestionSearch] = useState('')

    const findMyMovie = () => {
        setSuggestionSearch(result.original_title)
        // console.log(suggestionSearch)
    }

    useEffect(() => {
        console.log(suggestionSearch)
    }, [suggestionSearch])

    return (
        <div className="tile">
            <h3 className="select" onClick={findMyMovie}>{result.original_title}</h3>

        </div>
    )
}

export default Tile;