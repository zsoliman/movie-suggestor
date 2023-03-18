import Tile from "./Tile";

const Results = ({ searchTerm, setSearchTerm, results, setResults }) => {
    return (
        <div className="results">
            <h1>Results:</h1>

            {results.results.map((result) => {
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