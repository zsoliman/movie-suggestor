import Tile from "./Tile";

const Results = ({ results }) => {
    return (
        <div className="results">
            <h1>Pick a Movie:</h1>

            {results.results?.map((result) => {
                return (
                    <Tile
                        key={result.id}
                        result={result}
                    />
                )
            })}

        </div>
    )
}

export default Results;