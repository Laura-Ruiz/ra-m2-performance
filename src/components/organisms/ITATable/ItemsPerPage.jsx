import React, {useContext} from 'react'
// eslint-disable-next-line import/named
import {SelectOption, Select}  from '../../atoms'
import { TableContext } from './store/context'
import { SpanStyled } from './styles'


const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ]

export default function ItemsPerPage() {
    const { state, dispatch } = useContext(TableContext)
    const { itemsPerPage } = state
  
    const handleChange = (event) => {
      const { value } = event.target
      dispatch({ type: 'SET_ITEMSPERPAGE', payload: Number(value) })
    }

  return (
    <div style={{display:"flex", justifyContent:"flex-end"}}>
          <SpanStyled>Mostar</SpanStyled>
          <Select
            id="select"
            style={{ margin: '0.5rem' }}
            name="select"
            onChange={handleChange}
            value={itemsPerPage}
          >
            {options.map((option) => (
              <SelectOption value={option.value} key={option.value}>
                {option.label}
              </SelectOption>
            ))}
          </Select>
    </div>  
    
)}
