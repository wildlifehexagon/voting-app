import styled, { injectGlobal } from "styled-components"

injectGlobal`
    body {
        margin: auto;
        padding: 0;
        font-family: sans-serif;
    }
`

export const CenteredText = styled.div`
  text-align: center;
`
