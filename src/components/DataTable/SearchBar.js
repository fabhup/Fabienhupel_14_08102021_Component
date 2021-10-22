import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'
import { ReactComponent as LogoSearchIcon } from '../../icons/search-solid.svg'
import { darken, lighten, transparentize } from 'polished'

const StyledSearchBarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0 0 0;
    margin: auto 15px auto auto;
    ${({ style }) => style};
    position: relative;
    width: 20%;
    min-width: 12em;
    border-radius: 5px;
`

const StyledSearchBarInput = styled.input`
    width: 100%;
    height: 2em;
    border-radius: 5px;
    ${({ colors }) => `
        color: ${darken(0.3, colors.primaryColor)};
        border: solid 1px ${colors.primaryColor};
        box-shadow: 1px 1px 2px lightgrey;
        &::placeholder {
            color: ${darken(0.15, colors.primaryColor)};
        }
    `}
    padding: 0 30px 0 10px;
    font-size: 1em;
`

const StyledSearchBarLabel = styled.label``

const StyledLogoSearchIcon = styled(LogoSearchIcon)`
    position: absolute;
    width: 1em;
    right: 10px;
`

export function SearchBar({ style, label, onChange, placeholder, colors }) {
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
                colors={colors}
            ></StyledSearchBarInput>
            <StyledLogoSearchIcon fill={darken(0.15, colors.primaryColor)} />
        </StyledSearchBarContainer>
    )
}
