import styled from 'styled-components'
import PropTypes from 'prop-types'

export const StyledDataTableRowCardContainer = styled.div`
    position: fixed;
    max-width: calc(50vw);
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    display: fixed;
    overflow: scroll;
    font-size: min(4vmin, 1rem);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: darkgreen;
    padding: 4rem 50px 15px 20px;
    border-radius: 0;
    box-shadow: 1px 1px 5px lightgrey;
    -webkit-mask-image: linear-gradient(white, white);
    z-index: 999;
    opacity: 0;
    transform: translateX(-100vh);
    ${({ colors }) => `
        color: ${colors.secondaryColor};
        background: ${colors.secondaryColorBackground};
    `};
`

export function DataTableRowCard({ dataRow, columns, colors }) {
    return (
        <StyledDataTableRowCardContainer
            colors={colors}
            className="dataTableRowCard"
            aria-hidden="true"
        >
            {columns.map((column, index) => (
                <span key={index}>
                    <strong>{`${column.title} : `}</strong>
                    {dataRow[column.key] || 'Unknown'}
                </span>
            ))}
        </StyledDataTableRowCardContainer>
    )
}

DataTableRowCard.propTypes = {
    colors: PropTypes.shape(),
    columns: PropTypes.arrayOf(PropTypes.shape()),
    dataRow: PropTypes.shape(),
}
