import styled from "styled-components"

export const StyledHeader = styled.header`
	background-color: var(--background-colorA);
	transition: all 0.3s ease-in-out;
	width: 100%;
	max-width: 100%;
	min-height: 10vh;

	nav {
		height: 100%;
		width: 100%;
		padding: 20px 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		text-decoration: none;
		transition: all 0.3s ease-in-out;

		&:hover {
			transform: translateY(-5px) scale(1.02);
		}
	}

	h1 {
		font-size: 2rem;
		font-weight: bold;
		font-style: italic;
		color: var(--text-color);
		text-shadow: var(--contrast-A) 2px 2px 2px;
		padding: 5px;
	}

	ul {
		display: flex;
		align-items: center;
	}

	ul a {
		margin-left: 8px;
	}

	ul a img {
		padding: 5px;
		cursor: pointer;
	}

	ul div {
		position: relative;
	}

	ul div span {
		position: absolute;
		bottom: 15px;
		right: 0px;
		background-color: var(--contrast-A);
		padding: 1px 4px;
		font-size: 1rem;
		color: var(--text-color);
		border-radius: 5px;
	}

	@media (min-width: 600px) {
		nav {
			padding: 20px;
		}

		h1 {
			font-size: 2.3rem;
		}
	}

	@media (min-width: 900px) {
		nav {
			padding: 20px 40px;
		}

		nav ul a {
			margin-left: 24px;
		}
	}

	@media (min-width: 1500px) {
		nav {
			padding: 20px 50px;
		}
	}
`
