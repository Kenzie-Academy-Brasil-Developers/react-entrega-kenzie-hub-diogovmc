import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    text-decoration: none;

    :root{
        --toastify-color-error: #e83f5b;

    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
      
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
      
    --sucess: #3fe864;
    --negative: #e83f5b;
      
    --title1: 18px;
    --title2: 16px;
    --title3: 14px;
    --headline: 12px;
    }
    body{
        width: 100%;
        height: 100vh;
        background-color: var(--grey-4);
        .backdrop {
             position: fixed;
            z-index: 1040;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #000;
            opacity: 0.5;}
    }
    #root{
        width: 100%;
        height: 100%;
    }
}`;
