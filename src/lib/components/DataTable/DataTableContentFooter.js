import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableContentFooter = styled.div`
    ${({ style }) => style};
`

DataTableContentFooter.propTypes = {
    style: PropTypes.shape(),
}
