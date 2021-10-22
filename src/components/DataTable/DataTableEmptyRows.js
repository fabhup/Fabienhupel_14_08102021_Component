import styled from 'styled-components'
import { lighten } from 'polished'

export const DataTableEmptyRows = styled.div`
    height: ${({ emptyRows, rowsHeight }) =>
        `calc(${emptyRows} * ${rowsHeight})`};
    ${({ colors }) =>
        `background-color: ${lighten(0.03, colors.stripedColorBackground)};`}
`
