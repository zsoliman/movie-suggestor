import Nav from './Nav.jsx'
import Title from './Title.jsx'
import Search from './Search.jsx'
import SearchResults from './SearchResults.jsx'

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
            <SearchResults
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                results={results}
                setResults={setResults}
            />
        </div>
    )
}

export default Home;