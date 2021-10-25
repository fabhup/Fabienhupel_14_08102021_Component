import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableContentBody = styled.div`
    left: 0;
    min-height: ${({ minRows, rowsHeight }) =>
        `calc${minRows} * ${rowsHeight})`};
    ${({ style }) => style};
`

DataTableContentBody.propTypes = {
    minRows: PropTypes.number,
    rowsHeight: PropTypes.string,
    style: PropTypes.shape(),
}
