import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'

const StyledSearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px 15px 15px;
    ${({ style }) => style};
`

const StyledSearchBarInput = styled.input`
    width: 12em;
    height: 2em;
    border: solid 1px lightgrey;
    border-radius: 5px;
    box-shadow: 1px 1px 2px lightgrey;
    color: grey;
    padding: 0px 10px;
    font-size: 1em;
    &::placeholder {
        color: lightgrey;
    }
`

const StyledSearchBarLabel = styled.label``

export function SearchBar({ style, label, onChange, placeholder }) {
    const id = uniqueId('searchBar-')

    return (
        <StyledSearchBarContainer className="dataTableSearchBar">
            {label && (
                <StyledSearchBarLabel
                    className="dataTableSearchBarLabel"
                    htmlFor={id}
                >
                    {label}
                </StyledSearchBarLabel>
            )}
            <StyledSearchBarInput
                className="dataTableSearchBarInput"
                onChange={onChange}
                id={id}
                type="text"
                placeholder={placeholder}
            ></StyledSearchBarInput>
        </StyledSearchBarContainer>
    )
}
