import { useState, useEffect } from 'react';

const Search = ({ searchTerm, setSearchTerm, results, setResults }) => {

    const baseURL = 'https://api.themoviedb.org/3'
    const API_key = '6d2d21f7549a1e994baf9c19bdbb84e4'


    const searchMovies = async (searchTerm, pageNum) => {

        // searches movies using searchTerm and gets page number pageNum
        const req = await fetch(
            `${baseURL}/search/movie?api_key=${API_key}&language=en-US&query=${encodeURI(
                searchTerm)}&page=${'1'}&include_adult=false`
        );
        const res = await req.json();
        setResults(res)
        console.log('results:', results);
    };

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
        // console.log('1', e.target.value)
        // console.log('2', searchTerm)
    }

    // searchMovies(searchTerm);

    useEffect(() => {
        searchMovies(searchTerm);
    }, [searchTerm])

    return (
        <div>
            <form onChange={handleSearch}>
                <input
                    className='search-bar'
                    placeholder="Search"
                    type='text'
                />
            </form>
        </div>
    )
}

export default Search;