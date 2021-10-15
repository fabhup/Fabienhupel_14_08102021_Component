
import styled from 'styled-components'

export const DataTableContentHeader = styled.div`
    display: flex; 
    justify-content: row;
    font-weight: bold;
    border-bottom: solid 1px grey;
    align-items: flex-start;
    ${({ style }) => (style)};
`