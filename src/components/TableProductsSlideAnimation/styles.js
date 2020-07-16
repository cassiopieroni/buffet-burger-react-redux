import styled from "styled-components"

export const StyledDiv = styled.div`
	width: 90%;
	margin: 10px auto;
	overflow: hidden;

	div:last-child {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 15px 0;
		position: relative;

		&::before {
			content: "";
			width: 100%;
			height: 2px;
			background-color: #f1f1f1;
			position: absolute;
			top: -5px;
		}

		p:last-child {
			font-style: italic;

			span {
				font-weight: bold;
			}
		}
	}
`

export const StyledDivSlide = styled.div`
	animation-duration: 0.6s;
	animation-name: ${props => (props.isStartSlideOut ? "slideOut" : "slideIn")};

	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideOut {
		0% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(-100%);
		}
	}
`

export const StyledDivControlTable = styled.div`
	width: max-content;
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	box-sizing: border-box;
	padding: 5px;
	transition: all 0.2s ease-in-out;

	img {
		margin-left: 10px;
		transition: all 0.2s ease-in-out;
	}

	&:hover p {
		text-decoration: underline;
	}

	&:hover img {
		transform: ${props => (props.arrowToUp ? "translateY(-4px)" : "translateY(4px)")};
	}
`
