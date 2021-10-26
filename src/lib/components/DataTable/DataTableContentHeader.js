import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableContentHeader = styled.div`
    display: flex;
    justify-content: row;
    ${({ colors }) => `
        border-bottom: solid 1px ${colors.primaryColorBackground};
        color: ${colors.secondaryColor};
        background: ${colors.secondaryColorBackground};
    `}
    align-items: center;
    position: sticky;
    top: 0;
    padding: 2px 0;
    overflow: revert;
    font-size: 1.1em;
    font-weight: 500;
    ${({ noResults }) => noResults && `overflow: hidden;`};
    ${({ style }) => style};
`

DataTableContentHeader.propTypes = {
    noResults: PropTypes.bool,
    colors: PropTypes.shape(),
    style: PropTypes.shape(),
}
