import styled from 'styled-components'
import { darken, lighten, transparentize } from 'polished'

export const DataTableRow = styled.div`
    max-height: 3em;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    height: ${({ rowsHeight }) => rowsHeight};
    ${({ striped, colors }) =>
        striped
            ? `
            background-color: ${colors.stripedColorBackground};
            color: ${colors.stripedColor};
            &:hover{
                background-color: ${darken(0.1, colors.stripedColorBackground)};
                color: ${transparentize(0.1, colors.stripedColor)};
            }`
            : `
            background-color: ${lighten(0.6, colors.primaryColorBackground)};
            color: ${darken(0.3, colors.primaryColor)};

            &:hover{
                background-color: ${darken(0.1, colors.primaryColorBackground)};
                color: ${transparentize(0.3, colors.primaryColor)};
            }`}
    ${({ rowsBorder, colors }) =>
        rowsBorder &&
        `border-bottom: solid 1px ${transparentize(0.7, colors.primaryColor)}`}
    ${({ style }) => style};
`
