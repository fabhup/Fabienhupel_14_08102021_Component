import React from 'react'
import styled from 'styled-components'
import uniqueId from 'lodash/uniqueId'
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

const StyledLogoSearchIcon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;
    right: 10px;
    visibility: visible;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    transition-delay: 0.2s;
    & svg path {
        ${({ colors }) => `fill: ${darken(0.15, colors.primaryColor)};`}
    }
`

const StyledLogoCloseIcon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.8em;
    right: 10px;
    cursor: pointer;
    transform: scale(0.5);
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    & svg path {
        ${({ colors }) => `fill: ${darken(0.15, colors.primaryColor)};`}
    }
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
                colors={colors}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
            </StyledLogoSearchIcon>
            <StyledLogoCloseIcon
                className="closeIcon"
                aria-hidden="true"
                colors={colors}
                onClick={onReset}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="times"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
            </StyledLogoCloseIcon>
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
