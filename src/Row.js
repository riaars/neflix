import axios from 'axios'
import React, { useEffect, useState } from 'react'
import instance from './axios'

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

  return (
    <div>
      <h2>{title}</h2>
      <div>container</div>
    </div>
  )
}

export default Row
