import React from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { useDebounce } from "../../hooks/useDebounce"
import { changeSearchValue } from "../../redux/slices/filterSlice"

export const Search = () =>{
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchValue, setSearchValue] = useState(() => {
      const firstSearch = searchParams.get('search')

      return firstSearch ? firstSearch : ''
    })

    const debounceValue = useDebounce(searchValue, 500)
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch(changeSearchValue(debounceValue))
    }, [debounceValue, dispatch])
    

    const handleChange = (event) =>{
      setSearchValue(event.target.value)

      if (!event.target.value) return setSearchParams((prevParams =>{
        prevParams.delete('search')
        return prevParams
      }))

      return setSearchParams((prevParams => ({
        ...prevParams,
        search: event.target.value
      })))
    }

    return <input 
    value = {searchValue}
    onChange={(event) => handleChange(event)}
    placeholder="Поиск"
    className="form-control m-4"
     />
}