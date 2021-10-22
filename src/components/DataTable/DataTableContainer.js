import styled from 'styled-components'

export const DataTableContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0px;
    border-radius: 5px;
    overflow: hidden;
    ${({ dataTableBorderPosition, colors }) =>
        dataTableBorderPosition === 'container' &&
        `   border: solid 1px ${colors.primaryColor};
            box-shadow: 1px 1px 5px lightgrey;
    `};
    ${({ colors }) => `background: ${colors.primaryColorBackground};
    border: none;`}
    ${({ style }) => style};
`
