import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'
import { darken, transparentize } from 'polished'
import PropTypes from 'prop-types'

const StyledRowsPerPageContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    line-height: 1.5em;
    padding: 15px 5px 0 20px;
    margin: 0;
`

const StyledRowsPerPageLabel = styled.label`
    white-space: normal;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`

const StyledRowsPerPageSelector = styled.select`
    margin: 0px 10px;
    min-width: max-content;
    padding: 5px 20px 5px 5px;
    height: 2em;
    border-radius: 5px;
    background: white;
    box-shadow: 1px 1px 2px lightgrey;
    font-size: 1em;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: initial;
    position: relative;
    background-color: white;
    background-size: 1em 1em;
    background-position: right center;
    background-repeat: no-repeat;
    ${({ colors }) =>
        `color: ${darken(0.25, colors.primaryColor)};
        border: solid 1px ${transparentize(0.5, colors.primaryColor)};
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' height='10px' width='15px'%3E%3Ctext x='0' y='10' 
        fill='${darken(0.25, colors.primaryColor).replace(
            '#',
            '%23'
        )}'%3E%E2%96%BE%3C/text%3E%3C/svg%3E");`}
`

export function SelectRowsPerPage({
    rowsPerPage,
    rowsPerPageOptions,
    label,
    textAfterLabel,
    onChange,
    colors,
}) {
    const id = uniqueId('selectRowsPerPage-')
    return (
        <StyledRowsPerPageContainer className="dataTableRowsPerPageContainer">
            <StyledRowsPerPageLabel
                htmlFor={id}
                className="dataTableRowsPerPageLabel"
            >
                {label}
                <StyledRowsPerPageSelector
                    id={id}
                    name="datatableRowsPerPage"
                    className="dataTableRowsPerPageSelector"
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={rowsPerPage}
                    colors={colors}
                >
                    {rowsPerPageOptions.map((optionValue) => (
                        <option key={optionValue} value={optionValue}>
                            {optionValue}
                        </option>
                    ))}
                </StyledRowsPerPageSelector>
                {textAfterLabel}
            </StyledRowsPerPageLabel>
        </StyledRowsPerPageContainer>
    )
}

SelectRowsPerPage.propTypes = {
    rowsPerPage: PropTypes.number.isRequired,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
    label: PropTypes.string,
    textAfterLabel: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    colors: PropTypes.shape(),
}