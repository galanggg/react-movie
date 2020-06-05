import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
//extending style, variabel Button dibungkus
const CancelButton = styled(Button)`
  color: indigo;
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`
type Props = {
  search: any
}

const Search = ({ search }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchInputChange = (e: any) => {
    setSearchValue(e.target.value)
  }

  const resetInputField = () => {
    setSearchValue('')
  }

  const callSearchFunction = (e: any) => {
    e.preventDefault()
    search(searchValue)
    resetInputField()
  }

  return (
    <div>
      <form className="search">
        <Input
          value={searchValue}
          onChange={handleSearchInputChange}
          type="text"
        />
      </form>
      <Button onClick={callSearchFunction} type="submit">
        Search
      </Button>
      <CancelButton>Filter</CancelButton>
    </div>
  )
}

export default Search
