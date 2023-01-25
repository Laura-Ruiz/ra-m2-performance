import React, { useContext, useMemo } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { sortedData, columns, currentPage, itemsPerPage } = state
  
 
  const memoizedStartIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage])
  const memoizedEndIndex =  useMemo(() => memoizedStartIndex + itemsPerPage, [itemsPerPage, memoizedStartIndex])
 

    return (
    <tbody>
      {sortedData.slice(memoizedStartIndex, memoizedEndIndex).map((d) => (
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}

    </tbody>
  )
}

export default TableBody

