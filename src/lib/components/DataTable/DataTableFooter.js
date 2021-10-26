import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px;
    padding-bottom: 10px;
    font-size: 1.1em ${({ style }) => style};
`

DataTableFooter.propTypes = {
    style: PropTypes.shape(),
}
