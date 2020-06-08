import React from 'react'

import styled from 'styled-components'

const Movies = styled.div`
  display: grid;
  grid-template-columns: 200px 100px;
  grid-template-rows: 400px;
  grid-gap: 25px;
`

const Item = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
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
      <Item>
        <h2>{movie.Title}</h2>
        <img
          width="200"
          alt={`title dari film : ${movie.Title}`}
          src={poster}
        />
        <p>{movie.Year}</p>
      </Item>
    </Movies>
  )
}

export default Movie
