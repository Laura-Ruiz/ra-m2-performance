import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TdStyled = styled.td`
  height: 30px;
  width: 300px;

  animation: shimmer 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

`

 function Shimmer({row, columns}) {
  
    const tableRows = [];

    for (let i = 0; i < row; i+=1) {
      const rowCells = [];
      for (let j = 0; j < columns; j+=1) {
        rowCells.push(<TdStyled key={`cell-${i}-${j}`} />);
      }
      tableRows.push(<tr key={`row-${i}`}>{rowCells}</tr>);
    }

  return (
    <table>
    <tbody>
      {tableRows}
    </tbody>
  </table>
  )
}

const MemoizeShimmer = React.memo(Shimmer)


export default MemoizeShimmer

Shimmer.propTypes = {
  row: PropTypes.number,
  columns: PropTypes.number,
}

