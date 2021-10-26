import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDataTableCell = styled.div`
    ${({ column, minWidth }) =>
        column.widthRatio > 0
            ? `
        flex: ${column.widthRatio} 0 0;
        min-width: calc(${column.widthRatio} * ${minWidth});
    `
            : `
        flex: 1 0 0;
        min-width: ${minWidth};
        `}
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 5px 10px;
    ${({ activeSort }) => activeSort && 'background: rgba(0, 0, 0, 0.03);'}

    & div:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        ${({ column }) => {
            if (!column.splitContent) {
                return `white-space: nowrap;`
            } else {
                return `display: -webkit-box;
                    -webkit-line-clamp: ${
                        column.splitContentRows > 2
                            ? column.splitContentRows
                            : 2
                    };
                    -webkit-box-orient: vertical; 
                    `
            }
        }}
    }
    ${({ style }) => style};
`

export function DataTableCell({ column, activeSort, style, value, minWidth }) {
    return (
        <StyledDataTableCell
            className="dataTableCell"
            role="gridcell"
            column={column}
            activeSort={activeSort}
            style={style}
            minWidth={minWidth}
        >
            <div className="dataTableCellValue">{value}</div>
        </StyledDataTableCell>
    )
}

DataTableCell.propTypes = {
    column: PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
    }),
    activeSort: PropTypes.shape({
        key: PropTypes.string,
        format: PropTypes.string,
        direction: PropTypes.string,
    }),
    style: PropTypes.shape(),
    value: PropTypes.string.isRequired,
    minWidth: PropTypes.string,
}
