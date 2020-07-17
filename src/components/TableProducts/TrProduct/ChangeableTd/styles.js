import styled from "styled-components"

export const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;

	button {
		cursor: pointer;
		padding: 3px 0;
		border: none;

		img {
			transition: all 0.2s ease-in-out;
		}

		&:hover img {
			transform: translateY(-3px);
		}
	}

	span {
		margin: 0 5px;
	}
`
