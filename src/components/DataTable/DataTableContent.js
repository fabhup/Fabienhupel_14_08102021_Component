
import styled from 'styled-components'

const StyledDataTableContentWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

const StyledDataTableContent = styled.div`
    width: 100%;
    display: grid; 
    padding: 0px;
    overflow: auto;
    max-height: 30em;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 4px rgb(0 0 0 / 20%);
        border-radius: 0px;
        background-color: white;
        margin-top: 40px;
        position: relative;
        top: 0;
        left: 0;
        height: 20%;
    }
    
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background: none;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
        background-color: #0277BD;
    }
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