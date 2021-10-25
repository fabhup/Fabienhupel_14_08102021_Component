import styled from 'styled-components'
import sortDownIcon from '../../icons/sort-down-solid.svg'
import sortUpIcon from '../../icons/sort-up-solid.svg'
import sortableIcon from '../../icons/sort-solid.svg'
import PropTypes from 'prop-types'

const StyledDataTableColumn = styled.div`
    ${({ column, minWidth }) =>
        column.widthRatio > 0
            ? `
        flex: ${column.widthRatio} 0 0;
        min-width: calc(${column.widthRatio} * ${minWidth});`
            : `
        flex: 1 0 0;
        min-width: ${minWidth};
        `}
    max-width: 100%;
    padding: 5px 1.5em 5px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
    line-height: 1.5em;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    &:after {
        content: " ";
        width: 1em;
        height: 1em;
        top: 0.4em;
        right: 5px;
        position: absolute;
        display: block;
        background-size: 15px 15px;
        background-color: ${({ colors }) =>
            colors.secondaryColor || 'lightgrey'};
        ${({ activeSort }) => {
            if (!activeSort) {
                return `
                    mask: url(${sortableIcon}) no-repeat;
                    -webkit-mask: url(${sortableIcon}) no-repeat;
                    opacity: .4;
                    `
            } else {
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
                    default:
                        return `
                        mask: url(${sortableIcon}) no-repeat;
                        -webkit-mask: url(${sortableIcon}) no-repeat;
                        opacity: .4;
                        `
                }
            }
        }}
    ${({ style }) => style};
`

export function DataTableColumn({
    column,
    minWidth,
    activeSort,
    onClick,
    onKeyPress,
    colors,
    style,
}) {
    return (
        <StyledDataTableColumn
            className="dataTableColumn"
            role="columnheader"
            style={style}
            column={column}
            minWidth={minWidth}
            activeSort={activeSort}
            onClick={onClick}
            onKeyPress={onKeyPress}
            colors={colors}
            tabIndex={0}
        >
            {column.title}
        </StyledDataTableColumn>
    )
}

DataTableColumn.propTypes = {
    column: PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
    }),
    minWidth: PropTypes.string,
    activeSort: PropTypes.shape({
        key: PropTypes.string,
        format: PropTypes.string,
        direction: PropTypes.string,
    }),
    colors: PropTypes.shape(),
    style: PropTypes.shape(),
    onClick: PropTypes.func,
    onKeyPress: PropTypes.func,
}
