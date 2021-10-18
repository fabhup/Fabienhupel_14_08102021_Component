import styled from 'styled-components'

export const DataTableContentBody = styled.div`
    position: sticky;
    left: 0;
    min-height: ${({ minRows }) => `${minRows * 3}em`};
    max-height: 70vh;
    ${({ style }) => style};
`
