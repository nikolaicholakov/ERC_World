import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Work Sans', serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2;
        color: ${({ theme }) => theme.colors.mainTextColor};
        background: ${({ theme }) => theme.colors.bodyBackground};
        scroll-behavior: smooth;
    }


    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    *,*::after,*::before { 
        position:relative;
        box-sizing: border-box;
        /* outline: 1px solid green; */
    } 

    ::-webkit-input-placeholder,:-ms-input-placeholder ,::placeholder{ 
        color: ${({ theme }) => theme.colors.secondaryTextColor};
    }



    table,th,td{
        border:none;
    }
    
    h1, h2, h3, h4, h5, span, p, ul, li{
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.scrollbarTrack};
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius:8px;
        background: ${({ theme }) => theme.colors.scrollbarThumb};
      }
`;
