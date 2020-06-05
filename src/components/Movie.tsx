import React from 'react'

import styled from 'styled-components'

const Movies = styled.div`
  padding: 5px 25px 10px 25px;
  max-width: 25%;
`

type Props = {
  movie: any
  key: string
}

const DEFAULT_PLACEHOLDER_IMAGE =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSh6mYmZwtcB_D9a1pCpyyG49192TSSDKCparM2JLKZoLps53bl&usqp=CAU'

const Movie: React.FC<Props> = ({ movie }) => {
  const poster =
    movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
  return (
    <Movies>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`title dari film : ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>{movie.Year}</p>
    </Movies>
  )
}

export default Movie
