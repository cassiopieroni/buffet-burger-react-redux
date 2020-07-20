import styled from "styled-components"

export const StyledDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;

	span {
		margin: 0 5px;
	}
`

export const StyledBtn = styled.button`
	cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
	padding: 3px 0;
	border: none;

	img {
		transition: all 0.2s ease-in-out;
	}

	&:hover img {
		transform: ${props => (props.disabled ? "none" : "translateY(-3px)")};
	}
`
