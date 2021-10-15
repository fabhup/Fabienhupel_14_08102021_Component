import styled from 'styled-components'

const StyledDataTableCell = styled.div`
    ${({ column }) => (column.widthRatio > 0 ? `
        flex: ${column.widthRatio} 0 0;
        min-width: ${column.widthRatio*6}em;
    ` : `
        flex: 1 0 0;
        min-width: 6em;
        `
    )}
    display: flex;
    align-items: center;
    align-content: stretch;
    max-width: 100%;
    padding: 5px 10px;
    ${({ activeSort }) => activeSort && 'background: linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.03));'}

    & div:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        ${({ column }) => {
            if (!column.splitContent) {
                return `white-space: nowrap;`
            }
            else {
                return `display: -webkit-box;
                    -webkit-line-clamp: ${column.splitContentRows>2 ? column.splitContentRows : 2};
                    -webkit-box-orient: vertical; 
                    `                    
            }
        }}
    }
    ${({ style }) => (style)};
`

export function DataTableCell({
    column,
    activeSort,
    style,
    value,
}) {
    return <StyledDataTableCell className='dataTableCell' 
        role="gridcell"
        column={column}
        activeSort={activeSort}
        style={style}
    >
        <div className='dataTableCellValue' >
            {value}
        </div>
    </StyledDataTableCell>
}
// style={styles.dataTableCell} 
//                             role="gridcell"
//                             value={!dataRow[column.key] ? "" : dataRow[column.key]}
//                             key={index}
//                             column={column}
//                             activeSort={activeSort && activeSort.key === column.key ? activeSort : null}