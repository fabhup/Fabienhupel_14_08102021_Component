import styled from 'styled-components'

export const DataTableContentBody = styled.div`
    position: sticky;
    left: 0;
    min-height: ${({ minRows, rowsHeight }) =>
        `calc${minRows} * ${rowsHeight})`};
    ${({ style }) => style};
`
