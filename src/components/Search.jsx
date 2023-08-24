import { useState, useEffect } from 'react';

const Search = ({ searchTerm, setSearchTerm, results, setResults }) => {

    const baseURL = 'https://api.themoviedb.org/3'
    const API_key = '6d2d21f7549a1e994baf9c19bdbb84e4'
    let pageNum = 1

    const searchMovies = async (searchTerm) => {
        // searches movies using searchTerm and gets page number pageNum
        const req = await fetch(
            `${baseURL}/search/multi?api_key=${API_key}&language=en-US&query=${encodeURI(
                searchTerm)}&page=${pageNum}&include_adult=false`
        );
        const res = await req.json();
        setResults(res)
        // console.log('results:', results);
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

    const nextPage = (e) => {
        if (pageNum < results.total_pages) {
            e.preventDefault()
            pageNum++
            console.log('next page')
            console.log(pageNum)
        }
    }

    return (
        <div>
            <form onChange={handleSearch}>
                <input
                    className='search-bar'
                    placeholder="Search"
                    type='text'
                />
                <p>page: {`${pageNum}`}</p>
                <button>previous</button>
                <button onClick={nextPage}>next</button>
            </form>
        </div>
    )
}

export default Search;