import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: space-around;
    position: relative;
    flex-wrap: wrap;
    padding-bottom: 10px;
    width: 100%;
    ${({ style }) => style};
`
DataTableHeader.propTypes = {
    style: PropTypes.shape(),
}
