import styled from "styled-components"

export const StyledLi = styled.li`
	background-color: ${props =>
		props.isError ? "var(--error-background)" : "var(--success-background)"};
	color: ${props => (props.isError ? "var(--error-color)" : "var(--success-color)")};
	border: 1px solid
		${props => (props.isError ? "var(--error-color)" : "var(--success-color)")};
	font-weight: bold;
	font-style: italic;
	margin-bottom: 8px;
	box-shadow: 4px 4px 2px black;
	border-radius: 10px 0 10px 10px;
	position: relative;
	min-width: 300px;
	max-width: 600px;
	display: flex;
	align-items: center;

	animation-duration: ${props => props.delay}s;
	animation-name: slideinOut;

	@keyframes slideinOut {
		from {
			opacity: 0;
		}
		5% {
			opacity: 0.5;
			transform: scale(1.1);
		}
		10% {
			opacity: 1;
			transform: scale(1);
		}
		95% {
			opacity: 1;
			transform: scale(1);
		}
		98% {
			opacity: 0.5;
			transform: scale(0.8);
		}
		to {
			opacity: 0;
			transform: scale(0.3);
		}
	}

	div {
		padding: 15px;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 10px 0 0 10px;
	}

	p {
		padding: 0 16px 0 8px;
		text-transform: uppercase;
	}
`
