import styled from "styled-components"
import { StyledDivsBuffetWrapper } from "../SharedStyles"

export const StyledDiv = styled(StyledDivsBuffetWrapper)`
	padding-top: 20px;
	padding-bottom: 20px;
	position: relative;
	margin: 15px auto;

	&::before {
		content: "";
		width: 100%;
		height: 1px;
		background-color: #f2c777;
		position: absolute;
		top: 0;
	}
	&::after {
		content: "";
		width: 100%;
		height: 1px;
		background-color: #f2c777;
		position: absolute;
		bottom: 0;
	}

	label {
		display: flex;
		align-items: center;
		margin: 10px 0;
		font-weight: bold;
		justify-content: start;
	}

	input {
		margin-right: 10px;
	}
`
