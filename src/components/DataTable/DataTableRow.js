import styled from 'styled-components'
import { darken } from 'polished'

export const DataTableRow = styled.div`
    min-height: 2em;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    ${({ striped, stripedColor }) => (striped && `
        background-color: ${stripedColor};
        `
    )}
    ${({ stripedColor }) => `&:hover{
        background-color: ${darken(0.05,stripedColor)};
    }`}
    ${({ style }) => (style)};
`