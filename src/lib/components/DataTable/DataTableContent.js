import React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'
import PropTypes from 'prop-types'

const StyledDataTableContentWrapper = styled.div`
    overflow: hidden;
    ${({ dataTableBorderPosition, colors }) =>
        dataTableBorderPosition === 'content'
            ? `   border: solid 1px ${transparentize(0.7, colors.primaryColor)};
            border-radius: 5px;
            margin: 0 15px;
    `
            : `margin-bottom: -1px;
`};
`

const StyledDataTableContent = styled.div`
    width: 100%;
    display: grid;
    padding: 0px;
    overflow: auto;
    z-index: 2;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgb(0 0 0 / 10%);
        border-radius: 0px;
        background-color: snow;
        margin-top: 2.35em;
        position: relative;
        top: 0;
        left: 0;
        height: 30%;
    }

    &::-webkit-scrollbar {
        width: 18px;
        background: none;
        height: 18px;
        padding: 4px;
    }

    ${({ colors }) =>
        `&::-webkit-scrollbar-thumb {
        border-radius: 100px;
        -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: ${colors.secondaryColor};
    }
    &::-webkit-scrollbar-corner {
        background-color: snow;
        -webkit-box-shadow: inset 0 0 3px rgb(0 0 0 / 5%);
    }
    scrollbar-color: ${colors.secondaryColor} snow;
    scrollbar-width: 10px;
    `}
    ${({ style }) => style};
`

export function DataTableContent({
    children,
    style,
    dataTableBorderPosition,
    colors,
}) {
    return (
        <>
            <StyledDataTableContentWrapper
                className="dataTableContentWrapper"
                dataTableBorderPosition={dataTableBorderPosition}
                colors={colors}
            >
                <StyledDataTableContent
                    className="dataTableContent"
                    role="table"
                    style={style}
                    colors={colors}
                >
                    {children}
                </StyledDataTableContent>
            </StyledDataTableContentWrapper>
        </>
    )
}

DataTableContent.propTypes = {
    dataTableBorderPosition: PropTypes.string,
    colors: PropTypes.shape(),
    style: PropTypes.shape(),
}
