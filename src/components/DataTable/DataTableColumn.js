import styled from 'styled-components'
import sortDownIcon from '../../icons/sort-down-solid.svg'
import sortUpIcon from '../../icons/sort-up-solid.svg'
import sortableIcon from '../../icons/sort-solid.svg'

const StyledDataTableColumn = styled.div`
    ${({ column }) => (column.widthRatio > 0 ? `
        flex: ${column.widthRatio} 0 0;
        min-width: ${column.widthRatio*6}em;
    ` : `
        flex: 1 0 0;
        min-width: 6em;
        `
    )}
    max-width: 100%;
    padding: 0 20px 5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
    line-height: 1.5em;
    cursor: pointer;
    position: relative;
    &:after {
        content: " ";
        width: 15px;
        height: 15px;
        top: 5px;
        right: 5px;
        position: absolute;
        display: block;
        background-size: 15px 15px;
        background-color: ${({colors}) => (colors.primaryColor || 'lightgrey')};
        ${({ activeSort }) => {
            if (!activeSort) {
                return `
                    mask: url(${sortableIcon}) no-repeat;
                    -webkit-mask: url(${sortableIcon}) no-repeat;
                    opacity: .2;
                    `
            }
            else {
                switch (activeSort.direction) {
                    case 'asc':
                        return `
                        mask: url(${sortDownIcon}) no-repeat;
                        -webkit-mask: url(${sortDownIcon}) no-repeat;
                        opacity: 1;
                        ` 
                    case 'desc':
                        return `
                        mask: url(${sortUpIcon}) no-repeat;
                        -webkit-mask: url(${sortUpIcon}) no-repeat;
                        opacity: 1;
                        ` 
                    default :
                        return `
                        mask: url(${sortableIcon}) no-repeat;
                        -webkit-mask: url(${sortableIcon}) no-repeat;
                        opacity: .2;
                        ` 
                }
            }
        }}
    ${({ style }) => (style)};
`

export function DataTableColumn({
    style, 
    column, 
    activeSort, 
    onClick,
    colors,
    }) {
    return <StyledDataTableColumn 
        className='dataTableColumn'
        role="columnheader" 
        style={style} 
        column={column}
        activeSort={activeSort}
        onClick={onClick}
        colors={colors}
    >
        {column.title}
    </StyledDataTableColumn>
}