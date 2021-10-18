import styled from 'styled-components'

export const DataTableContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0px;
    ${({ style }) => style};
    ${({ dataTableBorderPosition }) =>
        dataTableBorderPosition === 'container' &&
        `   border: solid 1px lightgrey;
            border-radius: 5px;
            border
    `};
`
