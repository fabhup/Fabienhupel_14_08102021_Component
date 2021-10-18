import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'

const StyledRowsPerPageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px;
    ${({ style }) => style};
`

const StyledRowsPerPageLabel = styled.label`
    ${({ style }) => style};
`

const StyledRowsPerPageSelector = styled.select`
    margin: 0 10px;
    min-width: min-content;
    ${({ style }) => style};
`

export function SelectRowsPerPage({
    rowsPerPage,
    rowsPerPageOptions,
    rowsPerPageLabel,
    rowsPerPageTextAfter,
    style,
    onChange,
}) {
    const id = uniqueId('selectRowsPerPage-')
    return (
        <StyledRowsPerPageContainer className="dataTableRowsPerPageContainer">
            <StyledRowsPerPageLabel
                for={id}
                className="dataTableRowsPerPageLabel"
            >
                {rowsPerPageLabel}
                <StyledRowsPerPageSelector
                    id={id}
                    name="datatableRowsPerPage"
                    className="dataTableRowsPerPageSelector"
                    onChange={(e) => onChange(e.target.value)}
                    defaultValue={rowsPerPage}
                >
                    {rowsPerPageOptions.map((optionValue) => (
                        <option key={optionValue} value={optionValue}>
                            {optionValue}
                        </option>
                    ))}
                </StyledRowsPerPageSelector>
                {rowsPerPageTextAfter}
            </StyledRowsPerPageLabel>
        </StyledRowsPerPageContainer>
    )
}
