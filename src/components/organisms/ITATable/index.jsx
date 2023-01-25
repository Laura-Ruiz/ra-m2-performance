/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { StyledDiv, TableStyled } from './styles'
import TableBody from './TableBody'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import DownloadButton from '../../molecules/DownloadButton'
import MemoizeShimmer from './Shimmer'


function Table({ columns, data, showHeader = true, isLoading }) {
  const { dispatch } = useContext(TableContext)
  
  useEffect(() => {
    if(data){
      dispatch({ type: Actions.SET_DATA, payload: Object.values(data) })
      dispatch({ type: Actions.SET_SORTEDDATA, payload: Object.values(data)})
    }
    
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])


  return (
    <>
     <StyledDiv>
        <span>Ordenar por...</span>
        <DownloadButton/>
      </StyledDiv>
      {isLoading ? <MemoizeShimmer row = {11} columns ={5}/> :
      <>
      <TableStyled>
          {showHeader && <TableHeader />}
          <TableBody />
        </TableStyled>
        <TableFooter />
      </>

      }
    </>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}




Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  showHeader: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default ITATable