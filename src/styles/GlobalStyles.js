import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	
	:root {
        --background-colorA: #1d3557;
        --background-colorB: #f1faee;
        --contrast-A: #e63946;
        --color-A: #a8dadc;
		--color-B: #457b9d;
        --text-color: #f1faee;
		--error-background: #ffe6e8;
		--error-color: #cf1717;
		--success-background: #e5f9e0;
		--success-color: #00a878;
	}
  
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
  
	body {
        font-size: 16px;
        min-width: 340px;
	}

	body, input, button {
		font-family: Roboto, Arial, Helvetica, sans-serif;
	}

	h1, h2, h3, h4, h5, h6 {
		color: var(--text-color);
		font-family: Ubuntu;
	}
`
