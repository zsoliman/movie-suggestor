const Tile = ({ result }) => {

    const findMyMovie = () => {
        console.log(result.original_title)
    }

    return (
        <div>
            <h3 onClick={findMyMovie}>{result.original_title}</h3>

        </div>
    )
}

export default Tile;