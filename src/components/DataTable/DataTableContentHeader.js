
import styled from 'styled-components'

export const DataTableContentHeader = styled.div`
    display: flex; 
    justify-content: row;
    font-weight: bold;
    border-bottom: solid 1px grey;
    align-items: flex-start;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 5px 0;
    background: white;    
    ${({ style }) => (style)};
`