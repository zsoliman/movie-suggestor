import Nav from './Nav.jsx'
import Title from './Title.jsx'
import Search from './Search.jsx'
import Results from './Results.jsx'

import { useState, useEffect } from 'react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState('')

    return (
        <div>
            <Nav />
            <Title />
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                results={results}
                setResults={setResults}
            />
            <Results
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                results={results}
                setResults={setResults}
            />
        </div>
    )
}

export default Home;