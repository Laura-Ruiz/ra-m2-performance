import React, { useContext } from 'react'
import { Icon } from '../atoms'
import { TableContext } from '../organisms/ITATable/store/context'

export default function IconsTable({ column }) {
  const { state } = useContext(TableContext)
  const { sortColumn, sortOrder } = state

  return (
    sortColumn === column &&
    (sortOrder === 'asc' ? (
      <Icon fontSize= '15px' margin= '0 0 0 5px' icon="arrow_upward" />
    ) : (
      <Icon fontSize= '15px' margin= '0 0 0 5px' icon="arrow_downward" />
    ))
  )
}
