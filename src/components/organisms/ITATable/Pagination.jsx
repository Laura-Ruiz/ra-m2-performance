import React, { useCallback, useContext, useMemo } from 'react'
// eslint-disable-next-line import/named
import { Button, Icon } from '../../atoms'
import { TableContext } from './store/context'
import { SpanStyled } from './styles'

export default function Pagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, itemsPerPage } = state

 
 const memoizeTotalPages = useMemo(
    () => Math.ceil(state.data.length / itemsPerPage),
    [itemsPerPage, state.data.length]
  )

  const handlePreviousClick = useCallback(() => {
    if (currentPage > 1) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage - 1 })
    }
  },[currentPage, dispatch])

  const handleNextClick = useCallback(() => {
    if (currentPage < memoizeTotalPages) {
      dispatch({ type: 'SET_CURRENTPAGE', payload: currentPage + 1 })
    }
  },[currentPage, dispatch, memoizeTotalPages])

  return (
    <div style={{ display: 'flex' }}>
      <Button
        disabled={currentPage === 1}
        boxShadow="none"
        backgroundColor="transparent"
        onClick={() => handlePreviousClick()}
        cursor={currentPage !== 1 ? 'pointer' : undefined}
      >
        <Icon
          color={currentPage === 1 ? '#B5B2B2' : 'black'}
          icon="arrow_back_ios"
        />
      </Button>

      <SpanStyled>
        Página {currentPage} de {memoizeTotalPages}
      </SpanStyled>

      <Button
        disabled={currentPage === memoizeTotalPages}
        boxShadow="none"
        backgroundColor="transparent"
        onClick={() => handleNextClick()}
        cursor={currentPage !== memoizeTotalPages ? 'pointer' : undefined}
      >
        <Icon
          color={currentPage === memoizeTotalPages ? '#B5B2B2' : 'black'}
          icon="arrow_forward_ios"
        />
      </Button>
    </div>
  )
}
