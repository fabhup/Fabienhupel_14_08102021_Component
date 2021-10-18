import styled from 'styled-components'

const StyledPaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px;
    ${({ style }) => style};
`

const StyledButtonChangePage = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: none;
    margin: 0;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    flex: 0 0 auto;
    padding: 5px;
    border-radius: 100%;
    overflow: hidden;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    & svg {
        width: 100%;
        height: 100%;
        margin: 0 2px;
    }

    ${({ disable }) => {
        if (disable) {
            return `
                & path {
                    fill: lightgrey;
                }
            `
        } else {
            return `
                cursor: pointer;
                & path {
                    fill: grey;
                }
                &:hover {
                    background-color: rgba(0, 0, 0, 0.04);
                    & path {
                        fill: darkgrey;
                    }
                }

                &:after {
                    content: '';
                    background: rgba(0, 0, 0, 0.4);
                    display: block;
                    position: absolute;
                    padding-top: 100%;
                    padding-left: 100%;
                    opacity: 0;
                    border-radius: 100%;
                    transition: all 0.4s;
                }

                &:active:after {
                    padding: 0;
                    margin: 0;
                    opacity: 0.5;
                    filter: brightness(80%);
                    transition: 0s;
                }
            `
        }
    }}
    ${({ style }) => style};
`

const StyledPageCounter = styled.div`
    margin: 2px 10px;
    color: grey;
`

export function Pagination({
    currentPage,
    totalPages,
    rowsPerPage,
    totalRows,
    style,
    onChangePage,
}) {
    const handlePreviousPage = () => onChangePage(currentPage - 1)
    const handleNextPage = () => onChangePage(currentPage + 1)
    const handleFirstPage = () => onChangePage(1)
    const handleLastPage = () => onChangePage(totalPages)
    const firstRow = rowsPerPage * currentPage - rowsPerPage + 1
    const lastRow =
        rowsPerPage * currentPage > totalRows
            ? totalRows
            : rowsPerPage * currentPage
    const isLastPage = currentPage === totalPages
    const isFirstPage = currentPage === 1
    return (
        <StyledPaginationContainer
            className="dataTablePaginationContainer"
            style={style}
        >
            {!isFirstPage && (
                <>
                    <StyledButtonChangePage
                        onClick={handleFirstPage}
                        disable={isFirstPage}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="20 0 448 512"
                        >
                            <path
                                d="M180 90V120c0-8.8-7.2-24-24-24H120c-8.8 
                           0-24 7.2-24 24v270c0 
                           8.8 7.2 24 24 24h32c8.8 
                           0 24-7.2 24-24zm128"
                            ></path>
                            <path
                                d="M223.7 239l136-136c9.4-9.4 
                            24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 
                            0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 
                            0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 
                            0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192"
                            ></path>
                        </svg>
                    </StyledButtonChangePage>
                    <StyledButtonChangePage
                        onClick={handlePreviousPage}
                        disable={isFirstPage}
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="20 0 256 512"
                        >
                            <path
                                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 
                                33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 
                                9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                            ></path>
                        </svg>
                    </StyledButtonChangePage>
                </>
            )}
            <StyledPageCounter>
                {`${firstRow}-${lastRow} of ${totalRows} entries`}
            </StyledPageCounter>
            <StyledButtonChangePage
                onClick={handleNextPage}
                disable={isLastPage}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-20 0 256 512"
                >
                    <path
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 
                        0l-22.6-22.6c-9.4-9.4-9.4-24.6 
                        0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 
                        0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 
                        136c9.5 9.4 9.5 24.6.1 34z"
                    ></path>
                </svg>
            </StyledButtonChangePage>
            <StyledButtonChangePage
                onClick={handleLastPage}
                disable={isLastPage}
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-20 0 448 512"
                >
                    <path
                        d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 
                        0l-22.6-22.6c-9.4-9.4-9.4-24.6 
                        0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 
                        0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 
                        136c9.5 9.4 9.5 24.6.1 34z"
                    ></path>
                    <path
                        d="M380 90V120c0-8.8-7.2-24-24-24H320c-8.8 
                           0-24 7.2-24 24v270c0 
                           8.8 7.2 24 24 24h32c8.8 
                           0 24-7.2 24-24zm128"
                    ></path>
                    {/* <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path> */}
                </svg>
            </StyledButtonChangePage>
        </StyledPaginationContainer>
    )
}
