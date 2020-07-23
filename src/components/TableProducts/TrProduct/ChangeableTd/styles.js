import styled from "styled-components"

export const StyledTd = styled.td`
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* height: 40px; */
	}

	div span {
		margin: 5px;
	}

	p {
		cursor: pointer;
		text-decoration: underline;
		width: max-content;
		padding: 5px;
		margin: 0 auto;
		transition: all 0.1s ease-in-out;

		&:hover {
			color: red;
		}
	}

	@media (min-width: 600px) {
		div {
			flex-direction: row;
			justify-content: center;
		}
		div span {
			margin: 8px;
		}
	}
`

export const StyledBtn = styled.button`
	cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
	background-color: transparent;
	width: max-content;
	height: max-content;
	border: none;

	img {
		transition: all 0.2s ease-in-out;
	}

	&:hover img {
		transform: ${props => (props.disabled ? "none" : "translateY(-3px)")};
	}
`
