import styled from 'styled-components'

const StyledDataTableContentWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    ${({ dataTableBorderPosition }) =>
        dataTableBorderPosition === 'content' &&
        `   border: solid 1px lightgrey;
            border-radius: 5px;
            -webkit-mask-image: -webkit-radial-gradient(white, black);
    `};
`

const StyledDataTableContent = styled.div`
    width: 100%;
    display: grid;
    padding: 0px;
    overflow: auto;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgb(0 0 0 / 10%);
        border-radius: 0px;
        background-color: snow;
        margin-top: 39px;
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

    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
        border: 4px solid transparent;
        background-clip: content-box;
        background-color: #0277bd;
    }
    &::-webkit-scrollbar-corner {
        background-color: snow;
        -webkit-box-shadow: inset 0 0 3px rgb(0 0 0 / 5%);
    }
    scrollbar-color: #0277bd snow;
    scrollbar-width: 10px;
    ${({ style }) => style};
`

export function DataTableContent({ children, style, dataTableBorderPosition }) {
    return (
        <>
            <StyledDataTableContentWrapper
                className="dataTableContentWrapper"
                dataTableBorderPosition={dataTableBorderPosition}
            >
                <StyledDataTableContent
                    className="dataTableContent"
                    role="table"
                    style={style}
                >
                    {children}
                </StyledDataTableContent>
            </StyledDataTableContentWrapper>
        </>
    )
}
