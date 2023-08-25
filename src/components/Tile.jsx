const Tile = ({ result }) => {

    const findMyMovie = () => {
        console.log(result.original_title)
    }

    return (
        <div className="tile">
            <h3 className="select" onClick={findMyMovie}>{result.original_title}</h3>

        </div>
    )
}

export default Tile;