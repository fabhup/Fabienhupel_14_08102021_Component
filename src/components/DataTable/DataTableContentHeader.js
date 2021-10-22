import styled from 'styled-components'

export const DataTableContentHeader = styled.div`
    display: flex;
    justify-content: row;
    font-weight: bold;
    border-bottom: solid 1px ${({ colors }) => colors.primaryColorBackground};
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 2px 0;
    overflow: revert;
    ${({ style }) => style};
`
