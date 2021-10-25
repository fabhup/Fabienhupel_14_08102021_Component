import styled, { keyframes } from 'styled-components'
import { darken, lighten, transparentize } from 'polished'
import { DataTableRowCard } from './DataTableRowCard'
import PropTypes from 'prop-types'

const onHoverRow = keyframes`
    0% { transform: translateX(1000px); opacity: 0;  }
    10% { transform: translateX(0); opacity: .95;  }
    50% { transform: translateX(0); opacity: .95;  }
    100% { transform: translateX(1000px); opacity: 0;  }
`

export const StyledDataTableRow = styled.div`
    max-height: 3em;
    display: flex;
    align-items: stretch;
    transform: opacity(1);
    align-content: stretch;
    height: ${({ rowsHeight }) => rowsHeight};
    ${({ striped, colors }) =>
        striped
            ? `
            background-color: ${colors.stripedColorBackground};
            color: ${colors.stripedColor};
            &:hover{
                background-color: ${darken(0.1, colors.stripedColorBackground)};
                color: ${transparentize(0.1, colors.stripedColor)};
            }`
            : `
            background-color: ${lighten(0.1, colors.primaryColorBackground)};
            color: ${darken(0.1, colors.primaryColor)};

            &:hover{
                background-color: ${darken(0.1, colors.primaryColorBackground)};
                color: ${transparentize(0.3, colors.primaryColor)};
            }`}
    &:hover .dataTableRowCard {
        display: flex;
        animation: ${onHoverRow} 4s backwards ease-in-out;
    }

    & .dataTableRowCard {
        display: none;
    }

    ${({ rowsBorder, colors }) =>
        rowsBorder &&
        `border-bottom: solid 1px ${transparentize(0.7, colors.primaryColor)}`}
    ${({ style }) => style};
`

export function DataTableRow({
    children,
    style,
    striped,
    colors,
    rowsBorder,
    rowsHeight,
    columns,
    dataRow,
    showDataTableRowCard,
}) {
    return (
        <StyledDataTableRow
            className="dataTableRow"
            role="row"
            striped={striped}
            colors={colors}
            rowsBorder={rowsBorder}
            rowsHeight={rowsHeight}
            style={style}
        >
            {children}
            {
                // on hovering a row, all informations are displayed on right side of the screen
                showDataTableRowCard && (
                    <DataTableRowCard
                        columns={columns}
                        dataRow={dataRow}
                        colors={colors}
                    />
                )
            }
        </StyledDataTableRow>
    )
}

DataTableRow.propTypes = {
    style: PropTypes.shape(),
    striped: PropTypes.bool,
    colors: PropTypes.shape(),
    rowsBorder: PropTypes.bool,
    rowsHeight: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape()),
    dataRow: PropTypes.shape(),
    showDataTableRowCard: PropTypes.bool,
}
