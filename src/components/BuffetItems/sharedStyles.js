import styled from "styled-components"

export const StyledLiItemsDisplay = styled.li`
	margin: 8px;
	padding: 0;
	background-color: ${props => (props.isChecked ? "salmon" : "gray")};
	flex-grow: 1;
	cursor: pointer;

	label {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 100%;
		padding: 16px 24px;
		box-sizing: border-box;
	}

	label p {
		font-weight: bold;
	}

	label span {
		margin-left: 8px;
		font-size: 0.9rem;
	}

	input {
		display: none;
	}
`
