import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'
import { ReactComponent as LogoSearchIcon } from '../../icons/search-solid.svg'
import { ReactComponent as LogoCloseIcon } from '../../icons/times-solid.svg'
import { darken } from 'polished'
import PropTypes from 'prop-types'

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

const StyledLogoSearchIcon = styled(LogoSearchIcon)`
    position: absolute;
    width: 1em;
    right: 10px;
    visibility: visible;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    transition-delay: 0.2s;
`

const StyledLogoCloseIcon = styled(LogoCloseIcon)`
    position: absolute;
    width: 0.8em;
    right: 10px;
    cursor: pointer;
    transform: scale(0.5);
    visibility: hidden;
    transition: all 0.2s ease-in-out;
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

    &:not(:placeholder-shown) + .searchIcon {
        visibility: hidden;
        transform: scale(0.5);
        transition-delay: 0s;
    }

    &:not(:placeholder-shown) + .searchIcon + .closeIcon {
        transform: scale(1);
        visibility: visible;
        transition-delay: 0.2s;
    }
`

const StyledSearchBarLabel = styled.label``

export function SearchBar({
    label,
    onChange,
    placeholder,
    colors,
    onReset,
    value,
}) {
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
                value={value}
                onChange={onChange}
                id={id}
                type="text"
                placeholder={placeholder}
                colors={colors}
            ></StyledSearchBarInput>
            <StyledLogoSearchIcon
                className="searchIcon"
                aria-hidden="true"
                fill={darken(0.15, colors.primaryColor)}
            />
            <StyledLogoCloseIcon
                className="closeIcon"
                aria-hidden="true"
                fill={darken(0.15, colors.primaryColor)}
                onClick={onReset}
            />
        </StyledSearchBarContainer>
    )
}

SearchBar.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    colors: PropTypes.shape(),
}
