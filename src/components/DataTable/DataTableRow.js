import styled from 'styled-components'

export const DataTableRow = styled.div`
    min-height: 2em;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    ${({ striped, stripedColor }) => (striped && `background-color: ${stripedColor};`)}
    ${({ style }) => (style)};
`