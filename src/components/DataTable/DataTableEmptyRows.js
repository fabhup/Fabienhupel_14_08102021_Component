import styled from 'styled-components'
import { lighten } from 'polished'

export const DataTableEmptyRows = styled.div`
    min-height: ${({ emptyRows }) => `${emptyRows * 3}em`};
    ${({ stripedColor }) => `background-color: ${lighten(0.03, stripedColor)};`}
`
