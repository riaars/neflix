import React, { useEffect, useState } from 'react'
import instance from './axios'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    //fetch the conntent of movies when it's reload
    async function fetchData() {
      const request = await instance.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.table(movies)
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img src={base_url + movie.backdrop_path} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row
