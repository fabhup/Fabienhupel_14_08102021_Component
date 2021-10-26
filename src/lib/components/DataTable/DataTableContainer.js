import styled from 'styled-components'
import PropTypes from 'prop-types'

export const DataTableContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 0px;
    border-radius: 5px;
    overflow: hidden;
    font-size: '1em';
    border: none;

    ${({ dataTableBorderPosition }) =>
        dataTableBorderPosition === 'container' &&
        `   box-shadow: 1px 1px 5px lightgrey;
    `};
    ${({ colors }) => `
        background: ${colors.primaryColorBackground};
        color: ${colors.primaryColor};
        `}
    ${({ fontFamily }) => `& * {
        font-family: ${fontFamily};
    };`}
    ${({ style }) => style};
`

DataTableContainer.propTypes = {
    dataTableBorderPosition: PropTypes.string,
    fontFamily: PropTypes.string,
    colors: PropTypes.shape(),
    style: PropTypes.shape(),
}
