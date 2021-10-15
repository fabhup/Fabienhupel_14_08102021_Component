import styled from 'styled-components'

export const DataTableColumn = styled.div`
    ${({ column }) => (column.widthRatio > 0 ? `
        flex: ${column.widthRatio} 0 0;
        min-width: ${column.widthRatio*6}em;
    ` : `
        flex: 1 0 0;
        min-width: 6em;
        `
    )}
    max-width: 100%;
    padding: 0 10px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em;
    line-height: 1.5em;
    cursor: pointer;
    ${({ style }) => (style)};
`