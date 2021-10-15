import styled from 'styled-components'

export const DataTableCell = styled.div`
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
