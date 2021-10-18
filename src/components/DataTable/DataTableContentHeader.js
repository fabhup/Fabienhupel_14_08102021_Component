import styled from 'styled-components'

export const DataTableContentHeader = styled.div`
    display: flex;
    justify-content: row;
    font-weight: bold;
    border-bottom: solid 1px grey;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 2px 0;
    background: white;
    border-radius: 5px 5px 0 0;
    overflow: revert;
    ${({ style }) => style};
`
