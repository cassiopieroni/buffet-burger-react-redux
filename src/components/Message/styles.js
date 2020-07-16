import styled from "styled-components"
import successIcon from "../../assets/success-30x30.png"
import errorIcon from "../../assets/error-30x30.png"

export const StyledLi = styled.li`
	background: url(${props => (props.isError ? errorIcon : successIcon)}) no-repeat left
		4% center;
	background-color: ${props => (props.isError ? "#FF0400" : "#71FF33")};
	color: ${props => (props.isError ? "#f1f1f1" : "#012840")};
	border: 1px solid ${props => (props.isError ? "#F25252" : "#f4f4f4")};
	font-weight: ${props => (props.isError ? "bold" : "none")};
	padding: 20px 20px 20px 70px;
	font-style: italic;
	margin: 5px 25px 5px 0;
	box-shadow: 4px 4px 5px black;
	border-radius: 10px 0 10px 10px;
	position: relative;
	min-width: 250px;

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

	&::after {
		content: "";
		width: 2px;
		height: 40px;
		background-color: ${props => (props.isError ? "#f1f1f1" : "#012840")};
		opacity: 0.5;
		position: absolute;
		top: 8px;
		left: 55px;
	}
`
