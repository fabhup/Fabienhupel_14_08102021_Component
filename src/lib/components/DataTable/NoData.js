import React from 'react'
import styled from 'styled-components'
import { darken, lighten } from 'polished'
import PropTypes from 'prop-types'

const StyledNoDataContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem 15px 0;
    text-align: center;
    ${({ rowsHeight, rowsPerPage }) =>
        `height: calc(${rowsPerPage}*${rowsHeight})`};
    font-size: 2rem;
    ${({ colors }) =>
        `background-color: ${lighten(0.1, colors.primaryColorBackground)};
        color: ${darken(0.1, colors.primaryColor)};`}
`

export function NoData({ colors, rowsHeight, rowsPerPage }) {
    return (
        <StyledNoDataContainer
            className="dataTableNoData"
            colors={colors}
            rowsHeight={rowsHeight}
            rowsPerPage={rowsPerPage}
        >
            {'No data to display'}
        </StyledNoDataContainer>
    )
}

NoData.propTypes = {
    colors: PropTypes.shape(),
    rowsHeight: PropTypes.string,
    rowsPerPage: PropTypes.number,
}
