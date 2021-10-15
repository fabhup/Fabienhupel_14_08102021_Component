
import styled from 'styled-components'

const StyledDataTableContentWrapper = styled.div`
    width: 100%;
    overflow: hidden;

`

const StyledDataTableContent = styled.div`
    width: 100%;
    display: grid; 
    padding: 5px 0px 0px;
    overflow: auto;
    ${({ style }) => (style)};
`


export function DataTableContent({children, style})  {
    return (
        <>
        <StyledDataTableContentWrapper className="dataTableContentWrapper"> 
            <StyledDataTableContent className='dataTableContent' role="table" style={style}>
                {children}
            </StyledDataTableContent>
        </StyledDataTableContentWrapper>
        </>
    )
}