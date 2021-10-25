import styled from 'styled-components'
import { lighten } from 'polished'
import PropTypes from 'prop-types'

export const DataTableEmptyRows = styled.div`
    height: ${({ emptyRows, rowsHeight }) =>
        `calc(${emptyRows} * ${rowsHeight})`};
    ${({ colors }) =>
        `background-color: ${lighten(0.03, colors.stripedColorBackground)};`}
`

DataTableEmptyRows.propTypes = {
    emptyRows: PropTypes.number,
    colors: PropTypes.shape(),
    rowsHeight: PropTypes.string,
}
